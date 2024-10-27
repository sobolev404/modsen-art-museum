import React, { createContext, useState, ReactNode } from "react";

interface SearchContextType {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
