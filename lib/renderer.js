const { rollup } = require('rollup')

const splitConfig = config => {
  return [
    Object.keys(config).reduce((res, key) => {
      if (key !== 'output') {
        res[key] = config[key]
      }
      return res
    }, {}),
    config.output
  ]
}

const rollupRenderAsync = async config => {
  const [inputOptions, outputOptions] = splitConfig(config)
  const bundle = await rollup(inputOptions)
  const { output } = await bundle.generate(outputOptions)
  return output[0].code
}

function renderer(data) {
  const config = {
    input: data.path,
    output: { format: 'iife' }
  }
  this.execFilterSync('rollup:renderer', config, { context: this })
  Object.assign(config, this.config.rollup)
  return rollupRenderAsync(config).catch(error => {
    throw error
  })
}

module.exports = renderer
