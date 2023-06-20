import styled, {css} from "styled-components"; // Importa o Styled Components

// Interface / contrato que diz qual dataType tem a variavel/props: (coisa de TS)
interface ContainerProps {
    isMenuOpen: boolean;
}
export const ContainerSidebar = styled.aside<ContainerProps>` // Onde recebe a props é no < >

    // Inicia o CSS-in-JS (ou se preferir no CSS-in-TS):

    background-color: ${({ theme }) => theme.colors.red}; //cor pega na lista de themas.

    ${
    ({ isMenuOpen })=> {
        return isMenuOpen 
            ? css`
                width: 16.3rem;
                `
            : css`
                width: 7.75rem;
                `
    }
    }

    padding: 2rem 0;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: width 0.3s ease-in-out;


    button {
        background: none;
        border: none;

        width: 100%;
        padding-left: 2.5rem;

        display: flex; //para a img ficar na esquerda
    }

    nav {
        flex: 1;
        width: 100%;
        height: 100%;

        ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;
        }
        li {
            a {
                width: fit-content;
                position: relative;
                padding-left: 1.875rem;
                padding-right: 1.875rem;
                
                display: flex;
                align-items: center;
                gap: 1rem;

                svg {
                    fill: ${({ theme })=> theme.colors.white};
                    width: 4rem;
                    transition: fill 0.4s;
                    transition: 0.3s ease-in-out;
                }
                svg:hover {
                    transform: scale(1.1);
                }

                span {
                    font-size: 1rem;
                    font-weight: 600;
                    transition: color 0.4s;

                    /* display: none; */
                    opacity: 0;

                    /* transition: display 1s; */
                    transition: 0.3s ease-in-out;


                    ${
                    ({ isMenuOpen })=> {
                        return isMenuOpen 
                            ? css`
                                /* display: inline; */
                                opacity: 1;
                                `
                            : css`
                                /* display: none; */
                                opacity: 0;
                                `
                    }
                    }
                }

                &.active {            
                    // psedo-elemento amarelo de ativo
                    &::after {
                        content:'';
                                              
                        background-color: ${({ theme })=> theme.colors.yellow};
                        width: 5px;
                        height: calc(100% + 10px);
                        border-radius: 0 5px 5px 0;

                        position: absolute;
                        left: 0;
                        top: 50%;
                        bottom: 0;
                        transform: translateY(-50%);
                    }

                    svg {
                        fill: ${({ theme })=> theme.colors.yellow};
                        transform: scale(1.1);
                    }

                    span {
                        fill: ${({ theme })=> theme.colors.yellow};
                        color: ${({ theme })=> theme.colors.yellow};
                    }
                }
            }           
        }
    }


    

    @media screen and (max-width: 720px) {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 999;

        width:100%;
        height: 5rem;
        overflow-y: auto;
        padding: 0;

        button {
            display: none;
            /* img {
                display: none;
            } */
        }

        nav {
            height: 100%;

            ul {
                flex-direction: row;
                align-items: center;

                /* gap: 10%; */
            }
            li {
                a {
                    flex-direction: column;
                    padding: 0rem;

                    svg {
                        width: 3.25rem;
                    }

                    span {
                        display: none;
                    }

                    &.active {
                        &::after {
                            display: none;
                        }

                        svg {
                            transform: scale(1.2);
                        }
                    }
                }
            }
        }
    }
`