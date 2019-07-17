const { Nuxt } = require('nuxt');
const Bridge = require('azure-functions-bridge');

const config = require('./nuxt.config');
const nuxt = new Nuxt(config);

const bridge = new Bridge({ nuxt, fnName: 'NuxtApp' });

module.exports = async function (context) {
  const response = await bridge.launcher(context);
  context.res = response;
};
