import { MdMailOutline, MdLockOutline, MdPersonOutline, MdArrowBack  } from "react-icons/md"

import { Link } from 'react-router-dom'

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={MdPersonOutline}
        />

        <Input
          placeholder="E-mail"
          type="password"
          icon={MdMailOutline }
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={MdLockOutline }
        />

        <Button title='Cadastrar'/>
        
        <Link to='/'>
          <TextButton title='Voltar para o login'/>
        </Link>
      </Form>

      <Background/>
    </Container>
  )
}