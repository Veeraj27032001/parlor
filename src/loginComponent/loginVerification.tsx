import { Console } from "console";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { idText } from "typescript";
import root from "..";
import React from 'react';
import App from '../home';
import Adminlayout from "../adminPages/adminLayout";
import Buttonfunction from '../functionality/HeadButtonFunction'

var usernameEle:any,passwordEle:any;
class verification{
    constructor(usernameele:any,passwordele:any)
    {
 usernameEle=usernameele;
 passwordEle=passwordele;
    }
async verify()
{
 
    try{
     var obj:any= document.getElementById("login");
     
     const firebaseConfig = {
      apiKey:process.env.React_App_apiKey,
      authDomain: process.env.React_App_authDomain,
      databaseURL:process.env.React_App_databaseURL,
      projectId: process.env.React_App_projectId,
      storageBucket: process.env.React_App_storageBucket,
      messagingSenderId: process.env.React_App_messagingSenderId,
      appId: process.env.React_App_appId,
      measurementId:process.env.React_App_measurementId
   };
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const db=getFirestore(app)
   const auth=getAuth(app);
  
   var email=usernameEle.value;
   var password=passwordEle.value;
   
    await signInWithEmailAndPassword(auth,email,password).then(async res=>{
   
    var datasnap= await getDoc(doc(db,'logindetail',email));

   
    var usertype=datasnap.get("usertype");
    if(usertype=="user")
    {
     alert("logged in sucessfully")
      var phonenumber=datasnap.get("number");
      var name=datasnap.get("name");
      localStorage.setItem("email",email);
      localStorage.setItem("phone",phonenumber);
      localStorage.setItem("name",name);
      localStorage.setItem("status","LOGED");
      localStorage.setItem("loginType","USER");
      
     if(localStorage.getItem("style")=="list")
     { 
      
      if(obj.innerHTML=="LOG IN")
      { 
     
          obj.setAttribute("name","logout")
          obj.innerHTML="LOG OUT"
          obj.onclick = function() {
            localStorage.removeItem("email");
          localStorage.removeItem("phone");
          localStorage.removeItem("name");
         localStorage.removeItem("status");
         localStorage.setItem("loginType","");
        obj.onclick=new Buttonfunction("").LoginButtonAction;
        obj.innerHTML="LOG IN"
         alert("loged out")
        
          };
           root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      }

      
     
    }
    else{
      
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
    
    }
    else if(usertype=="admin"){
   
    alert("welocme admin")
    var phonenumber=datasnap.get("number");
    var name=datasnap.get("name");
    localStorage.setItem("email",email);
    localStorage.setItem("phone",phonenumber);
    localStorage.setItem("name",name);
    localStorage.setItem("status","LOGED");
    localStorage.setItem("loginType","ADMIN");
    
    
   if(localStorage.getItem("style")=="list")
   { 
    
    if(obj.innerHTML=="LOG IN")
    { 
     
        obj.setAttribute("name","logout")
        obj.innerHTML="LOG OUT"
       
        obj.onclick = function() {
          localStorage.removeItem("email");
        localStorage.removeItem("phone");
        localStorage.removeItem("name");
       localStorage.removeItem("status");
       localStorage.setItem("loginType","");
      obj.onclick=new Buttonfunction("").LoginButtonAction;
      obj.innerHTML="LOG IN"
      var ele:any=document.getElementById("book");
     
      var e=ele as HTMLButtonElement
      e.innerText="APPOINTEMENT"
      var serele:any=document.getElementById("offers");
      var sere=serele as HTMLButtonElement
     sere.style.display="inline"
     var offele:any=document.getElementById("services");
      var off=offele as HTMLButtonElement
     off.style.display="inline"
   
      
      alert("loged out")
      
        };
      var ele:any=document.getElementById("book");
     
      var e=ele as HTMLButtonElement
      e.innerText="ADMIN PANEL"
      
       var serele:any=document.getElementById("offers");
       var sere=serele as HTMLButtonElement
      sere.style.display="none"
      var offele:any=document.getElementById("services");
       var off=offele as HTMLButtonElement
      off.style.display="none"
      
        root.render(
          <React.StrictMode>
            <Adminlayout/>
          </React.StrictMode>
        );
       
       
      }

      
   
  }
  else{
    
    root.render(
      <React.StrictMode>
        <Adminlayout/>
      </React.StrictMode>
    );
  }
    
    }
    
   }).catch(er=>{
 alert("failed to log in ");
   });

  }
    catch(a)
    {

    }
}
}
export default verification;