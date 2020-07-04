import styled from 'styled-components'

export const TableWrap = styled.table`
  width: 100%;
  border-collapse: collapse;  
`

export const Header = styled.thead`
  background-color: #d9e2e7;
  color: #778699;
  text-align: left;
  text-transform: uppercase;

  tr {
    th {
      padding: 10px 20px;
      font-size: 13px;
      font-weight: 600;
    }
  }
`

export const TableBody = styled.tbody`
  background-color: white;
  tr {
    font-size: 14px;
    border-bottom: 1px solid #edf3f6;
    position: relative;

    td {
      padding: 10px 20px;
      color: #99a5b1;
    }

    &:hover {
      box-shadow: 0 0px 8px 4px #eef3f7;      
      z-index: 10;
    }
  }  
`
