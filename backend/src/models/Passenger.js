const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('passenger', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    dni: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    timestamps: false
  });
};