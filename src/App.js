import React from 'react'
import { Switch, Route } from "react-router-dom"
import PrivateRoute from './containers/PrivateRoute'
import LoginContainer from './containers/LoginContainer'
import LinkBut from './components/subcomponents/LinkBut'
import Home from './components/HomePage'
import ProfileContainer from './containers/Profile'
import NewsContainer from './containers/NewsContainer'
import NotFound from './components/NotFound'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'

const App = () => (
  <CssBaseline>
    <div>
      <header className="header">
        <div className="top-menu flex-menu">
          <LinkBut to="/" label={'Главная'} />
          <LinkBut to="/profile" label={'Профиль'} />
          <LinkBut to="/news" label={'Новости'} />
          <LinkBut to="/abra-kadabra" label={'404'} />
          <LinkBut to="/login" label={'Логин'} />
        </div>
      </header>

      <hr />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={NewsContainer} />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </CssBaseline>
)

export default App