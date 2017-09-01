const params = require('./params');

const request_formatter = async(ctx, next) => {
    let obj = {query:{}};
    let items=params[_.last(ctx.path.split('/'))];
    let nothing = Symbol();
    let user;
    if (ctx.method.toUpperCase()=='GET') {
    	user=ctx.request.query;
    }
    if (ctx.method.toUpperCase()=='POST') {
    	user=ctx.request.body;
    }
    validation(user,items,obj)
	user=obj;
    await next();
    function validation(user,items,obj) {
    	Object.keys(items).map(el=>{
    		let item=items[el]
    		if (item.required){
    			if (_.get(user,el,nothing)==nothing) {
    				console.log(`${el}不可为空`)
    				ctx.throw(412,`${el}不可为空`)
    			}
    			if (typeof(user[el])!==item.type) {
    				console.log(`${el}类型错误`)
    				ctx.throw(412,`${el}类型错误`)
    			}
    			if (item.query) {
    				obj.query[el]=user[el];
    			}else{
    				obj[el]=user[el];
    			}
    		}else{
    			if (item.query) {
    				obj.query[el]=user[el];
    			}else{
    				obj[el]=user[el];
    			}
    		}
    		if (item.children) {
    			validation(user[el].children,items.children,obj[el])
    		}
    	})
    }
}




module.exports = request_formatter;
