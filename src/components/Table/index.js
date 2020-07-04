import React from 'react'

import { TableWrap, Header, TableBody } from './styles'

const Table = () => {
  return (
    <TableWrap>
      <Header>
        <tr>
          <th>Job Title</th>
          <th>Status</th>
          <th>Posted</th>
          <th>Applicants</th>
          <th>Options</th>
        </tr>
      </Header>
      <TableBody>
        <tr>
          <td>Master</td>
          <td>Active</td>
          <td>22 july 2016</td>
          <td>24</td>
          <td>Btn</td>
        </tr>
        <tr>
          <td>Master</td>
          <td>Active</td>
          <td>22 july 2016</td>
          <td>24</td>
          <td>Btn</td>
        </tr>
        <tr>
          <td>Master</td>
          <td>Active</td>
          <td>22 july 2016</td>
          <td>24</td>
          <td>Btn</td>
        </tr>
      </TableBody>
    </TableWrap>
  )
}

export default Table
