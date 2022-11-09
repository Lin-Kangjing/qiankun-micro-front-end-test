/*
 * @Description: 
 * @FilePath: \subapp\vue.config.js
 * @Date: 2022-11-08 09:06:35
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2022-11-08 09:49:50
 * @author: Lin_kangjing
 */
const path = require('path')
const webpack = require('webpack')
const buildDate = JSON.stringify(new Date().toLocaleString())
const packageName = require('./package.json').name;

function resolve (dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
const vueConfig = {
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
    // webpack plugins
    plugins: [
      new webpack.DefinePlugin({
        APP_VERSION: `"${require('./package.json').version}"`,
        BUILD_DATE: buildDate
      })
    ],
  },

  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
    config.resolve.alias.set('@@', resolve('src/components'))

  },


  devServer: {
    // development server port 8000
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 8001
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    // proxy: {
    //   '/api': {
    //     target: 'https://autopost.dotease.cn:8030',
    //     // target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: undefined,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

module.exports = vueConfig
