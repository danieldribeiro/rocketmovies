import { Container } from "./styles"

export function Marker({ isEmpty, icon: Icon, title, ...rest}){
  return(
    <Container isEmpty {...rest}>
      {title}
      {Icon && <Icon size={20} />}
    </Container>
  )
}