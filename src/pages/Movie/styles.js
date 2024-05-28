import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > main {
    padding: 50px 123px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
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

    > a {
      > span {
        margin-left: 10px;
        cursor: pointer;
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 18px;
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
      }
    }

    > h1 {
      margin: 30px 0;
    }

    .rate-wrapper{
      font-size: 24px;
      color: ${({theme}) => theme.COLORS.PINK};
    }

    .update-wrapper{
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 20px 0;

      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      > svg {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 18px;
      }
    }

    .tags-wrapper{
      margin: 25px 0;
      height: 100%;
      padding: 5px 0;
    }

    p {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 15px;
    }
  }
`