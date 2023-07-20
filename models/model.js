 
module.exports = (sequelize,dataType)=>{
    const user = sequelize.define('users',{
        
        name:{
            type:dataType.STRING
        },

        email:{
            type:dataType.STRING,
            primaryKey:true
        },

        age:{
            type:dataType.INTEGER,
        },

    })

    return user;
};

