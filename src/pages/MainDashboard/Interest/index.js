import React from 'react'
import Title from '@components/Title'
import Cards from '@components/Cards'

import { Wrapper, InterestCards } from './styles'

const Interest = () => {
  return (
    <Wrapper>
      <Title name="Interest" />
      <InterestCards>
        <Cards>
        </Cards>
      </InterestCards>      
    </Wrapper>
  )
}

export default Interest
