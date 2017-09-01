/**
 * 在app.use(router)之前调用
 */
const response_formatter = async (ctx, next) => {
    //先去执行路由
    await next();
    console.log(ctx.body)
    //如果有返回数据，将返回数据添加到data中
    if (ctx.body) {
        ctx.body = {
            httpCode: "OK",
            message: 'success',
            data:ctx.body
        }
    } else {
        ctx.body = {
            httpCode: "OK",
            message: 'success'
        }
    }
}

module.exports = response_formatter;
