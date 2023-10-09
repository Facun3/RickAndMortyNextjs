'use client'
import { createContext, useContext, useState } from "react";
import { AppContextType, AppProviderProps } from "./Types";
import { fetchCharacters } from "@/services/characterService";

export const AppContext = createContext<AppContextType | undefined>(
  undefined
);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if(!context) throw Error("useAppContext must be used within a provider!");
  return context;
}


export const AppProvider = ({ children }: AppProviderProps) => {

  const [ search, setSearch ] = useState("");
  const [ characters, setCharacters ] = useState<any[]>([]);

  const updateSearch = (search: string) => {
    setSearch(search);
  }

  const updateCharacters = async () => {
    const data = await fetchCharacters({search});
    if(data.length){
      setCharacters(data)
    }
  }

  const contextValue: AppContextType = {
    search,
    updateSearch,
    isAuthenticated: false,
    characters,
    updateCharacters
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};