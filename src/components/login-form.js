import React from 'react';

export default class LoginForm extends React.Component {
  _handleSubmit(e) {
    e.preventDefault();
    const data = {};
    const inputs = [].slice.call(e.target.getElementsByTagName('input'));
    inputs.forEach(input => {
      if (input.type === 'submit') {
        return false;
      }
      data[input.name] = input.value;
    });
    this.props._handleSubmit(data);
  }

  render() {
    return <div>
      <form className="login-form" onSubmit={this._handleSubmit.bind(this)}>
        <input type="text" name="login" placeholder="username"/>
        <input type="password" name="password" placeholder="password"/>
        <input className="login-btn" type="submit" value="Login"/>
      </form>
    </div>;
  }
};

export default LoginForm;