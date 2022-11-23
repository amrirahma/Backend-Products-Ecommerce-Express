import {categoryUpdate, getCategory, deleteCategory, writeCategory} from './action.js'

export const createCategory = writeCategory

export const showCategory = getCategory

export const deleteCategory = deleteCategory

export const updateCategory = categoryUpdate
