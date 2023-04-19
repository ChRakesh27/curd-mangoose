const userRoutes = require('../controllers/user.controller')

const express = require('express');
const router = express.Router();

router.use('/user', userRoutes);

module.exports = router;