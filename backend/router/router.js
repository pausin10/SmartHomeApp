const express = require('express');
const router = express.Router();
const deviceList = require('../device/deviceList.json');

router.get('/', (req, res) => {
    res.json(deviceList);
});

module.exports = router;