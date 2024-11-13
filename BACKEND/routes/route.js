const routes = require("express").Router();


const router = require("./services");
const servicesRouter = require("./services")

router.use("/", servicesRouter)

module.exports = router;