# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#1.划分目录结构

#2.初始化CSS  base.css 文件
```
npm install --save normalize.css
import "~normalize.css";
```
#3.配置目录别名 vue.config.js
````
//自定义配置
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 默认别名 @ 对应scr
        'assets': '@assets/',
        'common': '@common/',
        'components': '@components/',
        'network': '@network/',
        'views': '@views/'
      }
    }
  }
}
````
#4.把之前的tabbar整理进来

````
    //马勒戈壁的，ref写成rel找了2个小时，操啊
    // let swiperHeight = this.$nextTick(() => {
    //   this.swheight = parseFloat(this.$refs.swiperWidth.clientWidth) * 0.52
    // })
````
