import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import { AppContainer } from 'containers'
import { LoginComponent, SignupComponent } from 'components'

export default () => [(
  <Route path='/' key='root'> 
    <IndexRedirect to='login'/>
    <Route path="login" component={LoginComponent} />,
    <Route path="signup" component={SignupComponent} />,
    <Route path='app' component={AppContainer} />
  </Route>
)]