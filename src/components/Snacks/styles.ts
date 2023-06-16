import styled from "styled-components";

export const ContainerSnacks = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 1.75rem;
    
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }

    .snack-card {
        position: relative;
        background-color: ${({ theme })=> theme.colors.black};
        padding: 1.75rem 1.5rem;
        border-radius: 10px;

        h2 {
            margin-bottom: 0.75rem;
            font-weight: 700;
            font-size: 1.5rem;

            text-align: center;
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 11.25rem;
            border-radius: 10px;
            margin-bottom: 0.375rem;
        }

        p {
            font-size: 0.875rem;
            margin-bottom: 0.875rem;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            strong {
                font-size: 2rem;
                /* font-weight: 500; */
            }

            button {
                border: none;
                background-color: ${({ theme })=> theme.colors.red};
                width: 3rem;
                height: 3rem;
                border-radius: 50%;

                display: flex;
                justify-content: center;
                align-items: center;

                transition: 0.3s ease-in-out;

                svg {
                    stroke: ${({ theme })=> theme.colors.white};
                    width: 1.5rem;
                    height: 1.5rem;
                }

                &:hover {
                    background-color: darkred;
                }
            }
        }
    }
`