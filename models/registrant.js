'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registrant = sequelize.define('Registrant', {
    name: DataTypes.STRING,
    nim: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  Registrant.associate = function(models) {
    // associations can be defined here
  };
  return Registrant;
};