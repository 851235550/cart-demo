module.exports = {
  // 基本路径
  publicPath: '/',

  // 构建时的输出目录
  outputDir: 'dist',

  // 放置静态资源的目录
  assetsDir: 'static',

  // html 的输出路径
  indexPath: 'index.html',

  // 文件名哈希
  filenameHashing: true,

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: true,

  // 是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,

  // babel-loader 默认会跳过 node_modules 依赖。
  transpileDependencies: [
    /* string or regex */
  ],

  // 是否为生产环境构建生成 source map？
  productionSourceMap: true,

  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  crossorigin: '',

  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  integrity: false,

  // 调整内部的 webpack 配置
  configureWebpack: () => {}, // (Object | Function)
  chainWebpack: () => {},

  // 配置 webpack-dev-server 行为。
  devServer: {
    host: '0.0.0.0', // 主机名， 127.0.0.1， 真机 0.0.0.0
    port: 8080, // 端口号，如果端口号被占用，会自动提升1
    https: false,
    hotOnly: false,
    open: true, // 启动服务时自动打开浏览器访问
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    // '/api': {  // 意思是当请求是以 /api 开头的请求，都走代理
    proxy: {
      // '/api': {
      [process.env.VUE_APP_BASE_API]: {
        // 目标服务器地址，代理访问：http://localhost:8001
        target: 'http://localhost:8001',
        // 是否启用websockets
        ws: true,
        // 开启代理，在本地创建一个虚拟服务端
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '',  // 就是将请求地址中的 /api 前缀替换成空的
          ['^' + process.env.VUE_APP_BASE_API]: process.env.VUE_APP_BASE_API
        }
      }
    }
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。
  pwa: {},

  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}
