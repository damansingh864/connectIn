import React from 'react'
import Title from '@components/Title'
import Cards from '@components/Cards'

import { Wrapper, FeedCardWrapper } from './styles'

const Feed = () => {
  return (
    <Wrapper> 
      <Title name="Feed" />
      <FeedCardWrapper>
        <Cards />
      </FeedCardWrapper>
    </Wrapper>
  )
}

export default Feed
