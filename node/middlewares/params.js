const params = {
    findPlaHospitals: {
    	hospitalCode:{
            // required: true,
            query:true,
            type: 'string'
        },
        hospitalName:{
            // required: true,
            query:true,
            type: 'string'
        },
        page:{
            type: 'number'
        },
        pageSize:{
            type: 'number'
        }
    }
}





module.exports = params;