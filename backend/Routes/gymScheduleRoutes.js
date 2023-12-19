import express from "express";
import { GymSchedule } from "../models/gymSchedule.js";

const router = express.Router();

router.post('/', async (request,response)=>{
    try {
        if(
            !request.body.name ||
            !request.body.reps
        ){
            return response.status(400).send({message: 'send all the required fields, name and reps'})
        }


        const newGymSchedule = {
            name: request.body.name,
            reps: request.body.reps
        }

        const aGymSchedule = await GymSchedule.create(newGymSchedule);

        return response.status(201).send(aGymSchedule);
    } catch (error) {
        
    }
})

router.get('/', async(request,response)=>{
    try {
        const gymSchedules = await GymSchedule.find({});

        return response.status(200).json(gymSchedules);

    } catch (error) {
        console.log(error.message);
    }
})

export default router;