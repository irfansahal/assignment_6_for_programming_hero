
import SavedStat from "../components/myWork/statSaved";
import TodayState from "../components/myWork/statToday";
import TabsButtons from "../components/myWork/tabs";
import SelectBars from "../components/myWork/selectBars";
import ListingSection from "../components/myWork/listingSection";
import EmtyMessageSection from "../components/myWork/emtyMessageSection";

const MyWork = () => {
  
    

    return(
        <>
        <div className="container  mx-auto my-10">
           <div className="lg:pl-[20px] flex flex-col items-center sm:items-start">
            <h1 className="font-bold text-3xl font-sans">MY PLAN</h1>
            <p className="text-zinc-600">Cap of five lifts for today. Finish them, then load more.</p>
            </div>    
                {/* my plan stat */}
                <SavedStat/>
                <TodayState/>
          
          <div className="flex justify-center items-center py-10">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex sm:flex-row sm:justify-between w-[80%] md:w-[95%]">
              {/* buttons and select bars */}
              <TabsButtons/>
              <SelectBars/>
          </div>
          </div>

         {/* listing section  */}
           <ListingSection/>

          {/* emty message section */}
           <EmtyMessageSection/>
        </div>
        </>
    )
}
export default MyWork