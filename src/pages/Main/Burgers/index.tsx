// Componentes:
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { SnacksContainer } from "../../../components/Snacks";



export default function Burgers() {
    // lista de burgers:
    const data = [
        {
            id: 1,
            snack: 'burger',
            name: 'Mega',
            description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            price: 25.5,
            image: 'https://i.imgur.com/upjIUnG.jpg',
        },
        {
            id: 2,
            snack: 'burger',
            name: 'X-Bacon',
            description:
            'Vitae perspiciatis alias iure pariatur sequi, eligendi iste tempora nemo fuga cupiditate.',
            price: 23.5,
            image: 'https://i.imgur.com/B4J04AJ.jpg',
        },
    ];
    

    return (
        <>
            <Head title='Hambúrgueres' description="Nossos melhores burgers" />

            <SnackTitle titleSnack='Hambúrgueres' />
            <SnacksContainer snacks={data} />          
        </>
    ); 
}