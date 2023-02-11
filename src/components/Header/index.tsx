<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`} 
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
=======
import { HeaderContainer, HeaderButton, HeaderCardsContainer } from "./styles";
import logoCoffeImg from "../../assets/logo-coffe-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeImg} alt="" />
      </NavLink>

      <HeaderCardsContainer>
        <HeaderButton variant="purple">
          <MapPin size={22} weight="fill" />
          Porto Alegre, Rs
        </HeaderButton>

        <NavLink to="/completeOrder">
          <HeaderButton variant="yellow">
            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </NavLink>
      </HeaderCardsContainer>
    </HeaderContainer>
  );
}
>>>>>>> 739814d8f47a713fb92297cfaa48e6f4f0ee0408
