const pla_hospital_manager = require('../model/pla_hospital_manager');

//查询院区
const findPlaHospitals = async(ctx, next) => {

	// console.log(ctx.path.split('/'))
	// console.log(ctx.path)
	// console.log(ctx.path)
	// var params = ctx.request.;
	// console.log(ctx.request.body)
	// if () {}

	// ctx.body={v:1};
	// console.log(1111);

	// ctx.Request.querystring
	let a =await pla_hospital_manager.findAll({
	    where:{
	    	ID:1
	    }
	})
	ctx.body=a[0].dataValues
	// .then(data=>{
	// 	console.log(data[0].dataValues)
	// 	ctx.body=JSON.stringify(data[0].dataValues);
	// }, ()=>{
	// 	console.log('查询错误')
	// })
}



module.exports = [
    { method: 'post', path: '/pla/findPlaHospitals', handler: findPlaHospitals },
    // { method: 'GET', path: '/hello', handler: fn_hello }
];