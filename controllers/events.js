const models = require('../models')
const Sequelize = require('sequelize');

const Categories = models.tbl_categories
const Events = models.tbl_events
const Users = models.tbl_users

const Op = Sequelize.Op;


exports.showDetailEvent = (req, res) => {
    Events.findAll({
        where:{id:req.params.id},
        include:[{model:Categories,attributes:['id','name'],as:'category'},
        {model:Users,attributes:['id','username','phonrNumber','email','img'],as:'createdBy'}]
    }).then(response =>res.send(response))
}

exports.addEvents = (req, res) => {
   
    let userId = req.userId
    let result = [];
    const errors = [];
    
    if (!req.body.title) errors.push("`title` is required");
    if (!req.body.img) errors.push("`img` is required");
    if (!req.body.descriptions) errors.push("`descriptions` is required");
    if (!req.body.categoryId) errors.push("`categoryId` is required");
    if (!req.body.price) errors.push("`price` is required");
    if (!req.body.address) errors.push("`address` is required");
    if (!req.body.urlMaps) errors.push("`urlMaps` is required");
    if (!req.body.startTime) errors.push("`startTIme` is required");
    if (!req.body.endTime) errors.push("`endTime` is required");
    
    const hasErrors = Boolean(errors.length);

    if (hasErrors) {
        let objError = Object.assign({}, errors)
        result.push(objError)
        return res.send(result)
    }

    Categories.findAll({
        where:{id:req.body.categoryId}
    }).then(response=>{
        if(response.length<=0){
           result.push({message:"Category id not found"})
           return res.send(result)
        }
    })

    request = {'title':req.body.title,'img':req.body.img,'description' : req.body.description,
                'categoryId':req.body.categoryId,'userId':userId,'startTime':req.body.startTime,
                'endTime':req.body.endTime,'price':req.body.price,'address':req.body.address,'usrlMaps':req.body.usrlMaps}
            
    Events.create(request).then(response =>{
    id = response.id
        
    Events.findOne({
    where:{id:id},
    include:[{model:Categories,attributes:['id','name'],as:'category'},
    {model:Users,attributes:['id','username','phonrNumber','email','img'],as:'createdBy'}]
         }).then(response =>{
              result.push(response)
              res.send(result)
          })
      })
}