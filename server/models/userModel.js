// for create a model or collection into mongodb,
// step1 import mognoo moduel

import mongoose from 'mongoose'

// step2 Crate Schema for the model ,

const userSchema = mongoose.Schema({
    // Create table header for the table
    userName :{
        type: String,
        required: true
    },
    userEmail :{
        type: String,
        required: true,
        unique: true
    },    
    userPassword :{
        type: String,
        required: true
    },
})

// export the model 

export default mongoose.model("Users", userSchema)