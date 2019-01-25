import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onSubmit: this.props.onSubmit,
      username: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    this.setState(
      [e.target.name]: e.target.value
    )
     
  }
  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.onSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
