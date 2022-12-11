import { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';

const spinnerAnimation = keyframes`
      from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
    }
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    button,input{
        border:0;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
        ${({ theme }) => theme.flexCenter}
    };
   
    a{
    text-decoration: none;
    color: white;
    }

    .spinner {
        animation-name: ${spinnerAnimation};
        animation-duration: 2000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`;

export default GlobalStyle;
