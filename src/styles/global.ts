import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: fill-available;
    height: -webkit-fill-available;
    
    @media (max-width: 1080px) {
      font-size: 93.75%; //16x0,9375 = 15px
    } 
    @media (max-width: 720px) {
      font-size: 87.5%; //16x0,875 = 14px
    } 
  }

  body {
    background: ${({ theme }) => theme.colors.gray900};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.white};
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem ${(props) => props.theme.fontFamily.sans},'Roboto', Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
  }
`
