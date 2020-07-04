import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`

export const Name = styled.div`
  font-size: 14px;
  color: #3a3a3a;
  font-weight: 500;
  color: ${({ colors }) => colors || '#3a3a3a'};
`

export const Designation = styled.div`
  font-size: 13px;
  color: #3a3a3a;
  font-weight: 500;
  color: ${({ colors }) => colors || '#3a3a3a'};
`
