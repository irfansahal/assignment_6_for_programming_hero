import HeroSection from "./components/main/hero";
import LibrarySection from "./components/main/library";

export default function Home() {
  return (
    <>
     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection/>
      <LibrarySection/>
    </div>   
    
    </>
  );
}
