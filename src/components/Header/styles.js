import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 115px;
  padding: 24px 123px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_700};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  .search {
    width: 640px;
    padding: 18px 24px;
  }

  .user-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user-info{
      display: flex;
      flex-direction: column;
      text-align: right;
    }

    > a {
      > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-left: 16px; 
      }
    }
  }

`