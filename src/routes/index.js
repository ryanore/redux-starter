import React, { Component, PropTypes } from 'react'
import { Match, Miss } from 'react-router'
import AuthenticatedMatch from '../containers/authenticated-match'
import Home from '../routes/home'
import Login from '../routes/auth/login'
import ResetPassword from '../routes/auth/resetpassword'
import About from '../routes/about'
import ProtectedRoute from '../routes/protectedpage'
import Forbidden from '../routes/error/error-403'
import NoMatch from '../routes/error/error-404'

export default () => (
  <div>
    <Match exactly pattern="/" component={Home} />
    <Match pattern="/about" component={About} />
    <Match pattern="/login" component={Login} />
    <Match pattern="/resetpassword" component={ResetPassword} />
    <Match pattern="/403" component={Forbidden} />
    <AuthenticatedMatch pattern="/protected" redirect="/login" component={ProtectedRoute} />
    <Miss component={NoMatch} />
  </div>
)
