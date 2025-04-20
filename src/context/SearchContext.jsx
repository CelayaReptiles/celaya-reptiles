import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  return (
    <SearchContext.Provider value={{ terminoBusqueda, setTerminoBusqueda }}>
      {children}
    </SearchContext.Provider>
  );
};
