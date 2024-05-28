import { MdArrowBack, MdClose } from 'react-icons/md'

import { Link } from 'react-router-dom'

import { Header } from "../../components/Header"
import { Container, Form } from "./styles"
import { Input } from '../../components/Input'
import { Marker } from '../../components/Marker'
import { Button } from '../../components/Button'

export function NewMovie(){
  return(
    <Container>
      <Header/>

    <Form>
      <Link to='/'>
        <span><MdArrowBack/> Voltar</span>
      </Link>

      <h1>Novo filme</h1>

      <div className='input-wrapper'>
        <Input
          placeholder="Título"
          type="text"
        />

        <Input
          placeholder="Sua nota (de 0 a 5)"
          type="text"
        />

        <textarea
          placeholder="Observações"
          type="textarea"
        />
      </div>

      <p>Marcadores</p>

      <div className='tag-container'>
        <Marker title='Ficção científica' icon={MdClose}/>
        <Marker title='Novo marcador' icon={MdClose} empty/>
      </div>

      <div className='btn-wrapper'>
        <Button title='Excluir filme'/>
        <Button title='Salvar alterações'/>
      </div>
    </Form>
    </Container>
  )
}