'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cake = sequelize.define('Cake', {
    cake_name: DataTypes.STRING,
    eaten: DataTypes.BOOLEAN
  }, {});
  Cake.associate = function(models) {
    // associations can be defined here
  };
  return Cake;
};