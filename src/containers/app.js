import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import { BrowserRouter, Match, Miss, Link, Redirect } from 'react-router'
import AuthenticatedMatch from '../containers/authenticated-match'
import Header from '../components/app-header'
import Footer from '../components/app-footer'
import Home from '../routes/home'
import Login from '../routes/auth/page-login'
import ResetPassword from '../routes/auth/page-resetpassword'
import About from '../routes/about'
import ProtectedRoute from '../routes/protectedpage'
import Forbidden from '../routes/error/error-403'
import NoMatch from '../routes/error/error-404'

const mapStateToAppProps = (state) => ({
  location: state.location
})

export default connect(mapStateToAppProps)((props) => (
  <BrowserRouter
    history={props.history}
    location={props.location}
    onPush={(location) => {
      props.dispatch({
        type: 'LOCATION_CHANGE',
        location
      })
    }}
    >
    <div>
      <Header />
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/about" component={About} />
        <Match pattern="/login" component={Login} />
        <Match pattern="/resetpassword" component={ResetPassword} />
        <Match pattern="/403" component={Forbidden} />
        <AuthenticatedMatch pattern="/protected" redirect="/login" component={ProtectedRoute} />
        <Miss component={NoMatch} />
      </div>
      < Footer />
    </div>
  </BrowserRouter>
))
