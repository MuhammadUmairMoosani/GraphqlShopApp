const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tshirtSchema = new Schema({
    name:String,
    type:String,
    color:String
})

module.exports = mongoose.model("Tshirt",tshirtSchema);