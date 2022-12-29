const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.Signin = async (req, res)=>{
    const reqData = req.body

    const cons = await User.findOne({
        attributes:['id','name','email','password'],
        where:{
            email:reqData.email
        }
    })

    if(cons === null){

        reqData.password = await bcrypt.hash(reqData.password, 8);

        await User.create(reqData).then(()=>{
            return res.status(200).json({
                mensagem: `${reqData.name} você foi cadastrado com sucesso!!`
            });
        }).catch((err)=>{
            return res.status(400).json({
                mensagem: `${reqData.name} Algo deu errado, Tente novamente!`
            });
        });
    }else{
        res.status(400).json({
            mensagem:'Ops! Tente um e-mail valido!'
        })
    }
    
}

exports.Login = async(req, res)=>{
    const reqData = req.body

    const cons = await User.findOne({
        attributes:['id','name','email','password'],
        where:{
            email:reqData.email
        }
    });

    if(cons === null){
        return res.status(401).json({
            mensagem:'Dados Invalidos!'
        })
    }else{
        return res.status(200).json({
            mensagem:'Login realizado!'
        });
    }
}