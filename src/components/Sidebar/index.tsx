// Funcionalidades:
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Estilos (Styled Components):
import { ContainerSidebar } from "./styles"; // Container é o nome dado a esse estilo(pseudo-componente, no caso é uma tag <aside>).

// Assets:
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg";
import { ReactComponent as PizzaIcon } from "../../assets/pizza.svg";
import { ReactComponent as BebidaIcon } from "../../assets/soda.svg";
import { ReactComponent as SobremesaIcon } from "../../assets/ice-cream.svg";
import menuImg from "../../assets/menu.svg";



export function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleClickMenu() {
        setMenuOpen(!menuOpen);
    }


    return (
        // envia um props (isMenuOpen) para o styled components:
        <ContainerSidebar isMenuOpen={menuOpen}> 
            <button onClick={handleClickMenu}>
                <img src={menuImg} alt="Espandir e diminuir o menu" />
            </button>

            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>
                            <BurgerIcon /><span>Hambúrgueres</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/pizzas'>
                            <PizzaIcon /><span>Pizzas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/bebidas'>
                            <BebidaIcon /><span>Bebidas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/sobremesas'>
                            <SobremesaIcon /><span>Sobremesas</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </ContainerSidebar>
    )
}