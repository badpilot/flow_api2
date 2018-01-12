const Koa = require('koa');
const path = require('path');
const sjs = require('ejs');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const config = require('./lib/config');
const staticCache = require('koa-static-cache');
const views = require('koa-views');
const koaBody = require('koa-body');
const compress = require('koa-compress');
const logger = require('koa-logger');
const app = new Koa();

//session存储配置
const sessionMysqlConfig = {
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host
}

//配置session中间件
app.use(session({
    key: 'USER_SID',
    store: new MysqlStore(sessionMysqlConfig)
}))

//配置静态资源加载中间件
app.use(koaStatic(
    path.join(__dirname , './public')
))

//配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname , './views'),{
    extension:'ejs'
}))

//使用表单解析中间件
app.use(bodyParser())

//使用新建的路由文件
app.use(require('./routers/router.js').route())

app.listen(3000)
console.log('listening on port 3000')
