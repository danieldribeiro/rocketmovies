
import styled from 'styled-components'

export const Container = styled.div`
  min-width: 340px;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.INPUT} ;
  
  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER} 
    }
  }

  > svg {
    margin-left: 16px;
  }
`
