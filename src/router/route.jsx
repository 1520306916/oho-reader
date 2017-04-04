import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import index from '../components/Main'
import searchResult from '../components/searchResult'
import search from '../components/search'
import bookIntroduce from '../components/bookIntroduce'
import setting from '../components/setting'
import about from '../components/about'
import read from '../components/read'




const RouteConfig = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={index} />
      <Route path="/search" exact component={search} />
      <Route path="/setting" exact component={setting} />
      <Route path="/searchResult" exact component={searchResult} />
      <Route path="/bookIntroduce/:id"  component={bookIntroduce} />
      <Route path="/about" exact component={about} />
      <Route path="/read/:id" exact component={read} />
      <Route component={index} />
    </Switch>
  </Router>
)


export default RouteConfig