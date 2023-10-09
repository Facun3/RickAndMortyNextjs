import { CharacterType } from "@/types/Types";
import { ReactNode } from "react";

export type AppContextType = {
    search: string;
    updateSearch: (search: string) => void,
    isAuthenticated: boolean;
    characters: CharacterType[];
    updateCharacters: () => Promise<void>
  };
  
export type AppProviderProps = {
    children: ReactNode; 
  };