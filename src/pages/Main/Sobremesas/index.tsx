// Funcionalidades:
import { useState, useEffect } from "react";
import { getSobremesas } from "../../../services/api";

// Componentes:
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle";
import { SnacksContainer } from "../../../components/Snacks";


export default function Sobremesas() {
    const [sobremesas, setSobremesas] = useState([]);
    
    useEffect(()=> {
        (async ()=> {
            const sobremesasRequest = await getSobremesas();

            setSobremesas(sobremesasRequest.data);
        })();
    }, []); 


    return (
        <>
            <Head title='Sobremesas' description="Nossos melhores Sobremesas" />

            <SnackTitle titleSnack='Sobremesas' />
            <SnacksContainer snacks={sobremesas} />
        </>
    );
}