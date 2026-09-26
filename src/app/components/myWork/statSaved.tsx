"use client"

import { WorkoutContext } from "@/app/context/workoutContext"
import { Library } from "@/app/types/libraryItems"
import { useContext } from "react"

const SavedStat = () => {
    const context = useContext(WorkoutContext)
    
        if(!context){
            throw new Error(`useWorkout must be used inside WorkoutContextProvider`)
        }
    
        const {  savedMode , planLists } = context

         const totalMinutes = planLists.reduce((acc, item:Library)=>{
            return acc + item.duration
         },0)

         const totalCalories = planLists.reduce((acc, item:Library)=>{
            return acc + item.caloriesBurned
         },0)
    return(
        <>
        <div className={savedMode ? "block flex flex-col gap-5 items-center pt-5" :"hidden flex flex-col gap-5 items-center pt-5"}>
        <div className=" h-auto lg:h-30 bg-[#1a2131] w-[80%] md:w-[97%] rounded-lg border-2 border-zinc-600 flex flex-col justify-center items-center py-5  sm:flex pl-10 sm:flex-row gap-10 md:gap-50 lg:gap-97 sm:justify-start sm:items-center">
               <div className="">
                  <h1 >Exercises</h1>
                  <h1 className="text-4xl">{planLists.length}</h1>
               </div>
               <div className="border-b sm:border-b-0 pb-3 sm:pb-0 sm:border-l border-zinc-700 pl-3">
                <h1>Minutes</h1>
                  <h1 className="text-4xl">{totalMinutes}</h1>
               </div>
               <div className="border-b sm:border-b-0 pb-3 sm:pb-0 sm:border-l border-zinc-700 pl-3">
                    <h1>Calories</h1>
                  <h1 className="text-4xl">{totalCalories}</h1>
               </div>
               </div>
            </div>   
        </>
    )
}
export default SavedStat