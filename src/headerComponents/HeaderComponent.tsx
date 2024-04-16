import React from "react";
import { Component } from "react";
import logo from '../logoimages/Queenslogo.png'
import Buttons from '../headerComponents/headerbutton'
 class   header extends Component{
    render(): React.ReactNode {
        
       
        if(window.innerWidth<600)
        {
            //mobile view
            const headerleft={
                backgroundColor:"black",
                float:"left",
                width:"50%",
                height:"100%", 
                positon:"relative"  
                
            }
            const headerright={
                backgroundColor:"black",
                float:"right",
                width:"50%",
                height:"100%", 
                positon:"relative",
                 textAlign:"right"
           
            }
        return (<div style={{width:"100%", height:"100%"}}>
            <div style={headerleft as any}>
<div style={{width:"100%", height:"100%"}} >
<a href="http://localhost:3000/" ><img   height="90%" style={{marginLeft:"5%"}}  src={logo} alt="logo"></img>
</a>
</div>
</div>
<div style={headerright as any}>
<Buttons />
    </div>          
</div>);
    }
    else{
        //window view
        const headerleft={
            backgroundColor:"black",
            float:"left",
            width:"30%",
            height:"100%", 
            positon:"relative"  
            
        }
        const headerright={
            backgroundColor:"black",
            float:"right",
            width:"70%",
            height:"100%", 
            positon:"relative",
             textAlign:"right"
       
        }
        return (<div style={{width:"100%", height:"100%"}} onLoad={()=>{
            
        
        if(localStorage.getItem("loginType")=="ADMIN")
        {
            var ele:any=document.getElementById("book");
            var e=ele as HTMLButtonElement
            e.innerText="ADMIN PANEL"
            var offele:any=document.getElementById("services");
            var off=offele as HTMLButtonElement
            off.style.display="none"
            var serele:any=document.getElementById("offers");
              var sere=serele as HTMLButtonElement
                 sere.style.display="none"
        }
        }}>
            <div style={headerleft as any}>
<div style={{width:"100%", height:"100%"}} >
<a href="http://localhost:3000/" ><img   height="90%" style={{marginLeft:"5%"}}  src={logo} alt="logo"></img>
</a>
</div>
</div>
<div style={headerright as any} >
<Buttons />
    </div>          
</div>);
    }

    }
 }
 export default header;