
// Import the userModel from the model dir

import Users from '../models/userModel.js';

export const create = async (request, response) =>{
    try {
        // 1. import your all fields 
        const {userName , userEmail, userPassword} = request.body;

        // 2. Pehle check karein ki email exist karti hai ya nahi

        // Chekig if the email alrady exist 
        const isExist = await Users.findOne({userEmail})
        if (isExist){
            return response.status(400).json({message : "User is already exist."})
        }

        // 3. Naya user object banayein
        const newUser = new Users(request.body);

        // saving the newUser Data
        const saveData = await newUser.save();
        response.status(200).json(saveData)
    } catch (error) {
        response.status(500).json({errorMessage: error.message})
        console.log(`We are getting error : ${error.message}`);
    }
};

// getting all the data from a model or collection

export const getAllUsers = async (request, response) =>{
    try {
        // call the .find() method to find all the data in the model 
        const allUsersData = await Users.find();

        // Check if data not found

        if (!allUsersData || allUsersData.length === 0){
            return response.status(404).json({message : "Users Data Not found......."});
        }

        response.status(200).json(allUsersData)
    } catch (error) {
        response.status(500).json({errorMessage: error.message})
        console.log(`We are getting error : ${error.message}`);
    }
}