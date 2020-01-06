const models = require('../models')
const Sequelize = require('sequelize');

const Events = models.tbl_events
const Orders = models.tbl_orders
const Users = models.tbl_users

const Op = Sequelize.Op;

exports.addOrder = (req, res) => {
   
    let userId = req.userId
    let result = [];
    const errors = [];
    
    if (!req.body.eventId) errors.push("`eventId` is required");
    if (!req.body.quantity) errors.push("`quantity` is required");
    if (!req.body.totalPrice) errors.push("`totalPrice` is required");
    
    const hasErrors = Boolean(errors.length);

    if (hasErrors) {
        let objError = Object.assign({}, errors)
        result.push(objError)
        return res.send(result)
    }

    request = {'eventId':req.body.eventId,'quantity':req.body.quantity,'totalPrice' : req.body.totalPrice,
                'userId':userId,'status':'pending'}
            
    Orders.create(request).then(response =>{
        result.push(response)
        res.send(result)
    })
}

exports.showOrders = (req, res) => {
   
    let userId = req.userId
    let result = []
       
    Orders.findAll({
        attributes:['id','totalPrice','quantity','status'],
        include:[{
            model:Users,
            attributes:['id','username'],
            as:'user'
        },{
            model:Events,
            attributes:['id','startAt','address','title'],
            as:'event'
        }], 
        order: [
            ['createdAt', 'DESC']
        ],
        where:{userId:userId,status:{[Op.not]:'aproved'}}
    }).then(response =>{ 
        response.map((item)=>{
            if(item.status=='pending')
                item = {'id':item.id,'totalPrice':item.totalPrice,'quantity':item.quantity,'btn':'inline','status':item.status,
                        'user':{'id':item.user.id,'username':item.user.username},'event':{'id':item.event.id,'title':item.event.title,
                        'address':item.event.address,'startAt':item.event.startAt}}
            else{
                item = {'id':item.id,'totalPrice':item.totalPrice,'quantity':item.quantity,'btn':'none','status':item.status,
                    'user':{'id':item.user.id,'username':item.user.username},'event':{'id':item.event.id,'title':item.event.title,
                    'address':item.event.address,'startAt':item.event.startAt}}
                }

            result.push(item)
        })       
        res.send(result)
        // res.send(response)
    })
}

exports.showTicket = (req, res) => {
   
    let userId = req.userId
    let result = []
       
    Orders.findAll({
        attributes:['id','totalPrice','quantity','status'],
        include:[{
            model:Users,
            attributes:['id','username'],
            as:'user'
        },{
            model:Events,
            attributes:['id','startAt','address','title'],
            as:'event'
        }], 
        order: [
            ['createdAt', 'DESC']
        ],
        where:{userId:userId,status:'aproved'}
    }).then(response =>{ 
        response.map((item)=>{
            if(item.status=='pending')
                item = {'id':item.id,'totalPrice':item.totalPrice,'quantity':item.quantity,'btn':'inline','status':item.status,
                        'user':{'id':item.user.id,'username':item.user.username},'event':{'id':item.event.id,'title':item.event.title,
                        'address':item.event.address,'startAt':item.event.startAt}}
            else{
                item = {'id':item.id,'totalPrice':item.totalPrice,'quantity':item.quantity,'btn':'none','status':item.status,
                    'user':{'id':item.user.id,'username':item.user.username},'event':{'id':item.event.id,'title':item.event.title,
                    'address':item.event.address,'startAt':item.event.startAt}}
                }

            result.push(item)
        })       
        res.send(result)
        // res.send(response)
    })
}

exports.confirmOrders = (req, res) => {

    const errors = [];
    let result = [];

    if (!req.body.id) errors.push("`id` is required");
    
    const hasErrors = Boolean(errors.length);

    if (hasErrors) {
        let objError = Object.assign({}, errors)
        result.push(objError)
        return res.send(result)
    }
   
    id = req.body.id
       
    Orders.update({status:'confirmed'},{
        where:{id:id}
    }).then(response =>{        
        res.send(response)
    })
}

exports.aproveOrders = (req, res) => {

    let errors = [];
    let result = [];
    
    if (!req.body.id) errors.push("`id` is required");
    
    const hasErrors = Boolean(errors.length);
    errors = Object.assign({}, errors)

    if (hasErrors) {
       
        Orders.findAll({
            attributes:['id','totalPrice','quantity','status'],
            include:[{
                model:Users,
                attributes:['id','username'],
                as:'user'
            },{
                model:Events,
                attributes:['id','startAt','address'],
                as:'event'
            }],
            where:{status:'confirmed'}
        }).then(response =>{   
            response.push(errors)     
            res.send(response)
        })
    }
   
    id = req.body.id
       
    Orders.update({status:'aproved'},{
        where:{id:id,status:'confirmed'}
    }).then(() =>{   
        result.push({message:'success'})     
        res.send(result)
    })
}