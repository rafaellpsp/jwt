const express = require('express');
const { Signin, Login } = require('../controllers/begines');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('teste')
});

router.post('/signin', Signin);
router.post('/login', Login);




module.exports = router;