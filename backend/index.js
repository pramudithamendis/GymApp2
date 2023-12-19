import express from "express";
import { PORT, mongoDURL} from "./config.js"
import mongoose from "mongoose";
import { GymSchedule } from "./models/gymSchedule.js";
import gymScheduleRoutes from "./Routes/gymScheduleRoutes.js"
const app = express();

app.use(express.json());

app.get('/', (request,response)=>{
    console.log("Hi");
    return response.status(234).send('Welcome')
})


app.use('/gym', gymScheduleRoutes);

mongoose
    .connect(mongoDURL)
    .then((response)=>{ console.log("Connected to db");
    app.listen(PORT, ()=>{
        console.log(PORT);
    })})
    .catch(()=>{ console.log(error)})