import { WorkoutContext } from "@/app/context/workoutContext";
import Link from "next/link";
import { useContext } from "react";

const BadgeButton = () => {
    const context = useContext(WorkoutContext);

   if(!context){
    throw new Error("useWorkout must be used inside WorkoutContextProvider")
   }

   const { workoutLists , planLists } = context

    return(
        <>
      <div className="">
     <Link href={"/myWork"}>
     <button className="btn bg-black border-0 " >
     Plan <div className="badge badge-sm badge-secondary bg-[#ccff00] border-0 p-2 sm:p-4 rounded-full text-black font-bold text-lg">{workoutLists.length}</div>
     </button>
     </Link>   
     </div> 
     <div>
     <Link href={"/myWork"}>
     <button className="btn bg-black border-none">
     Saved <div className="badge badge-sm badge-secondary bg-black  p-2 sm:p-4 rounded-full border-2 border-zinc-600 font-bold text-lg">{planLists.length}</div>
     </button>
     </Link>   
     </div>
        </>
    )
}

export default BadgeButton