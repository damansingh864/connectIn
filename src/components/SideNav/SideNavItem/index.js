import React from 'react';

import { Wrapper, Icon, ItemName } from './styles'
// active={active}
const Item = ({ name, active, redirectTo }) => (
  <Wrapper  to={redirectTo} activeClassName="selected">
    <Icon />
    <ItemName>{name}</ItemName>
  </Wrapper>
);

export default Item
