import React,{Component} from 'react'
import {connect} from 'react-redux';
import { Match, Redirect } from 'react-router'

class AuthenticatedMatch extends Component{
  render() {
    return(
      <Match {...this.props} render={props => (
        this.props.loggedIn
        ? <this.props.component />
        : <Redirect to={{ pathname: '/', state: {from:props.location} }} />
      )} />
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.session.loggedIn
})

export default connect(mapStateToProps)(AuthenticatedMatch);
