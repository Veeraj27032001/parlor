import { url } from "inspector";
import React from "react";
import { Component } from "react";
import App from "../home";
import img4 from '../BuetyImg/beauty4.jpg';
import '../websitestyle.css'
import Buttonfunction from '../functionality/HeadButtonFunction'
var functionobj=new Buttonfunction("menucall");

 class menu extends Component{

    render(): React.ReactNode {
       const menuBackgroundStyle={
        height:"100%", 
        width:"60%"
        
        //backgroundImage:'url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg")'

       }
       if(localStorage.getItem("status")!="LOGED")
       {
        return (<div style={{width:"100%",height:"99.3%"}} >

        <div style={{width:"70%",height:"100%",float:"right",backgroundColor:"black",display:"flex" ,flexDirection:"column"}}>
        <button  id="home" name="home" style={{marginLeft:"1px",height:"5%",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",fontStyle:"bold",fontSize:"14px"}}  onClick={functionobj.HomeButtonAction}  >HOME</button>
                <button className="websitefont" id="book" style={{marginLeft:"1px",height:"5%",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",fontStyle:"bold",fontSize:"14px"}}  onClick={functionobj.BookButtonAction} > APPOINTEMENT</button>
                <button className="websitefont" name="services" id="Services"style={{marginLeft:"1px",height:"5%",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",fontStyle:"bold",fontSize:"14px"}}  onClick={functionobj.ServicesButtonAction} >SERVICE</button>
                <button className="websitefont" name="offers" id="offers" style={{marginLeft:"1px",height:"5%",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",fontStyle:"bold",fontSize:"14px"}}  onClick={functionobj.OffersButtonAction} >OFFERS</button>
                <button className="websitefont"   id="login" name="login" style={{marginLeft:"1px",height:"5%",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",fontStyle:"bold",fontSize:"14px"}}    onClick={functionobj.LoginButtonAction}>LOG IN</button>
         </div>
        
        </div>);
       }
       else{
         return (<div style={{width:"100%",height:"99.3%"}} onLoad={()=>{
            var ele:any=document.getElementById("book");
            if(localStorage.getItem("loginType")=="ADMIN"){
            var e=ele as HTMLButtonElement
            e.innerText="ADMIN PANEL"
            
             var serele:any=document.getElementById("offers");
             var sere=serele as HTMLButtonElement
            sere.style.display="none"
            var offele:any=document.getElementById("services");
             var off=offele as HTMLButtonElement
            off.style.display="none"
          }}}>
            <img src={img4} alt="refresh the page"style={menuBackgroundStyle}/>
        <div style={{width:"40%",height:"100%",float:"right",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",display:"flex" ,flexDirection:"column"}}>
        <button  id="home" name="home" style={{height:"5%",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",fontStyle:"bold",fontSize:"14px"}}   onClick={functionobj.HomeButtonAction}  >HOME</button>
                <button id="book" style={{height:"5%",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",fontStyle:"bold",fontSize:"14px"}}   onClick={functionobj.BookButtonAction} >APPOINTEMENT</button>
                <button  id="services"name="services" style={{height:"5%",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",fontStyle:"bold",fontSize:"14px"}}  onClick={functionobj.ServicesButtonAction} >SERVICE</button>
                <button  id="offers"name="offers" style={{height:"5%",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",fontStyle:"bold",fontSize:"14px"}}  onClick={functionobj.OffersButtonAction} >OFFERS</button>
                <button    id="login" style={{height:"5%",backgroundImage:"linear-gradient(45deg,#bfbfbfb9,#bd97b3bd)",fontStyle:"bold",fontSize:"14px"}} name="profie"   onClick={functionobj.profileButtonAction}>LOG OUT</button>
         </div>
        
        </div>);
       }
    }
 }
 export default menu;