import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


const app = express();
app.use(bodyParser.json());
dotenv.config()


const PORT = process.env.PORT || 7000
const mongoUrl = process.env.MONGOdb_URL