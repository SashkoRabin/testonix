import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
.cakes__container {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #343433;
    background: ${(props) => props.theme.cakes__bg};
    min-height: 100vh;
    transition: 0.2s;
  }
  .cakes__body {
    border-top: 1px solid #114f5a;
    padding: 20px 0 0;
  }
  
  .card__container {
    border: 1px solid #114f5a;
    border-radius: 25px;
    margin: 10px 30px;
    padding: 10px;
    width: 300px;
    background: #FAC6DB;
  }
  
  .cards__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .card__item {
    margin: 15px 10px;
  }
  .card__price {
    margin: 15px 10px;
    color: #343433;
  }
  .card__buy_btn {
    color: #f7f8fb;
    background: #114f5a;
    border-radius: 45px;
    border: none;
    padding: 16px 28px;
    font-size: 16px;
    text-transform: uppercase;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .cakes__title {
    text-align: center;
    padding: 40px 0;
    color: ${(props) => props.theme.cakes_titlecolor};
  }
  
`;
