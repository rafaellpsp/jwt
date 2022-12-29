const express = require('express');
const app = express();
const public = require('./src/routes/public');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', public);

app.listen(3000,()=>{
    console.log('Server On');
});