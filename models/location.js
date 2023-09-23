const { DataTypes } = require("sequelize");
const { dbConnection } = require("../database/config");

const Location = dbConnection.define(
  "Location",
  {
    location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    street_address: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    postal_code: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    state_province: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    country_id: {
      type: DataTypes.CHAR(2),
      allowNull: false,
    },
  },
  {
    tableName: "locations",
    timestamps: false, 
  }
);

module.exports = {
  Location,
};
