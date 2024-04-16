import React, { Component } from "react";
import root from "../index";
import Buttonfunction from '../functionality/HeadButtonFunction'
import signupverification from "./signupfunction";

class signuppage extends Component{
  signupfunction()
  {
   var signupobj=new signupverification(document.getElementById("email"),document.getElementById("password"),document.getElementById("name"),document.getElementById("mobile"),document.getElementById("repassword"));
   signupobj.verify()
  }
    render(): React.ReactNode {
      window.sessionStorage.setItem("page","SIGNUP");
        return( <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>SIGN UP</h3>
              <p>Please enter your detail  to signup.</p>
            </div>
          </div>
          
            <input id="email" type="text" placeholder="Email"/>
            <input id="name" type="text" placeholder="Name"/>
            
            <input id="mobile" type="text" placeholder="Phone Number"/>
            <input id="password" type="password" placeholder="password"/>
            <input id="repassword" type="password" placeholder="repassword"/>
         
            <button onClick={this.signupfunction} >sign up</button>
            <p className="message" >already have account? <a onClick={new Buttonfunction("").LoginButtonAction} >login</a></p>
          
        </div>
        </div>);
    }
}
export default signuppage;
