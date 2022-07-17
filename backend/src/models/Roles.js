const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "roles",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      role: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};