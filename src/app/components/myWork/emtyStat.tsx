import Link from "next/link"

const EmtyStat = () => {
    return(
        <>
         <div className="stats shadow w-[80%] md:w-[97%] bg-[#0d1017] h-100 border-2 border-zinc-600">
             <div className="flex flex-col gap-5 justify-center items-center">
               <div>
                <h1 className="font-bold text-3xl font-sans text-center">NOTHING HERE YET</h1>
                 <p className="text-zinc-600">Browse the library and add a lift to get today moving.</p>
               </div> 
              <Link href={"/"}>
            <button className="btn btn-neutral rounded-4xl bg-[#ccff00] text-black">Go To Workouts</button>
              </Link> 
             </div>
</div>
        </>
    )
}
export default EmtyStat