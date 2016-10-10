import React, { PropTypes } from 'react';
import LoginForm from './components/form-login';
import { Link } from 'react-router';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.next = this.props.location.query.next || '';
  }
  render() {
    return (
      <div className="page page-login">
        <h3>LoginPage</h3>
        <LoginForm next={this.next}/>
        <Link to="/resetpassword">Actually, I forgot my password</Link>
      </div>
    );
  }
}
export default LoginPage;
