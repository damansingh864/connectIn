import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  border-bottom: 1px solid #dde2e6;
`

export const Item = styled(Link)`
  color: #99a6b2;
  text-transform: uppercase;
  font-size: 12px;
  padding: 10px 0;
  display: inline-block;
  margin-right: 30px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  ${({ active }) => active && css`
    color: #23aaea;
    border-bottom: 2px solid #23aaea;
  `}

  &:last-child {
    margin-right: 0;
  }
`
