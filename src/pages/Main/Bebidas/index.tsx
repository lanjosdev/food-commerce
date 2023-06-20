// Funcionalidades:
import { useState, useEffect } from "react";


// Componentes:
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle";
import { SnacksContainer } from "../../../components/Snacks";

import { getBebidas } from "../../../services/api";

export default function Bebidas() {
  const [bebidas, setBebidas] = useState([]);

  useEffect(()=> {
      (async ()=> {
          const bebidasRequest = await getBebidas();

          setBebidas(bebidasRequest.data);
      })();
  }, []);


    return (
        <>
            <Head title='Bebidas' description="Nossos melhores bebidas" />

            <SnackTitle titleSnack='Bebidas' />
            <SnacksContainer snacks={bebidas} /> 
        </>
    ); 
}