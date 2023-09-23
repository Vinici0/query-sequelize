const { DataTypes } = require("sequelize");
const { dbConnection } = require("../database/config");

const Region = dbConnection.define(
  "Region",
  {
    region_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    region_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "regions",
    timestamps: false, 
  }
);

module.exports = {
  Region,
};
