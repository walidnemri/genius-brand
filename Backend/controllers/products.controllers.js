//const  { Product }  = require('../data-layer/models')
//console.log(Product)
const { Product } = require('../data-layer/models');

// create a new product
const create = async (req, res, next) => {
    const newProduct = req.body
    let product
    try {
        product = await Product.create({...newProduct})
    } catch (error){
        return next(new Error('[POST] could not create a new product'))
    }
    
    res.json({
        product,
        message:'new Product created'
    })

}

// get all Products
const index = async (req, res, next) => {
    console.log("all product")
    res.send({product: await Product.findAll()})
}

// get on product by id
const show = async (req, res, next) => {
    const id = req.params.id
    let product;

    try {
        product = await Product.findByPk(id)
    } catch (error) {
        return next(new Error('[GET] could not find product'))
    }
    res.json({
        message:"succes",
        product
    })

}

// update products
const update = async(req, res, next) => {
    const updateProduct = req.body
    const { id } = req.params
    let product;

    try {
        product = await Product.findByPk(id)
    } catch (error) {
        return next(new Error('[PUT] could not find product'))
    }
    console.log('prooduct',product)
    try {
      product = await product.update({...updateProduct})
    } catch (error) {
        return next(new Error('[PUT] could not update product'))
    }

    res.json({
        product,
        message:'succes update'
    })
    
    
}


// delete product
const destroy = async (req, res, next) => {
    const { id } = req.params

    try {
      await Product.destroy({
        where: {
            id
        }
    })
    } catch (error) {
        return next(new Error('[DELETE] could not DELETE product'))
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
