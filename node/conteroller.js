const fs = require('fs');
function addMapping(router, mapping) {
	mapping.forEach(item=>{
		if (item.method.toUpperCase()=='GET') {
		    router.get(item.path,item.handler);
		    console.log(`register URL mapping: GET ${item.path}`);
		}
		if (item.method.toUpperCase()=='POST') {
		    // var path = url.substring(5);
		    // router.post(path, mapping[url]);
		    router.post(item.path,item.handler);
		    console.log(`register URL mapping: POST ${item.path}`);
		}
	})
}
function addControllers(router,dir) {
	//找到这个文件夹
    var files = fs.readdirSync(__dirname + dir);
    //找到这个文件夹下所有的.js文件
    var js_files = files.filter(f => f.endsWith('.js'));
    //循环js文件
    js_files.forEach(url=>addMapping(router,require(__dirname + `${dir}/${url}`)))
    // for (var f of js_files) {
    //     console.log(`process controller: ${f}...`);
    //     //循环加载
    //     let mapping = require(__dirname + `${dir}/${f}`);
    //     addMapping(router, mapping);
    // }
}


// 如果不传参数，扫描目录默认为'controllers'
module.exports = function (dir='/controllers') {
    let router = require('koa-router')();
    addControllers(router, dir);
    return router.routes();
};