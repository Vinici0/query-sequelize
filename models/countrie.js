const { DataTypes } = require("sequelize");
const { dbConnection } = require("../database/config");

const Countrie = dbConnection.define(
  "Countrie",
  {
    country_id: {
      type: DataTypes.CHAR(2),
      primaryKey: true,
      allowNull: false,
    },
    country_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "countries",
    timestamps: false, 
  }
);

module.exports = {
  Countrie,
};
