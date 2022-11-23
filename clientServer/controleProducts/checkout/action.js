import AsyncHandler from "express-async-handler";
import checkout from "../../modelProducts/poproduct/chekoutModel.js"

export const createCkout = AsyncHandler(async (req, res) => {
    const {name, telephone, product, cin, address, total} = req.body
    const today = new Date()
    const date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    try {


        const check = await new checkout({
            name,
            telephone,
            cin,
            address,
            product,
            total,
            Date: date


        })
        await check.save()
        res.json({check: "Order done !"})
    } catch (err) {
        console.log(err)
        if (name === "" || telephone === "" || product === "" || cin === "" || address === "") {
            res.json({err: err.err.message})
        }

    }

})

export const getChekout = AsyncHandler(async (req, res) => {
    const data = await checkout.find()
    res.json({data: data})
})


export const deleteChekout = AsyncHandler(async (req, res) => {
    try {

        const checkout = await checkout.findByIdAndDelete(req.params.id)
        res.status(200).json({
            chekout: 'order deleted !'
        })
    } catch (err) {
        console.log(err)

    }

})
