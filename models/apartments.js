const mongoose = require("mongoose")
const apartmentSchema = mongoose.Schema({
    apartment_location: String,
    apartment_size: String,
    apartment_rent: Number
})
module.exports = mongoose.model("apartments",
    apartmentSchema)