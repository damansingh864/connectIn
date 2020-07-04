import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 20px 0;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;

  &> div:first-child {
    flex: 1;
    margin-right: 10px;
  }

  &> div:last-child {
    flex: 1;
    margin-left: 10px;
  }
`
