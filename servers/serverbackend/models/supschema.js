const mongoose = require('mongoose');


const signuptemplate = new mongoose.Schema({
    // schema for signup form data to be stored in the mongodb database
    fullname: { 
        type: String, 
        required: true },

    username: {
        type: String,
        required: true},

    email:{
        type:String,
        required: true},

    password: {
        type: String,
        required: true},

    date: {
        type: Date,
        default: Date.now()
    }
    })

    module.exports=mongoose.model("mycollection", signuptemplate)
    //exports the schema to be used in the server.mjs file
