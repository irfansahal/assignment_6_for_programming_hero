"use client"
import { WorkoutContext } from "@/app/context/workoutContext";
import { Library } from "@/app/types/libraryItems";
import Image from "next/image"
import Link from "next/link";
import { useContext } from "react";
import { CiStopwatch } from "react-icons/ci";
import { FaLeaf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const SelectedCardSaved = ({ item }:{ item : Library}) => {
  const context = useContext(WorkoutContext)
     if(!context){
      throw new Error("useWorkout must be used inside WorkoutContextProvider")
     }
     const {
          savedMode  ,
          planLists,
        setPlanLists
     } = context
  
const removeHandler = () => {
       const fitaredData = planLists.filter((current : Library)=>{
          if(current.id !== item.id){
             return item
          }
       });
       setPlanLists(fitaredData)
   }

    return(
        <>
         {/* <div className={savedMode ? "block": "hidden"}>
                        <div className="card bg-base-100  shadow-sm ">
          <div className="card-body flex flex-col md:flex-row  justify-start">
            <div className="flex">
                <div className="">
                    <Image src={item.image} alt="saved" width={200} height={100} className="rounded-2xl"/>
                </div>
                <div className="pt-2 flex flex-col items-start">
                   <h1 className="pl-4 text-lg font-bold sm:text-3xl font-sans">{item.name}</h1>
                   <p className="pl-4 text-lg text-zinc-400">{item.description}</p>
                   <div >
                    <div className="card-actions justify-start hidden sm:block">
                          <div className="badge badge-outline border-0 bg-none">
                            <span className="text-[#ccff00] text-xl font-bold"><CiStopwatch /></span>{item.duration} min
                          </div>
                          <div className="badge badge-outline  border-0 bg-none"><span className="text-[#ccff00] text-xl font-bold"><FaLeaf /></span>{item.caloriesBurned} kcal</div>
                          <div className="badge badge-outline  border-0 bg-none"><span className="text-[#ccff00] text-xl font-bold"><FaRegStar /></span>{item.rating}</div>
                        </div>
                   </div>
                </div>
            </div>
            <div>
               <div className="card-actions justify-start sm:hidden block">
                          <div className="badge badge-outline border-0 bg-none">
                            <span className="text-[#ccff00] text-xl font-bold"><CiStopwatch /></span>{item.duration} min
                          </div>
                          <div className="badge badge-outline  border-0 bg-none"><span className="text-[#ccff00] text-xl font-bold"><FaLeaf /></span>{item.caloriesBurned} kcal</div>
                          <div className="badge badge-outline  border-0 bg-none"><span className="text-[#ccff00] text-xl font-bold"><FaRegStar /></span>{item.rating}</div>
                        </div>
              </div>  
             <div className="flex items-center justify-end gap-3 ">
               <div>
                    <Link href={`/${item.id}`}>
                    <button className="btn btn-outline rounded-4xl w-[150px]">View Details</button>
                    </Link>
               </div>
               <div>
                    <button className="btn btn-neutral rounded-4xl bg-[#ccff00] text-black w-[170px]"><span className="font-bold text-xl"><HiOutlineCheck /></span>Mark As Done</button>
               </div>
               <div>
                    <button className="text-3xl" onClick={removeHandler}><MdClose /></button>
               </div>
              </div>
              </div>
        </div>
                      </div>
         */}

        
        <div className={savedMode ? "block" : "hidden"}>
  <div className="card bg-base-100 shadow-sm">
    <div className="card-body flex flex-col md:flex-row justify-between">
      <div className="flex">
        <div className="">
          <Image src={item.image} alt="saved" width={200} height={100} className="rounded-2xl" />
        </div>
        <div className="pt-2 flex flex-col items-start">
          <h1 className="pl-4 text-lg font-bold sm:text-3xl font-sans">{item.name}</h1>
          <p className="pl-4 text-lg text-zinc-400">{item.description}</p>
          <div>
            <div className="card-actions justify-start hidden sm:block">
              <div className="badge badge-outline border-0 bg-none">
                <span className="text-[#ccff00] text-xl font-bold"><CiStopwatch /></span>{item.duration} min
              </div>
              <div className="badge badge-outline border-0 bg-none"><span className="text-[#ccff00] text-xl font-bold"><FaLeaf /></span>{item.caloriesBurned} kcal</div>
              <div className="badge badge-outline border-0 bg-none"><span className="text-[#ccff00] text-xl font-bold"><FaRegStar /></span>{item.rating}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card-actions justify-start sm:hidden block">
          <div className="badge badge-outline border-0 bg-none">
            <span className="text-[#ccff00] text-xl font-bold"><CiStopwatch /></span>{item.duration} min
          </div>
          <div className="badge badge-outline border-0 bg-none"><span className="text-[#ccff00] text-xl font-bold"><FaLeaf /></span>{item.caloriesBurned} kcal</div>
          <div className="badge badge-outline border-0 bg-none"><span className="text-[#ccff00] text-xl font-bold"><FaRegStar /></span>{item.rating}</div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <div className="invisible">
          <button className="btn btn-neutral rounded-4xl bg-[#ccff00] text-black w-[170px]">
            <span className="font-bold text-xl"><HiOutlineCheck /></span>Mark As Done
          </button>
        </div>
        
        <div>
          <Link href={`/${item.id}`}>
            <button className="btn btn-outline rounded-4xl w-[150px]">View Details</button>
          </Link>
        </div>
        
        <div>
          <button className="text-3xl" onClick={removeHandler}><MdClose /></button>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default SelectedCardSaved