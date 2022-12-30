const express = require('express');
const router = express.Router();
const { dashboard } = require('../controllers/admin');
const { eAdmin } = require('../middlewares/auth');

router.get('/', eAdmin, dashboard)

module.exports = router;