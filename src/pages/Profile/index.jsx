import { MdArrowBack, MdCameraAlt, MdMailOutline, MdLockOutline, MdPersonOutline} from 'react-icons/md'

import { Container, Form, Avatar } from "./styles"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <MdArrowBack/> 
        <span>Voltar</span>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/danieldribeiro.png" alt="Imagem de perfil do usuário" />
          <label htmlFor="image-upload">
            <input type="file" id='image-upload'/>
            <MdCameraAlt/>
          </label>
        </Avatar>

        <Input
          placeholder="Nome de usuário"
          type="text"
          icon={MdPersonOutline}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={MdMailOutline}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={MdLockOutline}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={MdLockOutline }
        />

        <Button title='Salvar'/>
      </Form>

    </Container>
  )
}
