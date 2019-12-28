const jwt = require('jsonwebtoken')
const models = require('../models')
const key = require('../config/secret_key')


const User = models.tbl_users

exports.login = (req,res)=>{
    const result = [];
    const errors = [];
    
    if (!req.body.username) errors.push("`username` is required");
    if (!req.body.password) errors.push("`password` is required");
    const hasErrors = Boolean(errors.length);

    if (hasErrors) {
        let objError = Object.assign({}, errors)
        result.push(objError)
        return res.send(result)
    }

    const username = req.body.username
    const password = req.body.password

    User.findOne({
        where: {username,password}
        }).then(user => {
        if(user){
            const token = jwt.sign({id:user.id},key.secret)
            const email = user.email
            result.push({message:"success",username,token})
            res.send(result)
        }else{
            result.push({message:"failed"})
            res.send(result)
        }
    })
}