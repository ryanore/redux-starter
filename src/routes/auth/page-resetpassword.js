import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import t from 'tcomb-form';
import { resetPassword } from 'app/actions/act-auth';

const Form = t.form.Form

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: {email: 'ryan@ryanore.com', password: '123456'}
    };
  }

  onChange(value, path) {
    this.setState({value});
    this.refs.form.getComponent(path).validate();
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.refs.form.getValue();

    if( value ){
      this.props.logIn(this.state.username, this.state.password, this.props.next);
    }
  }

  render() {
    return (
      <div className="page page-login">
        <h3>Password Reset</h3>
        <p>Enter the email you used to sign up.</p>
          <Form
            ref="form"
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            type={t.struct({
              email: t.String
            })}
            options={{
              fields: {
                email: {
                  label: 'some label',
                  error: 'A valid email is required.'
                }
              }
            }}
          />
        <button onClick={this.onSubmit.bind(this)}>Submit</button>
        <Link to="/resetpassword">Actually, I forgot my password</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.session.loggedIn
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    resetPassword: resetPassword
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
