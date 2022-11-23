import mongoose from 'mongoose'

const chekoutSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    cin:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        default:new Date(toString())
    },

    product:{
        type:[Object]

    },
    total:{
        type:Number,


    }
})
const chekout=mongoose.model('Command',chekoutSchema)
export default chkout
