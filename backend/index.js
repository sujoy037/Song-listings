import express from "express";
import db from "./config/database.js";
import path from 'path'
import fs from 'fs'
import artistRoutes from "./routes/artist.js";
import songRoutes from "./routes/song.js";
import userRoutes from "./routes/user.js";
import ratingRoutes from "./routes/rating.js";
import fileUpload from "express-fileupload";



import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(fileUpload());

// static file define
app.use("/Images", express.static('Images'))




app.use('/addsong',songRoutes);
app.use('/song',songRoutes);
app.use('/addartist', artistRoutes);
app.use('/registration',userRoutes);
app.use('/login',userRoutes);
app.use('/rating',ratingRoutes);

 
app.listen(5000, () => console.log('Server running at port 5000'));