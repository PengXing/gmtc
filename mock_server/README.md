# Mock Server

mock server 是给前端开发人员调试时使用的

## 启动

运行如下命令

```bash
$ node app.js
```

## 编写

编写 config.js 文件，如下面的例子

```javascript
{
  'GET /api/user': './data/user.json', // 如果是字符串，会被认为是文件地址，会到相应的地址读取文件
  'GET /api/user/:id': function (ctx) { // 如果是函数，则会执行，并且将返回值返回，如果返回值是 Promise，则返回 Promise then 的结果
    return {
      status: 0,
      message: '',
      data: {}
    }
  }
}
```

1. `GET /api/user/:id`，GET 为请求的 method，如果没写，默认为 GET
2. `/api/user/:id` 会通过 `path-to-regexp` 转换为正则表达式，可以参考 https://github.com/pillarjs/path-to-regexp
