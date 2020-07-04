import React from 'react'
import Table from '@components/Table'
import Title from '@components/Title'

import { Wrapper, Header, ContentTable } from './styles'


const Jobs = () => {
  return (
    <Wrapper>
      <Header><Title name="Jobs" /></Header>
      <ContentTable>
        <Table />
      </ContentTable>
    </Wrapper>
  )
}

export default Jobs
