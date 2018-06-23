# GMTC
GMTC 前后端分离培训

此 repo 为《GMTC 深入理解前后端分离》培训的实践内容

此 repo 里面包含 SPA/MPA 三种模式的示例代码，需要大家挑选其中一个来体验前后端分离完整的开发流程

文件目录介绍

- docs - 文档目录，包含代码规范，接口文档
- mock_server - 前端开发人员本地开发调试服务器
- mpa - 基于 Node.js 的 MVC 项目
- spa - 基于 Vue 的单页项目

## 任务

需要完成一个简单的需求，需求如下：

在首页上显示当前所处地址和现在的天气，样式不限

所处地址和天气信息由后端返回，并且已经制定好了接口文档，参见 `docs/api/api-weather.md` 文件

开发者根据上述任务描述需要完成的事情有如下：

1. 挑选你的方案，这里只有 mpa 和 spa 的脚手架，ssr 暂无
2. 根据接口文档编写前端开发者用于调试的 mock 接口，参见 `mock_server`
3. 在 mpa/spa 项目里通过调用请求，获取 mock server 里的测试数据
4. 将数据显示在主页上

### 如何发送请求

可以采用 [axios](https://github.com/axios/axios) 来实现，兼容 Node.js 和浏览器端

如下示例：

```javascript
const axios = require('axios');
axios.get('http://localhoust:8079/api/user')
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    console.error(err)
  })
```

上面发送请求的代码在 spa 和 mpa 项目中都有对应的例子，可以参阅
