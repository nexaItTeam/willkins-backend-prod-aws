const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UserSign extends Model { }
    UserSign.init({
        signiture: {
            type: DataTypes.STRING,
            field: 'signiture'
        },
        digital_sign: {
            type: DataTypes.JSON,
            field: 'digital_sign'
        }
    }, {
        sequelize,
        tableName: 'user_sign',
        modelName: 'UserSign',
        timestamps: false
    })
    return UserSign
}