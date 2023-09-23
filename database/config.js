const sequelize = require("sequelize");

const dbConnection = new sequelize("RRHH2", "Maria2", "root", {
  host: "localhost", // Cambia el host si es necesario
  dialect: "mssql", // Utiliza 'mssql' para SQL Server
});

module.exports = {
  dbConnection,
};
