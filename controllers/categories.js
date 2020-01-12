const models = require('../models')
const Sequelize = require('sequelize');

const Categories = models.tbl_categories
const Events = models.tbl_events
const Users = models.tbl_users

const Op = Sequelize.Op;

exports.adddCategory = (req, res) => {
   
    let result = [];
    const errors = [];
    
    if (!req.body.name) errors.push("`name` is required");
    
    const hasErrors = Boolean(errors.length);

    if (hasErrors) {
        let objError = Object.assign({}, errors)
        result.push(objError)
        return res.send(result)
    }

    Categories.create({name:req.body.name}).then(response =>{
    id = response.id
            
        Categories.findAll({
        }).then(response =>{
            res.send(response)
        })
    })
}

exports.showEventsByCategory = (req, res) => {
    Events.findAll({
        where:{categoryId:req.params.id},
        include:[{model:Categories,attributes:['id','name'],as:'category'},
                    {model:Users,attributes:['id','username','phonrNumber','email','img'],as:'createdBy'}]
    }).then(response =>res.send(response))
}