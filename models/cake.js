'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cake = sequelize.define('Cake', {
    cake_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    eaten: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Cake.associate = function(models) {
    // associations can be defined here
  };
  return Cake;
};