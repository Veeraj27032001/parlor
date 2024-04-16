import React, { useState } from "react";
import { Component } from "react";
import "../../adminPages/servicestyle.css"
import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import image from '../adminPages/offers/offerImage/offerimage.jpg'
 localStorage["Selected"]="any"
 
class GenerateSelect extends Component<{}, {value:object}>{
    generateOption(datasnap:any)
    {
        var arr=[]
        arr.push(<p></p>)
      for(var data of datasnap.get("name"))
      {
        arr.push(<option value={data}>{data}</option>);
      }
             
    return  arr
    }
    
    async generate()
    {
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
    
     //insert service id 
     var datasnap= await getDoc(doc(db,'EmpData','emp1'));
  
     var ar=[]
     ar=this.generateOption(datasnap)
    this.setState({value:ar})
   //on change
   onSnapshot(doc(db,'EmpData','emp1'),(doc)=>{
    var ar=[]
    ar=this.generateOption(doc)
    this.setState({value:ar})
   })

}
    

   constructor(props:any)
    {
        super(props)
        this.state={
          
          value:[]
        
          

        };
        
        this.generate()
    }
  render(): React.ReactNode {
    
    

    
 
    
    return(<div id="oferplaceHolder" style={{paddingLeft:"30%", float:"left",width:"10%"}}  >
        < select     defaultValue="any" title="emp name" id="empname" style={{height:"10%",width:"100%" }}onChange={function(e)
    {
      localStorage["Selected"]=e.target.value;
      
    }}>
        <option  value={"any"}>any</option>
               {this.state.value as any}  
               
             </select>
        </div>);
    
}
}


export default GenerateSelect;
