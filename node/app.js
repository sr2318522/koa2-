const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const controller = require('./conteroller');
global._ = require('lodash');
require('./model/sequelize');
//包装中间件
const response_formatter = require('./middlewares/response_formatter');
const request_formatter = require('./middlewares/request_formatter');

// error handler
onerror(app)
// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}))
// 包装中间件


// logger
app.use(async(ctx, next) => {
    const start = new Date()

    console.log(start)
    await next()
    const ms = new Date() - start
    ctx.response.type = 'text/html';
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(response_formatter);
app.use(request_formatter);

app.use(controller());

//mysql
// var sequelize = new Sequelize(config.database, config.username, config.password, {
//     host: config.host,
// 	dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 30000
//     },
// });


// routes
// app.use(router.routes(), router.allowedMethods());

//app.use(index.routes(), index.allowedMethods())
//pp.use(users.routes(), users.allowedMethods())




module.exports = app