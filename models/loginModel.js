
module.exports = (sequelize, dataType) => {

    const loginUser = sequelize.define('customers',{
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        name: {
            type: dataType.STRING,
            allowNull: false,
        },
        email: {
            type: dataType.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: dataType.STRING,
            allowNull: false
        }

    });

    return loginUser;

}

