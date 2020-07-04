import React from 'react'
import ConnectionCard from '@components/ConnectionCard'

import { Wrapper, CardsWrapper } from './styles'

const MyConnection = () => {
  return (
    <Wrapper>
      <CardsWrapper>
        <ConnectionCard />
      </CardsWrapper>
    </Wrapper>
  )
}

export default MyConnection