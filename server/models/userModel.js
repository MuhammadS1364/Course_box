// for create a model or collection into mongodb,
// step1 import mognoo moduel

import mongoose from 'mongoose'

// step2 Crate Schema for the model ,

const userSchema = mongoose.Schema({
    // Create table header for the table
    userName :{
        type: String,
        require: true
    }
})