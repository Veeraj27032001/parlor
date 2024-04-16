import React from "react";
import { Component } from "react";
import accept from './appointementImages/accept.jpg'

import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc } from "firebase/firestore";






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
class AppointementAccepted extends Component<{}, {value:object}>{
    createAcceptedArray(datasnap:any)
    {
        var arr=[]
    
   
          var sercount=0;
    for(var  data of  datasnap.docs)
    {   
       if(data.get("email")==localStorage["email"])
       {
        arr.push(<div style={{borderStyle:"solid",marginBottom:"0.5%",overflowX:"auto",textAlign:"left",width:"100%"}}>
        <p id={"name"+data.id} className={data}>Name: {data.get("name")}</p> 
        <p id={"email"+data.id}style={{display:"inline"}}>Email: {data.get("email")}</p> 
        <p id={"phoneNo"+data.id}>Phone no: {data.get("phoneNo")} </p>   
        <p id={"Date"+data.id}>Date: {data.get("date")} </p>
        <p id={"Time"+data.id}>Time: {data.get("time")} </p>
        <p>Employee: {data.get("empName")} </p>
        <p id={"services"+data.id}>services: {data.get("serice")}</p>
        <p id={"price"+data.id}> price before offer: {data.get("price")}</p>
        <p id={"offprice"+data.id}>price: {data.get("offPrice")}</p>
        <br></br>
        <br></br>
        </div>
        );
     
    }
    }
    return  arr
    }
    async Reuests()
    {
    
    
     var dataquery= await query(collection(db, "appointementAccepted"));
     var datasnap=await getDocs(dataquery);
  
     var ar=[]
     ar=this.createAcceptedArray(datasnap)
    this.setState({value:ar})
   //on change
   onSnapshot(dataquery,(doc)=>{
    
    var ar=[]
    ar=this.createAcceptedArray(doc)
    this.setState({value:ar})
   })

}
    

   constructor(props:any)
    {
        super(props)
        this.state={
            value:[]
            

        };
        this.Reuests();
    }
  render(): React.ReactNode {
    
    

    
    return( 
    <div id="useraccepted" style={{height:"100%",width:"100%",overflowY:"auto",overflowX:"hidden",backgroundImage:"linear-gradient(45deg,#efecece1,#ebb1d6bd)"}}>
                <h2 style={{textAlign:"center"}}> Appointement</h2>
                <div style={{ display: "grid",gridTemplateColumns: "repeat(2, 1fr)",gap:"0.5%"}}>
                    {this.state.value as any}</div>
               
                
                </div>
    );
    
}
}
export default AppointementAccepted;
