import { Container } from "./styles"

export function TextButton({ title }){
  return(
    <Container type="button">
      {title}
    </Container>
  )
}