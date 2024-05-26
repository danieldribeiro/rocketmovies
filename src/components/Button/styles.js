import { styled } from "styled-components"

export const Container = styled.button`
  width: 340px;
  height: 56px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.PINK};
  border: none;
  font-weight: 500;
  cursor: pointer;
`