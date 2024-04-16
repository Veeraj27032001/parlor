import React from "react";
import { Component } from "react";
import homelogo from '../logoimages/Home.png'
import menuLogo from '../logoimages/menue.jpg'
import Buttonfunction from '../functionality/HeadButtonFunction'
import menuLoad from "../menu/menuloader";
var functionobj=new Buttonfunction("");

class ButtonComponents extends Component{
    
  
    render(): React.ReactNode {
        const buttonstyle={
            color:"white",
            backgroundColor:"black",
            
            height:"60%",
            marginTop:"2%",
            marginRight:"0.5%",
            
            position:"relative",
            fontSize:"80%"
            ,fontWeight:"bold"
          
        }
        if(window.innerWidth<600)
        {
            localStorage.setItem("style","menu")
            return(<div    id="buttoncontainer"style={{backgroundColor:"black",width:"100%",height:"100%" }}>
             
                 <img id="menu" className="openmenu"  width="40px"  src={menuLogo} alt="menue" style={{  marginTop:"15px"}} onClick={menuLoad}/>
            </div>);
        }
        else{

            localStorage.setItem("style","list")
        if(localStorage.getItem("status")=="LOGED"){
            return(<div    id="buttoncontainer"style={{backgroundColor:"black",width:"100%",height:"100%" }}>

            <button  id="home" name="home" style={buttonstyle as any} onClick={functionobj.HomeButtonAction}  >HOME</button>
            <button id="book" style={buttonstyle as any} onClick={functionobj.BookButtonAction} > APPOINTMENT </button>
            <button  name="services" id="services" style={buttonstyle as any} onClick={functionobj.ServicesButtonAction} >SERVICE</button>
            <button  name="offers" id="offers" style={buttonstyle as any} onClick={functionobj.OffersButtonAction} >OFFERS</button>
            <button    id="login" name="profile" style={buttonstyle as any}  onClick={functionobj.profileButtonAction}>LOG OUT</button>
            
    </div>);   
        }
        else{
        return(<div    id="buttoncontainer"style={{backgroundColor:"black",width:"100%",height:"100%" }}>

                <button  id="home" name="home" style={buttonstyle as any} onClick={functionobj.HomeButtonAction}  >HOME</button>
                <button id="book" style={buttonstyle as any} onClick={functionobj.BookButtonAction} > APPOINTMENT </button>
                <button  name="services" id="services" style={buttonstyle as any} onClick={functionobj.ServicesButtonAction} >SERVICE</button>
                <button  name="offers" id="offers" style={buttonstyle as any} onClick={functionobj.OffersButtonAction} >OFFERS</button>
                <button    id="login" name="login" style={buttonstyle as any}  onClick={functionobj.LoginButtonAction}>LOG IN</button>
                
        </div>);
        }
    }
    }
 }
 export default ButtonComponents;