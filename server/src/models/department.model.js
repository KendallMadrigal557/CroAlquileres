const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    place: { type: String, required: true },
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    location: { type: String, required: true },
    features: { type: String, required: true },
    status: { type: Boolean, required: true },
    description: { type: String, required: true },
    services: { type: String, required: true },
    phone: { type: String, required: true },
    image: {type: String, required:true}
});


module.exports = mongoose.model('Department', departmentSchema);