import React, { Component } from "react";


class Login extends Component {

  state = {
    user : "",
    email : "",
    password : "" 
    
  }

  handleChange = (event) => {
    const input = event.target;
   const value = input.type === 'checkbox' ? input.checked : input.value;
    
    this.setState({ [input.name]: value });
  };
 
  handleFormSubmit = () => {
    const { user, email,password, rememberMe} = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('user',  rememberMe ? user : " " );
    localStorage.setItem('email' ,rememberMe ? email : "");
    localStorage.setItem('password',rememberMe ? password: "");
    alert("Account created")
  };
 
  
  
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
        </label>
        <br />
        <label>
          Password :<input name="password" value={this.state.password} onChange={this.handleChange}/>
        </label>
        <br />
        <label>
        Email:  <input name="email" value={this.state.email} onChange={this.handleChange} /> 
        </label>
        <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
        <button type="submit">Sign Up</button>
      </form>
    );
  }
    
}


export default Login ;