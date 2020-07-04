const {alias} = require('react-app-rewire-alias')

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  alias({    
    '@components': 'src/components',
    '@pages': 'src/pages',
  })(config)

  return config;
}