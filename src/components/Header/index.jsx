import { MdSearch } from "react-icons/md";

import { Link } from 'react-router-dom'

import { Input } from "../Input";
import { Container } from "./styles";

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input
        icon={MdSearch}
        placeholder="Pesquisar pelo título"
        type="text"
        className='search'
      />

      <div className="user-wrapper">
        <div className="user-info">
          <p>Bem vindo,</p>
          <strong>Daniel Ribeiro</strong>
        </div>

        <Link to='/profile'>
          <img src="https://github.com/danieldribeiro.png" alt="Foto do usuário" />
        </Link>
      </div>
    </Container>
  )
}