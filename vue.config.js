const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack'); // Importando o webpack

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // Defina como true se estiver usando a Options API
        __VUE_PROD_DEVTOOLS__: false, // False para desabilitar devtools em produção
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // False para desabilitar logs detalhados de erro de mismatch em produção
      }),
    ],
  },
});
