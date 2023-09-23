const { Location, Countrie, Region, Department } = require("./index");
Region.hasMany(Countrie, { foreignKey: "region_id" });
Countrie.belongsTo(Region, { foreignKey: "region_id" });
Countrie.hasMany(Location, { foreignKey: "country_id" });
Location.belongsTo(Countrie, { foreignKey: "country_id" });
Location.hasMany(Department, { foreignKey: "location_id" });
Department.belongsTo(Location, { foreignKey: "location_id" });
