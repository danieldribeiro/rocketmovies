import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Form = styled.form`
  width: 100%;
  padding: 50px 123px;

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

  .input-wrapper{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 55px, 275px;
    gap: 10px;

    > textarea{
      height: 275px;
      grid-column: 1/ -1;
      color: ${({ theme }) => theme.COLORS.WHITE};
      padding: 12px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.COLORS.INPUT};
      border: none;
      resize: none;
      overflow: auto;

      &:placeholder {
        color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
      }
    }
  }

  > p {
    font-size: 20px;
    margin: 30px 0 20px;
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }

  .tag-container{
    width: 100%;
    padding: 20px;
    display: flex;
    gap: 10px;
    background-color: ${({theme}) => theme.COLORS.BLUE_800};
    border-radius: 8px;
  }

  .btn-wrapper{
    display: flex;
    margin: 25px 0;
    gap: 80px;

    button{
      width: 100%;
      display: flex;
      justify-content: center;
    }

    button:first-child{
      background-color: ${({theme}) => theme.COLORS.BLUE_800};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`