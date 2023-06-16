// Biblioteca responsavel pela rotas (React Router):
import { BrowserRouter } from 'react-router-dom'  // Usa p BrowserRouter para envolver a aplicação toda (com isso, podemos utilizar métodos do React Router em qualquer lugar da aplicação), no caso o App.js (logo abaixo)

// "Compenente" onde configura/define as rotas:
import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

export default function App() {
  return (
    <BrowserRouter>

      <Theme>
        <AppRoutes />
        
        <GlobalStyle />
        <Normalize />
      </Theme>

    </BrowserRouter>
  )
}
