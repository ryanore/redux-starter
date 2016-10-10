import React, { PropTypes } from 'react';
import ForgotForm from './components/form-forgot';
import { Link } from 'react-router';

class ForgotPage extends React.Component {
  render() {
    return (
      <div className="page page-forgot">
        <h3>Forgot Password</h3>
        <p>Give me the email associated with the acount, and I'll send you a new temporary password</p>

        <ForgotForm />
        <Link to="/login">Back to Login Page</Link>
      </div>
    );
  }
}

export default ForgotPage;
