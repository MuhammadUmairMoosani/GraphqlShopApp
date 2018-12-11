const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sunglassesSchema = new Schema({
    name:String,
    type:String,
    color:String
})

module.exports = mongoose.model("Sunglasses",sunglassesSchema);