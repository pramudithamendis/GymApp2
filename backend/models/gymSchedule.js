import mongoose from "mongoose";

const gymSchema = mongoose.Schema({
    name:{type:String, required: true}, 
    reps:{type:Number, required: true}
},  {
    timestamps:true
})


export const GymSchedule = mongoose.model('GymSchedule', gymSchema);