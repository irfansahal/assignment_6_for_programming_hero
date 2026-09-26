import { Library } from "@/app/types/libraryItems"
import { CiStopwatch } from "react-icons/ci";
import { FaLeaf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


import Image from "next/image"

const Card = ({ item }: {item : Library} ) => {
    return(
        <>
        <div>
            <div className="card bg-[#1a2131]  shadow-sm h-[400px]">
  <figure >
    <Image
      src={item.image}
      alt={item.name}
      width={400}
      height={300}
      className="bg-cover"
      />
  </figure>
  <div className="card-body">
     <div className="flex gap-2">
         {item.muscleGroups.map((item, index)=>{
         return <div className="badge badge-secondary bg-[#ccff00] border-0 rounded-4xl text-black" key={index}>{item}</div>
      })}
     </div>
    <div className="border-b-1 border-b-zinc-600">
    <h2 className="card-title">
      {item.name}
    </h2>
    <p className="pb-3">{item.equipment}</p>
    </div>
     <div className="card-actions justify-start ">
      <div className="badge badge-outline border-0 bg-none">
        <span className="text-[#ccff00] text-xl font-bold"><CiStopwatch /></span>{item.duration}min
      </div>
      <div className="badge badge-outline  border-0 bg-none"><span className="text-[#ccff00] text-xl font-bold"><FaLeaf /></span>{item.caloriesBurned}kcal</div>
      <div className="badge badge-outline  border-0 bg-none"><span className="text-[#ccff00] text-xl font-bold"><FaRegStar /></span>{item.rating}</div>
    </div>
  </div>
</div>
        </div>
        </>
    )
}
export default Card