import styled from "styled-components"

import backgroundImg from '../../assets/background.svg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    margin-bottom: 48px;
  }

  > h2{
    margin-bottom: 48px;
  }

  > button {
    margin: 24px 0 42px;
  }
`

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`