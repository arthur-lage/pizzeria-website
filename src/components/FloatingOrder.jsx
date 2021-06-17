import React from "react";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderContainer = styled(Link)`
  color: #fff;
  background: #0a6bda;
  height: 45px;
  width: 400px;
  position: fixed;
  text-decoration: none;
  bottom: 10px;
  cursor: pointer;
  right: 10px;
  padding: 1rem;
  display: flex;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #065fc5;
  }

  &:hover .right-arrow {
    left: 160px;
  }
`;

const OrderLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  text-transform: uppercase;

  .right-arrow {
    position: absolute;
    left: 145px;
    top: 2px;
    transition: 0.2s ease;
  }
`;

const FloatingOrder = () => {
  return (
    <OrderContainer to='/order'>
        <OrderLabel>
          <span>Ir para o pedido</span>
          <div className="right-arrow">
            <FaChevronRight />
          </div>
        </OrderLabel>
    </OrderContainer>
  );
};

export default FloatingOrder;
