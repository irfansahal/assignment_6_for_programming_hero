"use client"

import { WorkoutContext } from "@/app/context/workoutContext"
import { useContext } from "react"

const TabsButtons = () => {
    
    const context = useContext(WorkoutContext);
    if(!context){
        throw new Error("useWorkout must be used inside WorkoutContextProvider")
    }
    const { 
        todaysMode , 
        setTodaysMode,
        savedMode , 
        setSavedMode 
    } = context;

    const todaysChangeHandler = () => {
       if(todaysMode){
         return
       }
       setTodaysMode(!todaysMode)
       setSavedMode(!savedMode)
    }

   const savedChangeHandler = () => {
       if(savedMode){
        return 
       }
       setSavedMode(!savedMode)
       setTodaysMode(!todaysMode)
   }
        console.log("today", todaysMode, "saved", savedMode);       
     
    return(
    <>
    <div className="">
                {/* name of each tab group should be unique */}
         <div className="tabs tabs-box w-[200px]">
          <input type="radio" name="my_tabs_1" className={todaysMode === true ? "tab font-bold text-[#ccff00]" : "tab"} aria-label="Today's plan" onClick={todaysChangeHandler} defaultChecked/>
         <input type="radio" name="my_tabs_1" className={savedMode === true ? "tab font-bold text-[#ccff00]" : "tab"} aria-label="Saved" onClick={savedChangeHandler} />
         </div>
    </div>
    </>
    )
}

export default TabsButtons