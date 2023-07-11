import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://<username>:<password>@deltav.mvoo1ik.mongodb.net/?retryWrites=true&w=majority'