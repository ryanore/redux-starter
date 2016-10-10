import React,{Component} from 'react'
import {connect} from 'react-redux';
import { Match, Redirect } from 'react-router'

const mapStateToProps = (state) => ({
  loggedIn: state.session.loggedIn
})

export default connect(mapStateToAppProps)((props) => {
  const {
    component: Component,
    redirect: redirect ='/login',
    ...rest
  } = props;

  return(
    <Match {...rest} render={props => (
      props.loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: redirect ,
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
})
