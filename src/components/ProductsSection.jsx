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
  const { currentFilter } = useFilter();

  const onlyPizzas = products.filter((product) => product.type === "pizza");
  const onlyBeverages = products.filter(
    (product) => product.type === "beverage"
  );

  return (
    <>
      <h1 style={{ marginLeft: "6rem", marginTop: "1.5rem" }}>Opções</h1>
      {currentFilter === "all" && (
        <Section>
          {products.map(({ name, price, image, size }) => (
            <div className="product">
              <Product name={name} price={price} size={size} image={image} />
            </div>
          ))}
        </Section>
      )}
      {currentFilter === "pizzas" && (
        <Section>
          {onlyPizzas.map(({ name, price, image, size }) => (
            <div className="product">
              <Product name={name} price={price} size={size} image={image} />
            </div>
          ))}
        </Section>
      )}
      {currentFilter === "beverages" && (
        <Section>
          {onlyBeverages.map(({ name, price, image, size }) => (
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
