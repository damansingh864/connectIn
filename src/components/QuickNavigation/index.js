import React from 'react'

import { Wrapper, Item } from './styles'

const QuickNavigation = ({ links, active }) => {
  return (
    <Wrapper>
      {links.map(link => <Item key={link.redirectTo} active={link.redirectTo === active} to={link.redirectTo}>{link.name}</Item>)}
    </Wrapper>
  )
}

export default QuickNavigation
