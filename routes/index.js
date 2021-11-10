const express = require('express');
const appliance = require('../controllers/appliance');

const router = express.Router();

router.get('/',appliance.getStates);
router.get('/setState',appliance.setState);

module.exports = router ;