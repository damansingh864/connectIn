import React from 'react'
import styled from 'styled-components'

const Name = styled.div`
  font-size: 16px;
  color: #3d4144;
  font-weight: bold;
`

const Title = ({ name }) => (
  <Name>{name}</Name>
)

export default Title
