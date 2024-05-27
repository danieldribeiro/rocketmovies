import { MdAdd }  from 'react-icons/md'

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Container } from "./styles"
import { MovieCard } from '../../components/MovieCard'

export function Home(){
  return(
    <Container>
      <Header />

      <main>
        <div>
          <h1>Meus filmes</h1>
          <Button icon={MdAdd} title='Adicionar filme' className='add-movie-btn'/> 
        </div>

        <MovieCard/>
      </main>
    </Container>
  )
}