const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('trip', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    date_trip: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time_trip: {
      type: DataTypes.TIME,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    available_slots: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    timestamps: false
  });
};