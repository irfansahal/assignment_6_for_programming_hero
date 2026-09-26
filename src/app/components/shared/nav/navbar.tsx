"use client"
import Image from "next/image"
import LinkButtons from "./linkButton"
import { useContext } from "react"
import { WorkoutContext } from "@/app/context/workoutContext"
import BadgeButton from "./badgeButton"

const Navbar = () => {

   
    return (
       <div className="navbar bg-black border-b-1 border-b-zinc-600 shadow-sm lg:px-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <LinkButtons/>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><Image src="/logo.png" alt="logo" width={30} height={30}/><span className="pl-3">FITLOG</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <LinkButtons/>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
     
    </ul>
  </div>
  <div className="navbar-end flex flex-col items-end sm:flex sm:flex-row pr-0">
     <BadgeButton/>
  </div>
</div>
    )
}

export default Navbar