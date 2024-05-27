import { MdOutlineStar, MdOutlineStarHalf } from 'react-icons/md'

import { Container } from "./styles"
import { Tag } from '../Tag'

export function MovieCard({ description }){
  return(
    <Container>
      <section>
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
      </section>
    </Container>
  )
}