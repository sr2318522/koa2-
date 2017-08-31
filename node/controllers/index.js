var fn_index = async(ctx, next) => {
    // let appID = 'wx5db51f3c5c381ed2',
    // appsecret = '4c797335101c71a01c1713b3f83fd26d',
    // Token = 'xiaoyebaomemeda'; console.log(ctx.querystring);
    ctx.response.body = `<h1>Index </h1><h3>koa1</h3><h4>${ctx.querystring}</h4>`;
};
var fn_hello = async(ctx, next) => {
    // var name = ctx.params.name;
    // ctx.response.type = 'text/html';
    // ctx.response.body = `<h3>Hello ${name}</h3>`;
    // get.header.id;

    // // Pet_findALLfor("id":id).then(data=>{

    // // }, data=>{

    // // })

    // let pet = await Pet.findAll({ where: { name: 'Gaffey' } });
    // // pet.then()
    // //数据处理
    // resolve(pet);



    // let pet = petfind({ name: 'Gaffey' });
    // //c
    // //数据处理
    // resolve(pet);



    // //model;
    // petfind(el) {
    //     let pet = await Pet.findAll({ where: { name: 'Gaffey' } });
    //     return pet
    // }






    resolve(pets);
};
module.exports = [
    { method: 'GET', path: '/sys', handler: fn_index },
    { method: 'GET', path: '/hello', handler: fn_hello }
];