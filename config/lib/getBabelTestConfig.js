const getCommonConfig = require('./getBabelCommonConfig');

module.exports = options => {
  const optimize = options.optimize;
  const config = getCommonConfig(options);

  config.presets.push(
    [require.resolve('babel-preset-env'), {

      //only include necessary polyfills for the target
      useBuiltIns: true,

      //transpile for the oldest supported NodeJS LTS - https://github.com/nodejs/LTS
      targets: {
        node: 'current'
      }

    }]
  );

  return config;
};