// Styled Components:
import { Title } from "./styles";

interface SnackTitleProps {
    titleSnack: string;
}
export function SnackTitle({ titleSnack }:SnackTitleProps) {
    return <Title>{titleSnack}</Title>
}