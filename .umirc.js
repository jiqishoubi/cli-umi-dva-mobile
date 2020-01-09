import routesArr from './config/router.config'
import webpackConfig from './config/webpackConfig'

export default {
  treeShaking: true, //gzip 后的尺寸能减少 10K
  plugins: [
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      //路由级的动态加载（code splitting）
      dynamicImport: {
        webpackChunkName: true,
      },
      title: '',
      dll: false,
      /**
       * 开启快速点击
       */
      fastClick: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  hash: true, //开启文件hash后缀
  routes: routesArr, //启用配置式路由

  // //自定义主题
  // lessLoaderOptions: {
  //   modifyVars: {
  //     "brand-primary": "red",
  //   }
  // },

  /**
   * history
   */
  // browser
  // history: 'browser', //browser hash
  // publicPath: '/piccGasCard/', //指向静态资源文件所在的路径  必须以/结尾    默认/
  // base: '/piccGasCard',
  // browser end

  // hash
  history: 'hash',
  publicPath: './', //指向静态资源文件所在的路径     默认/
  // hash end

  //配置浏览器最低版本
  targets: {
    ie: 10,
  },
  chainWebpack: webpackConfig, //webpack

  // 配置 react 和 react-dom 不打入代码 //在html中引入
  "externals": {
    "react": "window.React",
    "react-dom": "window.ReactDOM"
  }
}

