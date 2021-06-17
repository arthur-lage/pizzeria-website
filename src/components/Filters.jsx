import React from "react";
import styled from "styled-components";
import { useFilter } from "../context/FilterContext";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7.5rem;
  padding: 1rem 2rem 1.5rem 2rem;
  border-bottom: 1px solid #3333335c;
`;

const CurrentFiltering = styled.div`
  font-size: 1.2rem;

  span:last-child {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
`;

const Search = styled.div`
  margin-right: 2rem;

  input {
    height: 100%;
    outline: none;
    width: 300px;
    border-radius: 5px;
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #333;
    &:focus {
      border: 1px solid #1c7dfcbe;
      box-shadow: 0px 0px 10px #1c7dfcbe;
    }
  }
`;

const FilterSelect = styled.select`
  outline: none;
  width: 225px;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid #333;
  &:focus {
    border: 1px solid #1c7dfcbe;
    box-shadow: 0px 0px 10px #1c7dfcbe;
  }
`;

const Filters = () => {
  const { currentFilter, setCurrentFilter, setCurrentSearch } = useFilter();

  return (
    <Container>
      <CurrentFiltering>
        <span>Filtrando por: </span>
        <span>
          {currentFilter === "all" && "Todos"}
          {currentFilter === "pizzas" && "Pizzas"}
          {currentFilter === "beverages" && "Bebidas"}
        </span>
      </CurrentFiltering>
      <FilterWrapper>
        <Search>
          <input
            type="text"
            name="search"
            placeholder="Pesquisar"
            id="search"
            onChange={(e) => setCurrentSearch(e.target.value)}
          />
        </Search>
        <FilterSelect onChange={(e) => setCurrentFilter(e.target.value)}>
          <option value="all">Todos</option>
          <option value="pizzas">Somente pizzas</option>
          <option value="beverages">Somente bebidas</option>
        </FilterSelect>
      </FilterWrapper>
    </Container>
  );
};

export default Filters;
