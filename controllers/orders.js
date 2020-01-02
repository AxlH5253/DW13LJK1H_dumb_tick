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