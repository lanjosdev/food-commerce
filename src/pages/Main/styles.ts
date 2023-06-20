import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;

  > div.content-main { // igual a: main > div
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 1.85rem;

    header {
      img {
        width: 10rem;
        margin-bottom: 2rem; 
      }
    }
    

    @media screen and (max-width: 720px) {
      padding-bottom: 10rem;
      /* display: flex;
      flex-direction:column;
      padding-bottom: 8rem; */

      img {
        align-self: center;
      }
    }
  }
`
