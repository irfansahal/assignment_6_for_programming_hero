"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Library } from "../types/libraryItems";

interface workoutContextType  {
        workoutLists : Library[];
        setWorkoutLists : Dispatch<SetStateAction<Library[]>>;
        planLists : Library[];
        setPlanLists : Dispatch<SetStateAction<Library[]>>;
        todaysMode : boolean ; 
        setTodaysMode : Dispatch<SetStateAction<boolean>>;
        savedMode :  boolean; 
        setSavedMode  : Dispatch<SetStateAction<boolean>>;
        doneLists : Library[],
        setDoneList :  Dispatch<SetStateAction<Library[]>>;
     }


export const WorkoutContext = createContext<workoutContextType | null>(null)


const WorkoutContextProvider = ({children}:{children : ReactNode}) => {
    
    const [ workoutLists , setWorkoutLists ] = useState<Library[]>([])
    const [ planLists , setPlanLists ] = useState<Library[]>([])
    const [ todaysMode , setTodaysMode ] = useState<boolean>(true)
    const [ savedMode , setSavedMode ] = useState<boolean>(false)
    const [ doneLists , setDoneList ] = useState<Library[]>([])

     const context : workoutContextType = {
        workoutLists,
        setWorkoutLists,
        planLists,
        setPlanLists,
        todaysMode , 
        setTodaysMode,
        savedMode , 
        setSavedMode,
        doneLists , 
        setDoneList
     }

    return(    
    <WorkoutContext.Provider value={context}>
          {children}
    </WorkoutContext.Provider>

    )
}
export default WorkoutContextProvider