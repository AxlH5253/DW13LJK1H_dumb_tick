const models = require('../models')
const Sequelize = require('sequelize');

const Categories = models.tbl_categories
const Events = models.tbl_events
const Users = models.tbl_users

const Op = Sequelize.Op;

exports.showCategories = (req, res) => {
    Categories.findAll({
        attributes: ['id', 'name'],
    }).then(response =>res.send(response))
}

exports.showEvents = (req, res) => {
    Events.findAll({
    }).then(response =>res.send(response))
}

exports.showEvents = (req, res) => {
    if(req.query.title){
        Events.findAll({
            where:{title:{[Op.like]:'%'+req.query.title+'%'}},
            include:[{model:Categories,attributes:['id','name'],as:'category'},
                    {model:Users,attributes:['id','username','phonrNumber','email','img'],as:'createdBy'}]
        }).then(response=>res.send(response))
    }else if(req.query.start_time){
        Events.findAll({
            where: Sequelize.where(Sequelize.fn('date', Sequelize.col('startAt')), '=', req.query.start_time),
            include:[{model:Categories,attributes:['id','name'],as:'category'},
                    {model:Users,attributes:['id','username','phonrNumber','email','img'],as:'createdBy'}]
        }).then(response=>{
            res.send(response);
        })
    }
    else if(req.query.start_time_gte){
        Events.findAll({
            where: Sequelize.where(Sequelize.fn('date', Sequelize.col('startAt')), '>', req.query.start_time_gte),
            include:[{model:Categories,attributes:['id','name'],as:'category'},
                    {model:Users,attributes:['id','username','phonrNumber','email','img'],as:'createdBy'}]
         }).then(response=>{
             res.send(response);
         })
    }
    else{
        Events.findAll({
            include:[{model:Categories,attributes:['id','name'],as:'category'},
            {model:Users,attributes:['id','username','phonrNumber','email','img'],as:'createdBy'}]
        }).then(response =>res.send(response))
    }
}