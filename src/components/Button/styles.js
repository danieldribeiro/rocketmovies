import { styled } from "styled-components"

export const Container = styled.button`
  height: 56px;
  padding: 0 32px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.COLORS.PINK};
  border: none;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
  }
`