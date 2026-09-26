"use client"

import { useContext } from "react"
import SelectedCardToday from "./selectedCardToday"
import SelectedCardSaved from "./slectedCardSaved"
import { WorkoutContext } from "@/app/context/workoutContext"


const ListingSection = () =>{
    const context = useContext(WorkoutContext)
           if(!context){
            throw new Error("useWorkout must be used inside WorkoutContextProvider")
           }
           const {
            workoutLists,
            planLists,
            
           } = context
          console.log("update from listing",workoutLists);
          console.log("update from listing",planLists);


          
    return(
        <>
         <div className="flex justify-center">
            <div className="flex flex-col w-[80%] md:w-[97%] gap-4">
             {workoutLists.map((item, index)=>{
              return <SelectedCardToday key={index} item={item} /> 
             })} 
             {planLists.map((item, index)=>{
              return <SelectedCardSaved key={index} item={item}/>
             })}
             
            </div>
          </div>

        </>
    )
}
export default ListingSection