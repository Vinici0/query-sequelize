const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../../middlewares/validar-campos");

const {  getRegion,
    getLocationsByRegion,
    gerDepartsmentsByRegion,
    RegionByDepartment,getRegionsFromStoredProcedure } = require("../../controllers/innerjoinController");

const router = Router();

// router.get("/innerjoin/:location_id", getRegion);
router.get("/innerjoinDeap", getLocationsByRegion);
router.get("/DepartmentByRegio", gerDepartsmentsByRegion);
router.get("/regionByDepartment/:departmentId", RegionByDepartment);
router.get("/getRegionsFromStoredProcedure", getRegionsFromStoredProcedure);


module.exports = router;