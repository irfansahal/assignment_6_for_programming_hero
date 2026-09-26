import Image from "next/image"

const HeroSection = () => {
    return (
        <>
   <div className="px-10 py-10">
        <div className="hero bg-[#1a2131] py-10 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse  lg:justify-between   px-15 ">
    <Image
      alt="Tailwind CSS hero component"
      src="/banner.png"
      className="max-w-sm rounded-lg "
      width={300}
      height={300}
      />
    <div className="lg:pr-25">
      <h1 className="font-bold text-[#ccff00] lg:pt-5 pb-5">WORKOUT LIBRARY</h1>  
      <h1 className="text-5xl font-bold ">TRAIN WITH INTENT. LOG <br/> EVERY SET.</h1>
      <p className="py-6">
       FitLog is dark, no-nonsense gym companion: pick a lift, lock it<br/>
       into today&apos;s plan, and wathc the week&apos;s work add up.
      </p>
      <a href="#library">
      <button className="btn btn-primary bg-[#ccff00] text-black" >BROSE WORKOUT</button>
      </a>
    </div>
  </div>
</div>
</div>
        </>
    )
}
export default HeroSection