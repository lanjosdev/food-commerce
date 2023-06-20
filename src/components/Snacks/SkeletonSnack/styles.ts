import styled, { keyframes } from 'styled-components'

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   > div:last-child {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 0.75rem;

//     > div:last-child {
//       width: 3rem;
//       height: 3rem;
//     }
//   }
// `
const shimmerEffect = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: -50%;
  }
  75% {
    background-position: -125%;
  }
  100% {
    background-position: -200%;
  }
`

export const Container = styled.div`
  padding: 1.75rem 1.5rem;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray900} 0%,
    #0a0a0a 40%,
    ${({ theme }) => theme.colors.gray900} 100%
  );
  background-size: 200%;
  border-radius: 10px;

  animation: ${shimmerEffect} 1s linear infinite;

  h2 {
            margin-bottom: 0.75rem;
            font-weight: 700;
            font-size: 1.5rem;

            text-align: center;
        }

  .img {
            /* object-fit: cover; */
            width: 100%;
            height: 11.25rem;
            border-radius: 10px;
            margin-bottom: 0.375rem;
        }

        .text {
            height: 0.875rem;
            margin-bottom: 0.875rem;
        }

  .price {
            height: 0.875rem;
            margin-bottom: 0.875rem;
  }
`