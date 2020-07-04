import React from 'react'
import Cards from '@components/Cards'
import Title from '@components/Title'

import { Wrapper, CardsWrapper } from './styles'

const About = () => {
  return (
    <Wrapper>
      <Title name="About" />
      <CardsWrapper>
        <Cards>Languages</Cards>
        <Cards>Items</Cards>
      </CardsWrapper>
    </Wrapper>
  )
}

export default About
