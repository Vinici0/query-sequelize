const { Countrie, Location, Region, Department } = require("../models/");
const sequelize = require("sequelize");
const { dbConnection } = require("../database/config");
const getRegion = async (req, res) => {
  try {
    const region = await Region.findAll();
    res.json(region);
  } catch (error) {
    console.log(error);
  }
};

const getLocationsByRegion = async (req, res) => {
  try {
    const { location_id } = req.params;
    console.log(location_id);
    const locations = await Location.findAll({
      where: {
        location_id,
      },
      include: [
        {
          model: Countrie,
          include: [
            {
              model: Region,
            },
          ],
        },
      ],
    });

    res.json(locations);
  } catch (error) {
    console.log(error);
  }
};

const gerDepartsmentsByRegion = async (req, res) => {
  try {
    const departments = await Department.findAll({
      include: [
        {
          model: Location,
          include: [
            {
              model: Countrie,
              include: [
                {
                  model: Region,
                },
              ],
            },
          ],
        },
      ],
    });
    res.json(departments);
  } catch (error) {
    console.log(error);
  }
};

const RegionByDepartment = async (req, res) => {
  try {
    const departmentId = req.params.departmentId; // Obtén el ID del departamento desde los parámetros de la solicitud

    const regions = await Region.findAll({
      include: [
        {
          model: Countrie,
          include: [
            {
              model: Location,
              include: [
                {
                  model: Department,
                  where: { department_id: departmentId }, // Filtra los departamentos por ID
                },
              ],
            },
          ],
        },
      ],
    });

    res.json(regions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const getRegionsFromStoredProcedure = async (req, res) => {
  try {
    // Ejecuta el procedimiento almacenado usando Sequelize
    const results = await dbConnection.query("EXEC innerAllRegion", {
      type: sequelize.QueryTypes.SELECT,
    });

    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  getRegion,
  getLocationsByRegion,
  gerDepartsmentsByRegion,
  RegionByDepartment,
  getRegionsFromStoredProcedure,
};
