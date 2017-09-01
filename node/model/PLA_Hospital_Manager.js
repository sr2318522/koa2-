const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const pla_hospital_manager = sequelize.define('pla_hospital_manager', {
    //院区内码
    ID: {
        type: Sequelize.STRING(32),
        primaryKey: true,
        allowNull: false
    },
    TopLevelHospitalID: Sequelize.STRING(32), //总院内码
    HighLevelHospitalID: Sequelize.STRING(32), //上级医院内码
    //院区编号，填写组织机构代码，每个医院的代码都是唯一，不会重复。
    HospitalCode: {
        type: Sequelize.STRING(32),
        allowNull: false
    },
    //院区名称
    HospitalName: {
        type: Sequelize.STRING(256),
        allowNull: false
    },
    //院区等级内码
    HospitalGradeID: {
        type: Sequelize.STRING(32),
        allowNull: false
    },
    //院区等级
    HospitalGrade: {
        type: Sequelize.STRING(32),
        allowNull: false
    },
    Phone: Sequelize.STRING(32), //联系电话
    ProvinceID: Sequelize.STRING(32), //省份或直辖市
    CityID: Sequelize.STRING(32), //市/区/县
    CountyID: Sequelize.STRING(32), //区县内码
    StreetID: Sequelize.STRING(32), //街道内码
    PostCode: Sequelize.STRING(32), //邮编
    HospitalLogo: Sequelize.STRING(128), //医院LOGO
    TopLevel: Sequelize.INTEGER(), //总院标记 0：不是总院，1：代表总院
    HighLevel: Sequelize.INTEGER(), //上级医院标记  0：不是上级医院，1：代表是上级医院
    SuperUserID: Sequelize.STRING(32), //超级管理员内码
    Sort: Sequelize.INTEGER(), //顺序
    //可用状态（0：停用，1：启用）
    State: {
        type: Sequelize.INTEGER(),
        defaultValue: 1
    },
    DeleteFlag: Sequelize.INTEGER(), //删除标记（0：未删除，1：已删除）
}, {
    timestamps: false,
    tableName: 'pla_hospital_manager' //表名
});


module.exports = pla_hospital_manager;