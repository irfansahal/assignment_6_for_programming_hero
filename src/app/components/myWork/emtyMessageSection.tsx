"use client"

import { WorkoutContext } from "@/app/context/workoutContext"
import { useContext } from "react"
import EmtyStat from "./emtyStat"

const EmtyMessageSection = () => {
    const context = useContext(WorkoutContext)
       if(!context){
        throw new Error("useWorkout must be used inside WorkoutContextProvider")
       }
       const {
        workoutLists,
        planLists,
        savedMode,
        todaysMode
       } = context
       
       

    return(
        <>
         <div className={ todaysMode === true  ? " block flex justify-center pt-10" : " hidden flex justify-center pt-10"}>
            {workoutLists.length <= 0 ? <EmtyStat/> : ""}
         </div>
         <div className={ savedMode === true ? " block flex justify-center pt-10" : "hidden flex justify-center pt-10"}>
           {planLists.length <= 0 ?  <EmtyStat/>:""}
         </div>
        </>
    )
}
export default EmtyMessageSection