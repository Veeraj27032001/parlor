
import React from "react";
import ReactDOM from 'react-dom/client';
import root from "..";
import Menu from "./menu";
import Signuppage from "../loginComponent/signuppage";
import App from "../home";
import Login from "../loginComponent/loginpage";
import Adminlayout from "../adminPages/adminLayout";
function menuLoad(){
 

 if(document.getElementById("menu")?.getAttribute("class")==="openmenu")
 {
    document.getElementById("menu")?.setAttribute("class","closemenu")
    root.render(  <React.StrictMode>
      <Menu />
    </React.StrictMode>)
   
 }
 else if(document.getElementById("menu")?.getAttribute("class")==="closemenu")
 {
    document.getElementById("menu")?.setAttribute("class","openmenu")
    if( window.sessionStorage.getItem("page")==="HOME")
    {
    root.render(<React.StrictMode>
      <App />
    </React.StrictMode>);
    }
    else if( window.sessionStorage.getItem("page")==="LOGIN")
    {
      root.render(<React.StrictMode>
        <Login/>
      </React.StrictMode>);
    }
    else if( window.sessionStorage.getItem("page")==="SIGNUP")
    {
      root.render(<React.StrictMode>
        <Signuppage />
      </React.StrictMode>);
      
    }
    else if( window.sessionStorage.getItem("page")==="ADMINPAGE")
    {
      
      root.render(<React.StrictMode>
        <Adminlayout />
      </React.StrictMode>);
      
    }
    
   
 }
}
export default menuLoad;