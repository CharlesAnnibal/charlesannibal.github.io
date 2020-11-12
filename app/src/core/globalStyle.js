import styled, { createGlobalStyle } from 'styled-components'
//import { MAIN_COLOR_LIGHT ,BLACK,  GRAY} from '../constants/defaultStyleProps'

export const GlobalStyle = createGlobalStyle`



  html, body, #app{
    height: 100%;
    width: 100%;
    margin:0;
    background-color:#FEFEFF;
    font:300 16px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  input, button, textarea {
    cursor: pointer;
  }

  a{
    text-decoration:none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
}
`
export const AppStyle = styled.div` height:100%; width:100%; display: flex;`

