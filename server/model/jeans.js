const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jeansSchema = new Schema({
    name:String,
    type:String,
    color:String
})

module.exports = mongoose.model("Jeans",jeansSchema);