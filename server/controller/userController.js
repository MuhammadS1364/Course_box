
// Import the userModel from the model dir

import Users from '../models/userModel.js';

export const create = async (request, response) =>{
    try {
        const newUser = new Users (request.body);
        const {userEmail} = newUser;

        // Chekig if the email alrady exist 
        const isExist = await Users.findOne({userEmail})
        if (isExist){
            return response.status(400).json({message : "User is already exist."})
        }

        // saving the newUser Data
        const saveData = await newUser.save();
        response.status(200).json(saveData)
    } catch (error) {
        response.status(500).json({errorMessage: error.message})
        console.log(`We are getting error : ${error.message}`);
    }
}