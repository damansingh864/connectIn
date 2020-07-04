import React from 'react'

import { Wrapper, Name, Designation } from './styles'

const PersonInfo = ({ name, desigation, nameColor, desigationColor }) => (
  <Wrapper>
    <Name colors={nameColor}>{name}</Name>
    <Designation colors={desigationColor}>{desigation}</Designation>
  </Wrapper>
)

export default PersonInfo
