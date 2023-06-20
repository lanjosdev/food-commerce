// Funcionalidade:
import { useState, useEffect } from "react";
import { getBurgers } from "../../../services/api";

// Componentes:
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { SnacksContainer } from "../../../components/Snacks";



export default function Burgers() {
    const [burgers, setBurgers] = useState([]);

    useEffect(()=> {
        (async ()=> {
            const burgerRequest = await getBurgers();

            setBurgers(burgerRequest.data);
        })();
    }, []);
    

    return (
        <>
            <Head title='Hambúrgueres' description="Nossos melhores burgers" />

            <SnackTitle titleSnack='Hambúrgueres' />
            <SnacksContainer snacks={burgers} />          
        </>
    ); 
}