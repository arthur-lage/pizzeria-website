import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [currentFilter, setCurrentFilter] = useState("all");

  return (
    <FilterContext.Provider value={{ currentFilter, setCurrentFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  const { currentFilter, setCurrentFilter } = context;

  return {
    currentFilter,
    setCurrentFilter,
  };
}
