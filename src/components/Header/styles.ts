<<<<<<< HEAD
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
=======
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;


  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
  }
`;

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  cursor: pointer;


${(props) =>
  props.variant === "purple" &&
  css`
    background: ${props.theme["brand-purple-light"]};
  `}

    ${(props) =>
      props.variant === "yellow" &&
      css`
        background: ${props.theme["brand-yellow-light"]};
      `}

        &:hover {
            ${(props) =>
              props.variant === "purple" &&
              css`
                background: ${props.theme["brand-purple"]};
              `}

                ${(props) =>
                  props.variant === "yellow" &&
                  css`
                    background: ${props.theme["brand-yellow"]};
                  `}
            transition: background-color 0.2s;
          }
`;


export const HeaderCardsContainer = styled.div`
  display: flex;
  align-items: center;
  
  gap: 0.75rem;
  
  
  `;
>>>>>>> 739814d8f47a713fb92297cfaa48e6f4f0ee0408
