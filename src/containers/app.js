import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from '../components/app-header'
import Footer from '../components/app-footer'

/**
*   Main Redux Container:
*
*/
class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  /**
   * Main body of app:
   * Don't render until user token is verified
   */
  render() {
    console.log(this.props.session);
    let userAuthIsVerified = this.props.session.verified || false
    if( userAuthIsVerified ){
      return (
        <div>
          <Header/>
          {this.props.children}
          <Footer />
        </div>
      )
    } else {
      return (<div>Verifying</div>)
    }
  }
}

function mapStateToProps(state = null) {
  return {
    session: state.session
  }
}

export default connect(mapStateToProps)(Main)
