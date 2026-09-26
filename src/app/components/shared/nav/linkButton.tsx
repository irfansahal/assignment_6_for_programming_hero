"use client"
import { WorkoutContext } from "@/app/context/workoutContext"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext, useState } from "react"

const LinkButtons = () => {
   
  //   const [ cliclkMode1 , setClickMode1 ] = useState(false)
  //   const [ cliclkMode2 , setClickMode2 ] = useState(true)
 
  //   const styleChangeHandler1 = () => {
  //        setClickMode1(true)
  //        setClickMode2(false)
  //   }
    
  //  const styleChangeHandler2 = () => {
  //        setClickMode1(false)
  //        setClickMode2(true)
  //   }
  
     const currentPathName = usePathname();
     console.log(currentPathName);
     
    
    const clickStyle = "rounded-4xl sm:bg-[#212147] sm:py-2 sm:px-6 text-[#ccff00] font-bold "

  return (
    <>
     <li ><Link href={"/"}><button className={currentPathName === "/" ? clickStyle : "py-2 hover:bg-none rounded-2xl"} >Workouts</button></Link></li>
      <li className="hover:bg-black"><Link href={"/myWork"}><button className={currentPathName === "/myWork" ? clickStyle: "py-2 rounded-4xl"} >My Plan</button></Link></li>
    </>
  )
}

export default LinkButtons