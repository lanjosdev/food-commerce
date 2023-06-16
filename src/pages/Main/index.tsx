import { Outlet } from 'react-router-dom'; // Responsabel em renderizar subpaginas

// Componentes:
import { Sidebar } from '../../components/Sidebar';

// Estilos (Styled Components):
import { Container } from './styles';

// Assets:
import logoImg from '../../assets/logo.svg';


export default function Main() {
  return (
    <Container>

      <Sidebar />  
      <div className='content-main'>
        <header>
          <img src={logoImg} alt="" />
        </header>
        
        <section className='content-menu'>
          {/* Abaixo um Componente q rederinza Sub-paginas (q estão na pasta "pages/Main/..."):  */}
          <Outlet />
        </section>
      </div>      

    </Container>
  )
}
