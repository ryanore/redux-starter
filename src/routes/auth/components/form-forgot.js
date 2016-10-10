import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'react-addons-update';
import { resetPassword } from 'app/actions/act-user';

class ForgotPasswordForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      email: '',
      username: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.resetPassword(this.state.username);
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="form-forgot">
        <form onSubmit={this.onSubmit}>
          <div>
            <div>
              <label htmlFor="email">email</label>
              <br />
              <input name="email" value={this.state.email} onChange={this.onInputChange}  />
            </div>
            <div>
              <label htmlFor="username">username</label>
              <br />
              <input name="username" value={this.state.username} onChange={this.onInputChange}  />
            </div>
            <div>
              <input type="submit"/>
            </div>
            { this.state.success && <div>Success</div> }
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetPassword: resetPassword
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ForgotPasswordForm);
