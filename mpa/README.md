# mpa

此处 MPA 项目是一个基于 Node.js 的比较简单的项目

## 开发方式

在 `app.js` 里通过监听路由，然后渲染对应的模板文件

```javascript
// 路由
router.get('/', async ctx => {
  // 渲染 templates/index.tpl 文件
  ctx.body = render('index', {title: 'home page'})
})
```
## 启动

### 安装依赖

```bash
$ npm install
```

在国内为了让 npm 安装依赖速度更快，可以更改下载源，如下

```bash
$ npm install --registry=http://registry.npm.taobao.org
```

### 开发调试

```bash
$ npm run dev
```

