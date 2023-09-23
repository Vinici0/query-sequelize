const { DataTypes } = require("sequelize");
const { dbConnection } = require("../database/config");

const Department = dbConnection.define(
  "Department",
  {
    department_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    department_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "departments",
    timestamps: false,
  }
);

module.exports = {
  Department,
};
