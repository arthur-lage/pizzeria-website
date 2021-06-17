import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  border: 1px solid #333;
  display: flex;
  max-width: 300px;
  height: 350px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  width: 100%;
  flex-direction: column;
  border-radius: 5px;
  text-align: center;
  align-items: center;

  img {
    width: 100%;
    height: 185px;
    object-fit: cover;
    border-bottom: 1px solid #333;
    border-radius: 5px 5px 0px 0px;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin: 0.5rem 0;
    color: #111;
  }

  p {
    margin-bottom: 0.5rem;
  }

  h4 {
    text-transform: uppercase;
  }

  button {
    width: 100%;
    color: white;
    background: #df163e;
    transition: 0.2s ease;
    margin-top: auto;
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    height: 50px;
    border-radius: 0px 0px 5px 5px;
    border-top: 1px solid #af0628;

    &:hover {
      background: #af0628;
    }
  }
`;

const Product = ({ name, price, image, size }) => {
  return (
    <ProductContainer>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h2>{price}</h2>
      <p>{size}</p>
      <button>Adicionar ao Carrinho</button>
    </ProductContainer>
  );
};

export default Product;
