import express from 'express'

// import user Model function that definied in Controller di, 

import { create, getAllUsers } from '../controller/userController.js';


// create a route for this , import from the express

const route = express.Router();

// choose the request method , post , get , etc

// syntax ("yourUrl", your definiedFunction for this(handler))
route.post("/createUser", create);

// now export this route to index.js 
route.get('/getUsers', getAllUsers);
export default route;