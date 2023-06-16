// Padrão / obrigatorio
import { Routes, Route } from 'react-router-dom'

// Componentes que são Rotas/Pages (subpaginas, que ficam na pasta 'pages'):
import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import BebidasPage from './pages/Main/Bebidas'
import SobremesasPage from './pages/Main/Sobremesas'

export function AppRoutes() {
  return (
    <Routes>

      <Route path='/' element={<MainPage />}>
        {/* subpaginas abaixo */}
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='bebidas' element={<BebidasPage />} />
        <Route path='sobremesas' element={<SobremesasPage />} />
      </Route>

    </Routes>
  )
}
