import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled(NavLink)`
  color: white;
  text-align: center;
  padding: 20px 0;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  text-decoration: none;

  &.selected {
    background-color: #1d4c9e;
    border-left: 4px solid #23aaea;
  }
  /* ${({ active }) => active && css`
    
  `} */
`

export const Icon = styled.span``

export const ItemName = styled.span``
