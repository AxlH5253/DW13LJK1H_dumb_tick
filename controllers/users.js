const models = require('../models')
const Sequelize = require('sequelize');

const Events = models.tbl_events
const Favorites = models.tbl_favorites
const Users = models.tbl_users

const Op = Sequelize.Op;


exports.showUserProfil = (req, res) => {
    Users.findAll({
        where:{id:req.params.id},
        attributes:['id','username','email','phonrNumber']
    }).then(response =>res.send(response))
}

exports.showUserFavorite = (req,res) => {
    Favorites.findAll({
        whereL:{idUsers:req.params.id},
        include:[{model:Events,attributes:['id','title']}],
    }).then(response=>{
        res.send(response)
    })
}