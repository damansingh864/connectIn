import React from 'react'
import Avatar from '../Avatar'
import PersonInfo from '../PersonInfo'

import { Wrapper, Skills, ConnectionContact } from './styles'

const ConnectionCard = () => {
  return (
    <Wrapper>
      <Avatar style={{ height: '40px', width: '40px' }}/>
      <PersonInfo name="Damanvir Singh" desigation="Software Developer" />
      <Skills></Skills>
      <ConnectionContact></ConnectionContact>
    </Wrapper>
  )
}

export default ConnectionCard;
