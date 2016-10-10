import React, { PropTypes } from 'react';

class Auth extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <div className="section-auth">
        {this.props.children}
      </div>
    );
  }
}

export default Auth;
