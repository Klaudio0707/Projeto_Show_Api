// Aqui é como se fosse as tabelas.

const mongoose = require("mongoose");

const { Schema } = mongoose;


const serviceSchema = new Schema({
    name: {
        type: String,
        Required: true,
    },
    description: {
        type: String,
        Required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,

    },
}, { timestamps: true })

const Service = mongoose.model("Service", serviceSchema);
module.exports = {
    Service,
    serviceSchema,

}

