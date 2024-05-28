import { MdOutlineStar, MdOutlineStarHalf } from 'react-icons/md'

import { Container } from "./styles"
import { Tag } from '../Tag'
import { Link } from 'react-router-dom'

export function MovieCard({ description }){
  return(
    <Container>
      <Link to='/movie'>
        <h2>Interstellar</h2>
        <div>
          <MdOutlineStar/>
          <MdOutlineStar/>
          <MdOutlineStar/>
          <MdOutlineStar/>
          <MdOutlineStarHalf/>
        </div>

        <div className='paragraph-wrapper'>
          <p>
            {description}
          </p>
        </div>

        <Tag title='Ficção científica'/>
        <Tag title='Drama'/>
        <Tag title='Família'/>
      </Link> 
    </Container>
  )
}