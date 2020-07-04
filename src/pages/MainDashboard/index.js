import React from 'react'
import Cards from '@components/Cards'
import About from './About'
import Interest from './Interest'
import Feed from './Feed'

import { Wrapper } from './styles'

const MainDashboard = () => {
  return (
    <Wrapper>
      <Cards>

      </Cards>
      <About />
      <Interest />
      <Feed />
    </Wrapper>
  )
}

export default MainDashboard
