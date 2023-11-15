const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use('/api/users',userRoutes)

const boatRoutes = require("./boatRoutes");
router.use('/api/boats',boatRoutes)

module.exports = router;