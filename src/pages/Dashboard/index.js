import React from 'react'
import SideNav from '@components/SideNav'
import TopBar from '@components/Topbar'
import { Switch, Route, Redirect } from 'react-router-dom'

import Connections from '../Connections'
import MainDashboard from '../MainDashboard'
import Jobs from '../Jobs'

import { Wrapper, SideMenu, Main, TopMenu, Content } from './styles'

const Dashboard = () => (
  <Wrapper>
    <SideMenu><SideNav /></SideMenu>
    <Main>
      <TopMenu><TopBar /></TopMenu>
      <Content>
        <Switch>
          <Route
            path="/dashboard"            
            component={MainDashboard}
          />
          <Route
            path="/jobs"
            component={Jobs}
          />
          <Route
            path="/docs"
            render={() => "docs" }  
          />
          <Route
            path="/connections"
            component={Connections}
          />
          <Route
            path="/profile"
            render={() => "profles" }  
          />
          <Redirect
            from="/"
            to="/dashboard"
          />
        </Switch>
      </Content>
    </Main>
  </Wrapper>
)

export default Dashboard;
