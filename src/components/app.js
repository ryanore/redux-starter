import React, { Component, PropTypes } from 'react'
import { BrowserRouter, Match, Miss, Link, Redirect } from 'react-router'
import AuthenticatedMatch from '../containers/authenticated-match'
import Header from './app-header'
import Footer from './app-footer'
import Home from '../routes/home'
import About from '../routes/about'
import ProtectedRoute from '../routes/protectedpage'
import Forbidden from '../routes/error/error-403'
import NoMatch from '../routes/error/error-404'

/**
 * Main body of app: Not much more than a container
 */
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/about" component={About} />
            <Match pattern="/403" component={Forbidden} />
            <AuthenticatedMatch pattern="/protected" component={ProtectedRoute} />
            <Miss component={NoMatch} />
          </div>
          < Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default Main
