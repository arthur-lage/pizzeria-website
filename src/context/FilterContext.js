import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [currentSearch, setCurrentSearch] = useState("");

  return (
    <FilterContext.Provider value={{ currentFilter, setCurrentFilter, currentSearch, setCurrentSearch }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  const { currentFilter, setCurrentFilter, currentSearch, setCurrentSearch } =
    context;

  return {
    currentFilter,
    setCurrentFilter,
    currentSearch,
    setCurrentSearch,
  };
}
