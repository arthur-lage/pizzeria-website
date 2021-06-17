import React from "react";
import styled from "styled-components";
import { GiFullPizza } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoPizzaOutline } from "react-icons/io5";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3.25rem;
  background: #df163e;
  border-bottom: 1px solid #af0628;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
`;

const NavWrapper = styled.div``;

const NavLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  color: #e0e0e0;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const NavLogo = styled(GiFullPizza)`
  font-size: 2rem;
  color: #e0e0e0;
  margin-right: 1rem;

  &:hover {
    color: #fff;
  }
`;

const NavMenu = styled.div`
  display: flex;
  color: white;
`;

const Message = styled(BiMessageSquareDetail)`
  font-size: 2rem;
`;

const ProfileIcon = styled(AiOutlineUser)`
  font-size: 2rem;
`;

const Order = styled(IoPizzaOutline)`
  font-size: 2rem;
`;

const NavLink = styled(Link)`
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  transition: 0.2s ease;
  flex-direction: column;
  text-decoration: none;
  color: #e0e0e0;

  &:hover {
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavWrapper>
        <NavLogoContainer to="/">
          <NavLogo />
          <h1>Casa da Pizzaria Brauni</h1>
        </NavLogoContainer>
      </NavWrapper>
      <NavMenu>
        <NavLink to="/order">
          <Order />
          Pedido
        </NavLink>
        <NavLink to="/contact">
          <Message />
          Contato
        </NavLink>
        <NavLink to="/profile">
          <ProfileIcon />
          Perfil
        </NavLink>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
