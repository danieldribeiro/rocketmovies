import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  > main{ 
    padding: 50px 123px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .add-movie-btn {
      width: 205px;
      background-color: red !important;
    }
  }

`