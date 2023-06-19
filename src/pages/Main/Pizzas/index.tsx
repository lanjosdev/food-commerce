import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle";
import { SnacksContainer } from "../../../components/Snacks";


export default function Pizzas() {
    // lista de pizzas:
    const data = [
        {
            id: 1,
            snack: 'pizza',
            name: 'Calabresa',
            description:
              'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
            price: 25,
            image: 'https://i.imgur.com/5rjJGkV.jpg',
          },
          {
            id: 2,
            snack: 'pizza',
            name: 'Portuguesa',
            description:
              'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
            price: 28.5,
            image: 'https://i.imgur.com/WCoyGoI.png',
          },
    ];

    return (
        <>
            <Head title='Pizzas' description="Nossos melhores pizzass" />

            <SnackTitle titleSnack='Pizzas' />
            <SnacksContainer snacks={data} />
        </>
    ); 
}
