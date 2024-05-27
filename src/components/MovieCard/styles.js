import styled from "styled-components"

export const Container = styled.div`
  height: 200px;
  padding: 32px;
  background-color: ${({theme}) => theme.COLORS.PINK_100};
  border-radius: 16px;

  > section{

    > div {
      display: flex;
      margin: 10px 0;
    }

    .paragraph-wrapper {
      height: 50px;
      overflow-y: scroll;
      margin: 20px 0;

      &::-webkit-scrollbar {
          width: 8px;
      }

      &::-webkit-scrollbar-track {
        background: transparent transparentparent;
      }

      &::-webkit-scrollbar-thumb {
          background: ${({theme}) => theme.COLORS.PINK};
          border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
          background: ${({theme}) => theme.COLORS.PINK};
      }

      /* Estilizando a barra de rolagem no Firefox */
      * {
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
      }

    }
  }
`