const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { env } = require('process');
const { promisify } = require('util');


module.exports = {
    eAdmin: async function(req, res, next){
        const authHeader = req.headers.authorization;
        //console.log(authHeader)
        if(!authHeader){
            return res.status(400).json({
                erro:true,
                mensagem:"É necessário fazer o login! Falta o token A"
            })
        }

        const [/* bearer */,token] = authHeader.split(' ');

        //console.log(`Token:${token}`);

        if(!token){
            return res.status(400).json({
                erro:true,
                mensagem:"Necessário fazer o login! Falta o token B"
            })
        }

        try{
            const decode = await promisify(jwt.verify)(token, env.tokenKey);
            req.userId = decode;    
            return next()

        }catch(err){
            return res.status(400).json({
                erro:true,
                mensagem:"Necessário fazer login! Token Invalido"
            })
        }

    }
}