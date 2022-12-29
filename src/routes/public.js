const express = require('express');
const { Signin } = require('../controllers/begines');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('teste')
});

router.post('/signin', Signin)

router.get('/login',(req, res)=>{
    res.send('Login')
})

module.exports = router;