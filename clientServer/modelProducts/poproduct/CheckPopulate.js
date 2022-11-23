import mongoose from "mongoose";


export const chekoutSchema=mongoose.Schema({

    panierpop:{
        type:[Object]
    },
    Date:{
        type:String,
        default:new Date(toString())
    },
})

const chekoutProduct=mongoose.model('ChekoutP',chekoutSchema)
export default chekoutProduct
