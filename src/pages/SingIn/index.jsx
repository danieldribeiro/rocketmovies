import { MdMailOutline, MdLockOutline  } from "react-icons/md";

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={MdMailOutline}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={MdLockOutline }
        />

        <Button title='Entrar'/>
        
        <TextButton title='Criar conta'/>
      </Form>

      <Background/>
    </Container>
  )
}