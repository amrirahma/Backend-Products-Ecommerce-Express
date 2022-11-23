import asyncHandler from 'express-async-handler'
import Category from '../../modelProducts/categoryProducts.js'

export const writeCategory = asyncHandler(async (req, res) => {
    const {title} = req.body
    try {
        if (title === '') {
            res.json({message: 'all input should be required '})
        } else {

            const category = await new Category({
                title
            })
            await category.save()
            res.status(200).json({message: 'success'})
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'registration failed'})
    }


})

export const getCategory = asyncHandler(async (req, res) => {
    try {
        const category = await Category.find()
        res.json({data: category})

    } catch (err) {
        console.log(err)

    }
})

export const deleteCategory = asyncHandler(async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'category deleted'})

    } catch (err) {
        console.log(err)
        res.status(402).json({message: 'failure while deleting category'})
    }
})

export const categoryUpdate = asyncHandler(async (req, res) => {
    try {
        await Category.findByIdAndUpdate(req.params.id, {
            title: req.body.title,

        })
        res.json({message: 'ok'})

    } catch (err) {
        console.log(err)
    }
})
