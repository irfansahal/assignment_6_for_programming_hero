"use client"

import { WorkoutContext } from "@/app/context/workoutContext"
import { useContext } from "react"

const SelectBars = () => {

     const context = useContext(WorkoutContext)
     if(!context){
        throw new Error("useWorkout must be used inside WorkoutContextProvider")
     }
    const {
         workoutLists,
        setWorkoutLists,
        planLists,
        setPlanLists,
        todaysMode , 
        savedMode , 
    } = context
    

    const changeHandlertodays = (value :string) => {
       console.log("select value",value);
      
          if(todaysMode){
             if(value === "Duration"){
               setWorkoutLists([...workoutLists].sort((a , b )=> b.duration - a.duration))
           }else if(value === "Calories"){
               setWorkoutLists([...workoutLists].sort((a , b)=> b.caloriesBurned - a.caloriesBurned))
           }else{
               setWorkoutLists([...workoutLists].sort((a , b)=> b.rating - a.rating))
           }
          }
    }

    const changeHandlerSaved = (value :string) => {
          if(savedMode){
               if(value === "Duration"){
               setPlanLists([...planLists].sort((a , b )=> b.duration - a.duration))
           }else if(value === "Calories"){
               setPlanLists([...planLists].sort((a , b)=> b.caloriesBurned - a.caloriesBurned))
           }else{
               setPlanLists([...planLists].sort((a , b)=> b.rating - a.rating))
           }
          }
    }

    return(
        <>
        <div className={todaysMode === true ? "block": "hidden"}>
                <select defaultValue="Pick an AI Model" className="select select-error border-[#ccff00] outline-none focus:outline-none "
                onChange={(e)=>changeHandlertodays(e.target.value)}
                >
                 <option disabled={true}>Pick an AI Model</option>
                 <option value={"Duration"}>Duration</option>
                  <option value={"Calories"}>Calories</option>
                 <option value={"Rating"}>Rating</option>
                </select>
             </div>
             <div className={savedMode === true ? "block": "hidden"}>
                <select defaultValue="Pick an AI Model" className="select select-error border-[#ccff00] outline-none focus:outline-none "
                onChange={(e)=>changeHandlerSaved(e.target.value)}
                >
                 <option disabled={true}>Pick an AI Model</option>
                 <option value={"Duration"}>Duration</option>
                  <option value={"Calories"}>Calories</option>
                 <option value={"Rating"}>Rating</option>
                </select>
             </div>
        </>
    )
}

export default SelectBars