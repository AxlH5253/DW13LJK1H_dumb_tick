const models = require('../models')
const Sequelize = require('sequelize');

const Categories = models.tbl_categories
const Events = models.tbl_events
const Users = models.tbl_users

const Op = Sequelize.Op;

exports.showEventsByCategory = (req, res) => {
    Events.findAll({
        where:{categoryId:req.params.id},
        include:[{model:Categories,attributes:['id','name'],as:'category'},
                    {model:Users,attributes:['id','username','phonrNumber','email','img'],as:'createdBy'}]
    }).then(response =>res.send(response))
}