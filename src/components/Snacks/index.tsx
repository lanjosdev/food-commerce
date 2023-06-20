// Styled Components
import { ContainerSnacks } from "./styles";

// Funcionalidades:
import { currencyFormat } from "../../utils/currencyFormat";

// Icons:
import { FiPlus } from 'react-icons/fi';
import { SkeletonSnack } from "./SkeletonSnack";

interface SnacksProps {
    snacks: any[];
}
export function SnacksContainer({ snacks }:SnacksProps) {


    return (
        <ContainerSnacks>
            {!snacks.length ? (
                <>
                <SkeletonSnack />
                <SkeletonSnack />
                <SkeletonSnack />
                </>
            ) : (
                snacks.map((snack)=> (
                    <article className="snack-card" key={snack.id}>
                        <h2>{snack.name}</h2>
                        <img 
                            src={snack.image} 
                            alt={`Foto do ${snack.snack + snack.name}`} 
                        />
                        <p>{snack.description}</p>
                        <div>
                            <strong>{currencyFormat(snack.price)}</strong>
                            <button type="button"><FiPlus /></button>
                        </div>
                    </article>
                ))
            )}
        </ContainerSnacks>
    )
}