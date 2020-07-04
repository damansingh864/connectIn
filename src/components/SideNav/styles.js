import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.sidebarColor};
  height: 100%;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 0 30px;  
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const UpdateProfile = styled.div`
  color: white;
  font-size: 12px;
  border: 1px solid #23aaea;
  padding: 6px 13px;
  border-radius: 20px;
  font-weight: 400;
  color: #eeeeee;
  margin-top: 8px;

  &:hover {
    background-color: #23aaea;
    cursor: pointer;
  }
`