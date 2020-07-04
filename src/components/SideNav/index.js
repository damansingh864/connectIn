import React from 'react';
import Avatar from '@components/Avatar'
import NavItem from './SideNavItem'
import PersonInfo from '../PersonInfo'
import { withRouter } from 'react-router-dom'

import { Wrapper, ProfileInfo, MenuItem, UpdateProfile } from './styles'

const names = [{
  name: "Dashboard",
  redirect: "/dashboard"
 }, {
  name: "Jobs",
  redirect: "/jobs"
 }, {
  name: "Docs",
  redirect: "/docs"
 }, {
  name: "Connections",
  redirect: "/connections"
 }
];

const SideBar = (props) => (
  <Wrapper>
    <ProfileInfo>
      <Avatar styles={{ height: '80px', width: '80px' }} />  
      <PersonInfo name="Damanvir Singh" desigation="Software Engineer" nameColor="white" desigationColor="#23aaea" />
      <UpdateProfile onClick={() => props.history.push('/profile')}>
        Update Profile
      </UpdateProfile>
    </ProfileInfo>
    <MenuItem>{names.map((el, index) => <NavItem key={index} name={el.name} active={el==="Dashboard"} redirectTo={el.redirect} />)}</MenuItem>
  </Wrapper>
)

export default withRouter(SideBar);
