import asyncHandler from 'express-async-handler'
import Product from '../../modelProducts/productModel.js'
import Category from '../../modelProducts/categoryProducts.js'

export const writeProduct = asyncHandler(async (req, res) => {
    const { title, content, image, price, category } = req.body
    const today = new Date()
    const date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    try {

        const product = await new Product({
            title, image, content, price, category, Date: date
        })
       await product.save()
        res.status(200).json({ message: 'Successfully registered the product !' })



    } catch (err) {
        console.log(err)
        if (title === '' || image === '' || content === '' || price === '',category==='') {
            res.status(400).json({ product: 'All inputs shoud be obligatory' })
        }
        res.status(500).json({ message: 'Error saving your information' })
    }

})

export const showAllProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.find().populate("category")
        // Category
        const categoryProd = await Category.find()

        res.json({ data: { product, categoryProd } })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.err.message})
    }


export const deleteItem = asyncHandler(async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: ' itemProduct Deleted' })

    } catch (err) {
        console.log(err)
        res.status(402).json({ message:  err.err.message})
    }
})

export const detailItem = asyncHandler(async (req, res) => {

    try {
        const product = await Product.findById(req.params.id).populate('category')
        res.json({ detail: product })
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.err.message})

    }
    return res.status(200).json({ message:  'success! ' })
})

export const updateGet = asyncHandler(async (req, res) => {
    const data = await Product.findById(req.params.id)
    res.json({
        status: 200,
        data: data
    })
})

export const updateItemProduct = asyncHandler(async (req, res) => {
    const data = await Product.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        price: req.body.price
    });
    res.json({
        message: 'valid',
        status: 200,
        data: data
    })
    res.redirect('/')
});

export const bayCategory = asyncHandler(async (req, res) => {
    const articles = await Product.findById({
        $or: [
            { title: req.params.search },

        ],
    }).populate("category");
    res.json({ data: articles })
})})


