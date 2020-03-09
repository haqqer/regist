'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registrant = sequelize.define('Registrant', {
    regisId: DataTypes.STRING,
    name: DataTypes.STRING,
    nim: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    institute: DataTypes.STRING,
    socmed: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    deletedAt: 'destroyTime'
  });
  Registrant.associate = function(models) {
    // associations can be defined here
  };
  return Registrant;
};
