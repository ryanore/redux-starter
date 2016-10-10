import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logInUser } from 'app/actions/act-auth';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state.username, this.state.password, this.props.next);
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render() {

    return (
      <div className="form-login">
        <p>Welcome back!</p>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="username">username</label>
            <br />
            <input name="username" value={this.state.username} onChange={this.onInputChange}  />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <br />
            <input name="password" value={this.state.password} onChange={this.onInputChange} />
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logIn: logInUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
