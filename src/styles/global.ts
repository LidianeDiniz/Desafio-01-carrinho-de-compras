<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
=======
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        :focus {
        outline: 0;
    }

        body{
            background: ${(props) => props.theme["base-background"]};
            color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
        }



        body, input, textarea,  button {

            background-color: ${(props) => props.theme["base-background"]};
           color: ${(props) => props.theme["base-text"]};
          -webkit-font-smoothing: antialiased;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1rem; 
    }    
    
    a{ 
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
    input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

}

        

>>>>>>> 739814d8f47a713fb92297cfaa48e6f4f0ee0408
`;
