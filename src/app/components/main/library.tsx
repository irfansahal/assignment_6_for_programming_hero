import { Library } from "@/app/types/libraryItems";
import Card from "./libraryCard"
import Link from "next/link";

const LibrarySection = async () => {
 
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const datas = await res.json()
    console.log(datas.length, datas);
    

  return(
    <>
      <div className="px-15 sm:px-25 pb-10">
       <div className="py-10">
      <h1 id="library" className="font-bold text-2xl ">THE LIBRARY</h1>
      <p>Twelve lifts covering every major muscle group.</p> 
      </div> 
       <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 ">
        {datas.map((item : Library)=>{
            return <Link key={item.id} href={`/${item.id}`}>
            <Card           
             item={item}/>
            </Link> 
        })}
       </div>
       </div>
    </>
  )
}

export default LibrarySection