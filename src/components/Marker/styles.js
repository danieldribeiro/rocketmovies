import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  width: fit-content;
  background-color: ${({theme, empty}) => (empty ? 'transparent' : theme.COLORS.GRAY_700)};
  border-radius: 8px;
  padding: 12px;
  border: ${({ empty }) => (empty ? '1px dashed gray' : 'none')};

  > svg {
    margin-left: 10px;
    color: ${({theme}) => theme.COLORS.PINK};
    cursor: pointer;
  }
`