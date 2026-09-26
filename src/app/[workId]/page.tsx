import Image from "next/image";
import { Library } from "../types/libraryItems";
import AddingPlan_Or_save from "../components/addToList/addingButton";
import { notFound } from "next/navigation";

type WorkIdProps = {
  params: Promise<{
    workId: string;
  }>;
};

const WorkId =async ({ params }:WorkIdProps ) => {
    const { workId } = await params
    console.log(workId);
   
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workId}`)
    if(!res.ok){
       notFound()
    }
    const data :Library  = await res.json();
    console.log("workId" , data);
    
    if(!data || Object.keys(data).length === 0 ){
       notFound()
    }

    return(
        <>
         <div className="m-10 lg:flex lg:justify-center">
        <div className="card lg:card-side bg-[#0b0b0fee] shadow-sm pb-10 px-5">
  <figure className="lg:h-[720px] lg:w-[450px]">
    <Image
      src={data.image}
      width={500}
      height={100}
      alt="Album" />
  </figure>
  <div className=" lg:pl-15 pt-6 flex flex-col gap-7">
    <div className=" flex flex-col gap-3">
    <h2 className="card-title text-4xl">{data?.name}</h2>
    <p>{data?.description}</p>
    <div className="flex gap-2">
    {data?.muscleGroups?.map((item , index)=>{
        return <div key={index} className="badge badge-secondary bg-[#ccff00] border-0 rounded-4xl text-black" >{item}</div>
    })}
    </div>
    <div>
    </div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <tbody className="lg:min-w-2xl ">
      {/* row 1 */}
      <tr>
        <td className="text-zinc-400 font-bold">EQUIPMENT</td>
        <td className="text-end ">{data?.equipment}</td>
      </tr>
      {/* row 2 */}
      <tr>
        
        <td className="text-zinc-400 font-bold">DIFFICULTY</td>
        <td className="text-end ">{data?.difficulty}</td>
        
      </tr>
      {/* row 3 */}
      <tr>

        <td className="text-zinc-400 font-bold">SETS</td>
        <td className="text-end ">{data?.sets}</td>

      </tr>
      <tr>

        <td className="text-zinc-400 font-bold">REPS </td>
        <td className="text-end ">{data?.reps}</td>

      </tr>
      <tr>

        <td className="text-zinc-400 font-bold">DURATION </td>
        <td className="text-end ">{data?.duration}</td>

      </tr>

       <tr>

        <td className="text-zinc-400 font-bold">CALORIES  </td>
        <td className="text-end ">{data?.caloriesBurned}</td>

      </tr>

       <tr>

        <td className="text-zinc-400 font-bold">RATING </td>
        <td className="text-end ">{data?.rating}</td>

      </tr>
    </tbody>
  </table>
</div>
    </div>
    <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">instructions</h1>
        <ul>
        {data?.instructions?.map((item , index )=>{
            return <li key={index} className="py-2">{index+1}. {item}</li>   
        })}
        </ul>
        {/* <p>Lie on the bench with eyes under the bar and feet planted.,</p>
        <p>Lie on the bench with eyes under the bar and feet planted.,</p>
        <p>Lie on the bench with eyes under the bar and feet planted.,</p> */}


    </div>

   <AddingPlan_Or_save data={data}/>
       
  </div>
</div>
      </div>
        </>
    )
}
export default WorkId