//const  { Category }  = require('../data-layer/models')
//console.log(Category)
const { Category } = require('../data-layer/models');

// create a new category
const create = async (req, res, next) => {
    const newCategory = req.body
    let category
    try {
        category = await Category.create({...newCategory})
    } catch (error){
        return next(new Error('[POST] could not create a new category'))
    }
    
    res.json({
        category,
        message:'new Category created'
    })

}

// get all Categorys
const index = async (req, res, next) => {
    console.log("all category")
    res.send({category: await Category.findAll()})
}

// get on category by id
const show = async (req, res, next) => {
    const id = req.params.id
    let category;

    try {
        category = await Category.findByPk(id)
    } catch (error) {
        return next(new Error('[GET] could not find category'))
    }
    res.json({
        message:"succes",
        category
    })

}

// update categorys
const update = async(req, res, next) => {
    const updateCategory = req.body
    const { id } = req.params
    let category;

    try {
        category = await Category.findByPk(id)
    } catch (error) {
        return next(new Error('[PUT] could not find category'))
    }
    console.log('prooduct',category)
    try {
      category = await category.update({...updateCategory})
    } catch (error) {
        return next(new Error('[PUT] could not update category'))
    }

    res.json({
        category,
        message:'succes update'
    })
    
    
}


// delete category
const destroy = async (req, res, next) => {
    const { id } = req.params

    try {
      await Category.destroy({
        where: {
            id
        }
    })
    } catch (error) {
        return next(new Error('[DELETE] could not DELETE category'))
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
