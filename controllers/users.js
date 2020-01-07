const models = require('../models')
const Sequelize = require('sequelize');

const Events = models.tbl_events
const Favorites = models.tbl_favorites
const Users = models.tbl_users

const Op = Sequelize.Op;


exports.showUserProfil = (req, res) => {
    let userId = req.userId
    Users.findAll({
        where:{id:userId},
        attributes:['id','username','email','phonrNumber','img','password']
    }).then(response =>res.send(response))
}

exports.showUserFavorite = (req,res) => {
    Favorites.findAll({
        where:{userId:req.params.id},
        include:[{model:Events,attributes:['id','title']}],
    }).then(response=>{
        res.send(response)
    })
}

exports.updateProfil = (req,res) =>{
    id = req.userId
    Users.update({'username':req.body.username,'email':req.body.email,
                 'password':req.body.password,'phonrNumber':req.body.phoneNumber,
                 'img':req.body.img},{where:{id:id}}
    ).then(response=>{
        res.send(response)
    })
}