import express from 'express'
import {updateGet} from '../controleProducts/actionProduct/action.js'

import {
    listProduct,
    createProduct,
    deletItemProduct,
    detailsProduct,
    searchProduct,
    updateItem
} from '../controleProducts/actionProduct/productControl.js'
import {deleteCommende, showPanier, writeProductChkout} from '../controleProducts/checkout/chekoutProduct.js'
const router = express.Router()
router.route('/create=product').put(createProduct)
router.route('/show=product').get(listProduct)
router.route('/delete=itemProduct/:id').delete(deletItemProduct)
router.route('/update=itemUpdate/:id').post(updateItem)
router.route('/update=itemUpdate/:id').get(updateGet)
router.route('/detail=itemDetail/:id').get(detailsProduct)
router.route('/searchArticle/:id').get(searchProduct)
router.route('/checkout').put(writeProductChkout)
router.route('/checkout').get(showPanier)

export default router
