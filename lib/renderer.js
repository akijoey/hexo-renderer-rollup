const { rollup } = require('rollup')

let inputOptions = null
let outputOptions = null

const rollupRenderAsync = async () => {
  const bundle = await rollup(inputOptions)
  const { output } = await bundle.generate(outputOptions)
  return output[0].code
}

function renderer(data, options) {
  const config = Object.assign({
    input: data.path,
    output: {
      format: 'iife'
    }
  }, this.config.rollup, options)
  inputOptions = Object.keys(config).reduce((res, key) => {
    if (key !== 'output') {
      res[key] = config[key]
    }
    return res
  }, {})
  outputOptions = config.output
  return rollupRenderAsync().catch(error => {
    throw error
  })
}

module.exports = renderer
