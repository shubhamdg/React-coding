import React, { Component } from "react";


class Login extends Component {
constructor (props) {
  super (props) ;
  this.state = {
    user : "",
    password : "",
    rememberMe : false,
    isLoggedIn: true 
  
  }
}

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    
   
    this.setState({ [input.name]: value });
   // this.state.isLoggedIn ? "Looged in" : "Not Logged in"
  };
  
 
  // handleFormSubmit = () => {
  //   const { user, password,rememberMe, isLoggedIn } = this.state;
  //   localStorage.getItem('rememberMe', rememberMe);
  //   localStorage.getItem('user', rememberMe ? user : '');
  //   localStorage.getItem('password', password ? password : "");
  //  // {this.state.isLoggedIn ? "Looged in" : "Not Logged in"}
  //   alert("Login is successful")
  // };
 
 Login = () => {
  const { user, password,rememberMe,  } = this.state;
    localStorage.getItem('rememberMe', rememberMe);
     localStorage.getItem('user', rememberMe ? user : '');
     localStorage.getItem('password', password ? password : "");
     alert("Logged in ")
   this.setState ({
     isLoggedIn : true  
     
   })
 }
  
  render() {
    console.log("Redndering")
    return (
      
      <form>
        <label>
          User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
        </label>
        <label>
          Password :<input name="password" value={this.state.password} onChange={this.handleChange}/>
        </label>
        <label>
          <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
        </label>
        <div>
        
        </div>
        <button onClick= {this.Login} onChange= {this.state.isLoggedIn ? "Looged in" : "Not Logged in"}>Login</button>
  
      </form>
       
   
    );
  }
    
}


export default Login ;


