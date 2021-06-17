import React from "react";

import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import ProductsSection from "../components/ProductsSection";
import FloatingOrder from "../components/FloatingOrder";

import FilterProvider from "../context/FilterContext";

import { ProductsData } from "../data/ProductsData";

const Home = () => {
  return (
    <div>
      <FilterProvider>
        <Navbar />
        <Filters />
        <ProductsSection products={ProductsData} />
        <FloatingOrder />
      </FilterProvider>
    </div>
  );
};

export default Home;
