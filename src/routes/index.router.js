const express = require('express');
const {systemInfo } = require('../controllers/systeminfo.controller');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Página principal');
});


router.use('/systeminfo', systemInfo);
//router.use('/issuesform', () =>{});

module.exports = router;  