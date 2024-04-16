import React from "react";
import { Component } from "react";
import { log } from "util";
import  '../loginComponent/loginStyle.css'
import verification from "../loginComponent/loginVerification";
import logVerify from '../loginComponent/loginVerification'
import signnup from "./signup";
class  login extends Component{
   
   loginfunction()
   {
    var logobj=new logVerify(document.getElementById("username"),document.getElementById("password"));
    logobj.verify()
   }
    render(): React.ReactNode {
      window.sessionStorage.setItem("page","LOGIN");
      
        return( 
        <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          
            <input id="username" type="text" placeholder="username"/>
            <input id="password" type="password" placeholder="password"/>
          
            <button onClick={this.loginfunction}>login</button>
            <p className="message">Not registered? <a onClick={signnup}>Create an account</a></p>
          
        </div>
      </div>)
    }
}
export default login;