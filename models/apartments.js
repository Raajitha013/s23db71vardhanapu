const mongoose = require("mongoose")
const apartmentSchema = mongoose.Schema({
    //Name: String,
    //LifeSpan: String,
   // Speed: Number,
    apartment_location: {
        type: String,
        required: true

    },
    apartment_size: {
        type: String,
        required: true

    },
    apartment_rent: {
        type: Number,
        required: true,
        min : 0,
        max : 10000

    }
})
module.exports = mongoose.model("apartments",
    apartmentSchema)

    // const apartmentSchema = mongoose.Schema({
    //     apartment_location: String,
    //     apartment_size: String,
    //     apartment_rent: Number
    // })