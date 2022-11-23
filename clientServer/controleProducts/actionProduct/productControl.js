import {
    writeProduct,
    showAllProduct,
    deleteItem,
    detailItem,
    updateItemProduct,
    bayCategory,
    updateGet
} from './action.js'

export const createProduct = writeProduct

export const listProduct = showAllProduct

export const deletItemProduct = deleteItem

export const detailsProduct = detailItem

export const updateItem = updateItemProduct

export const getUpdate = updateGet

export const searchProduct = bayCategory
