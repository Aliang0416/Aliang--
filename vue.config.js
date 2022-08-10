const { defineConfig } = require('@vue/cli-service')
// 这个文件是vue-cli 创建出来的项目的配置文件
// 在 vue.config.js 这个配置文件中，可以对整个项目的打包、构建进行全局性的配置 I
// webpack在进行打包的时候，底层用到了node .js
// 因此,在vue.config.js 配置文件中，可以导入并使用node.js 中的核心模块
const path = require('path')
const themepath = path.join(__dirname, './src/theme.less')
module.exports = defineConfig({
  publicPath: '',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${themepath}";`
          }
        }
      }
    }
  }
})
