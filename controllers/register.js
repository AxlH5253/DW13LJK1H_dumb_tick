const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.tbl_users
const key = require('../config/secret_key')

exports.register = (req,res)=>{
    const result = [];
    const errors = [];
    
    if (!req.body.username) errors.push("`username` is required");
    if (!req.body.name) errors.push("`name` is required");
    if (!req.body.email) errors.push("`email` is required");
    if (!req.body.password) errors.push("`password` is required");
    if (!req.body.img) errors.push("`img` is required");
    if (!req.body.phoneNumber) errors.push("`phoneNumber` is required");
    const hasErrors = Boolean(errors.length);

    if (hasErrors) {
        let objError = Object.assign({}, errors)
        result.push(objError)
        return res.send(result)
    }

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const img = req.body.img
    const phonrNumber = req.body.phoneNumber

    let request = {'username':username,'email':email,'password':password,'phonrNumber':phonrNumber,'img':img}
    User.create(request).then(response=>{
        let id = response.id
        const token = jwt.sign({id:id},key.secret)
        User.findOne({
            where:{id:id},
            attributes: ['id']}
        ).then(user=>{
            result.push({message:'success',token})
            res.send(result)
        })
    })
}