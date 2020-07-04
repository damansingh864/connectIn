import React from 'react'
import Search from '@components/Search'

import { Wrapper, SearchWrapper } from './styles'

const Topbar = () => (
  <Wrapper>
    <SearchWrapper>
      <Search />
    </SearchWrapper>
  </Wrapper>
)

export default Topbar;
