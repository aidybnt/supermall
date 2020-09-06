//自定义配置
// module.exports = {
//   configureWebpack: {
//     devServer: {
//       //防止控制台不停的报错
//       disableHostCheck: true,
//       //跨域设置
//       proxy: {
//         '/api': {
//           target: 'http://www.laravel.cn',
//           changeOrigin: true,
//           pathRewrite: {
//             '/api': ''
//           }
//         }
//       }
//     },
//   }
// }