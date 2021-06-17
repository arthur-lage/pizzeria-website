import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { useFilter } from "../context/FilterContext";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .product {
    margin: 2rem;
  }
`;

const ProductsSection = ({ products }) => {
  const { currentFilter, currentSearch } = useFilter();

  const onlyPizzas = products.filter((product) => product.type === "pizza");
  const onlyBeverages = products.filter(
    (product) => product.type === "beverage"
  );

  return (
    <>
      <h1 style={{ marginLeft: "6rem", marginTop: "1.5rem" }}>Opções</h1>

      {currentFilter === "all" && (
        <Section>
          {products.filter((product) => {
            if(currentSearch == ''){
              return product
            } else if(product.name.toLowerCase().includes(currentSearch.toLowerCase())) {
              return product
            }
          }).map(({ name, price, image, size }, key) => (
            <div className="product">
              <Product key={key} name={name} price={price} size={size} image={image} />
            </div>
          ))}
        </Section>
      )}
      {currentFilter === "pizzas" && (
        <Section>
          {onlyPizzas.filter((product) => {
            if(currentSearch == ''){
              return product
            } else if(product.name.toLowerCase().includes(currentSearch.toLowerCase())) {
              return product
            }}).map(({ name, price, image, size }, key) => (
            <div className="product">
              <Product name={name} price={price} size={size} image={image} />
            </div>
          ))}
        </Section>
      )}
      {currentFilter === "beverages" && (
        <Section>
          {onlyBeverages.filter((product) => {
            if(currentSearch == ''){
              return product
            } else if(product.name.toLowerCase().includes(currentSearch.toLowerCase())) {
              return product
            }}).map(({ name, price, image, size }, key) => (
            <div className="product">
              <Product name={name} price={price} size={size} image={image} />
            </div>
          ))}
        </Section>
      )}
    </>
  );
};

export default ProductsSection;
