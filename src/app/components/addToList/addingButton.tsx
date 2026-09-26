"use client"
import { WorkoutContext } from "@/app/context/workoutContext";
import { Library } from "@/app/types/libraryItems";
import { useContext } from "react";
import { CiCalendar } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { toast } from "react-toastify";


const AddingPlan_Or_save = ({ data }: {data : Library}) => {
    const context = useContext(WorkoutContext);
    if(!context){
      throw new Error("useWorkout must be used inside WorkoutContextProvider")
    }

    const { workoutLists, setWorkoutLists, planLists , setPlanLists} = context
    
    const addingWorkoutLists = () => {
     const existingWorkout = workoutLists.find((item)=>{
        if(item.id === data.id){
           return  item
        }
       });
       if(existingWorkout){
        return toast.error(`You Already Added ${data.name} To Todays List`)
       }
       setWorkoutLists([...workoutLists, data])
       toast.success(`You Added ${data.name} To The Todays List`)
    }
    
    const addingPlanLists = () => {
      const existingItem = planLists.find((item)=>{
        if(item.id === data.id){
          return item
        }
      });
      if(existingItem){
        return toast.error(`You Already Added ${data.name} To PlanList`)
      }
      setPlanLists([...planLists, data])
      toast.success(`You Successfully Added ${data.name} To PlanList`)
    }
    
    console.log("workoutLists",workoutLists, planLists);
    return(
    <>
    <div className="card-actions justify-start">
    <button className="btn btn-primary  bg-[#ccff00] text-black shadow-none rounded-lg"
    onClick={addingWorkoutLists}
    ><CiCalendar /> Add to today&apos;s plan</button>
      <button className="btn btn-primary  border-2 border-zinc-600 bg-[#0b0b0fee] shadow-none rounded-lg"
      onClick={addingPlanLists}
      ><CiSaveDown2 /> Save for later</button>
    </div>
    </>
    )
}
export default AddingPlan_Or_save