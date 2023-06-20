// Funcionalidades:
import { useState, useEffect } from "react";
import { getPizzas } from "../../../services/api";

// Componentes:
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { SnacksContainer } from "../../../components/Snacks";


export default function Pizzas() {
    const [pizzas, setPizzas] = useState([]);
  
    useEffect(()=> {
        (async ()=> {
            const pizzasRequest = await getPizzas();
  
            setPizzas(pizzasRequest.data);
        })();
    }, []);

    return (
        <>
            <Head title='Pizzas' description="Nossos melhores pizzass" />

            <SnackTitle titleSnack='Pizzas' />
            <SnacksContainer snacks={pizzas} />
        </>
    ); 
}
