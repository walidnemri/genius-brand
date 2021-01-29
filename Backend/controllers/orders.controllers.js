//const  { Order }  = require('../data-layer/models')
//console.log(Order)
const { Order } = require('../data-layer/models');

// create a new order
const create = async (req, res, next) => {
    const newOrder = req.body
    let order
    try {
        order = await Order.create({...newOrder})
    } catch (error){
        return next(new Error('[POST] could not create a new order'))
    }
    
    res.json({
        order,
        message:'new Order created'
    })

}

// get all Orders
const index = async (req, res, next) => {
    console.log("all Order")
    res.send({order: await Order.findAll()})
}

// get on order by id
const show = async (req, res, next) => {
    const id = req.params.id
    let order;

    try {
        order = await Order.findByPk(id)
    } catch (error) {
        return next(new Error('[GET] could not find order'))
    }
    res.json({
        message:"succes",
        order
    })

}

// update order
const update = async(req, res, next) => {
    const updateOrder = req.body
    const { id } = req.params
    let order;

    try {
        order = await Order.findByPk(id)
    } catch (error) {
        return next(new Error('[PUT] could not find order'))
    }
    console.log('prooduct',order)
    try {
      order = await order.update({...updateOrder})
    } catch (error) {
        return next(new Error('[PUT] could not update order'))
    }

    res.json({
        order,
        message:'succes update'
    })
    
    
}


// delete order
const destroy = async (req, res, next) => {
    const { id } = req.params

    try {
      await Order.destroy({
        where: {
            id
        }
    })
    } catch (error) {
        return next(new Error('[DELETE] could not DELETE order'))
    }

    res.json({
        message: "success"
    })

}

module.exports = {
    create,
    index,
    show,
    update,
    destroy
}