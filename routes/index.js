const express = require('express');
const router = express.Router();

console.log('Router loaded');

const homeController = require('../controllers/home_controllers');
router.get('/',homeController.home);


module.exports = router;