const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

//funções

//endpoint
router.route("/services").post((req, res) => serviceController.create(req, res));


module.exports = router;