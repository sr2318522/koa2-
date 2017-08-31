const Sequelize = require('sequelize');
const config = require('../config/development');
// import Sequelize from 'sequelize';
// import config from '../config/development';

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
	dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
});



var PLA_Hospital_Manager = sequelize.define('PLA_Hospital_Manager', {
	//院区内码
    ID: {
        type: Sequelize.STRING(32),
        primaryKey: true
    },
    TopLevelHospitalID: Sequelize.STRING(32),//总院内码
    HighLevelHospitalID: Sequelize.STRING(32),//上级医院内码
    HospitalCode: Sequelize.STRING(32), //院区编号，填写组织机构代码，每个医院的代码都是唯一，不会重复。
    HospitalName: Sequelize.STRING(256),//院区名称
    HospitalGradeID: Sequelize.STRING(32),  //院区等级内码
    HospitalGrade: Sequelize.STRING(32),//院区等级
    Phone: Sequelize.STRING(32),//联系电话
    ProvinceID: Sequelize.STRING(32), //省份或直辖市
    CityID: Sequelize.STRING(32),//市/区/县
    CountyID: Sequelize.STRING(32),//区县内码
    StreetID: Sequelize.STRING(32),//街道内码
    PostCode: Sequelize.STRING(32),//邮编
    HospitalLogo: Sequelize.STRING(128),//医院LOGO
    TopLevel: Sequelize.INTEGER,//总院标记 0：不是总院，1：代表总院
    HighLevel: Sequelize.INTEGER,//上级医院标记  0：不是上级医院，1：代表是上级医院
    SuperUserID: Sequelize.STRING(32),//超级管理员内码
    Sort: Sequelize.INTEGER,//顺序
    State: Sequelize.INTEGER,//可用状态（0：停用，1：启用）
    DeleteFlag: Sequelize.INTEGER,//删除标记（0：未删除，1：已删除）
}, {
    timestamps: false,
    tableName:'PLA_Hospital_Manager'
});

PLA_Hospital_Manager.findAll({
    where: {
        ID: '1'
    }
}).then(data=>{
	console.log(data)
}, ()=>{
	console.log('查询错误')
})
module.exports = sequelize;
// export { title, localTitle };
