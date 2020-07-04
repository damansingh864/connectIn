import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import QuickNavigation from '@components/QuickNavigation'
import MyConnection from '@pages/MyConnection'
import NewConnection from '@pages/NewConnections'

import { Wrapper, PageTitleWrapper, Title, Tagline, ContentWrapper } from './styles'

const pages = [
  {
    name: 'Connection',
    redirectTo: '/connections'
  }, {
    name: 'Find New Connection',
    redirectTo: '/connections/new'    
  }
]

const Connections = (props) => {
  return (
    <Wrapper>
      <PageTitleWrapper>
        <Title>Connections</Title>
        <Tagline>Meet your colleagues, make new connections</Tagline>
      </PageTitleWrapper>      
      <QuickNavigation links={pages} active={props.location.pathname} />
      <ContentWrapper>
        <Switch>
          <Route
            path="/connections"
            exact
            component={MyConnection}
          />
          <Route
            path="/connections/new"
            exact
            component={NewConnection}
          />
        </Switch>
      </ContentWrapper>
    </Wrapper>
  )
}

export default withRouter(Connections)
