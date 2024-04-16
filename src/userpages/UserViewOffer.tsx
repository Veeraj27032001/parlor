import React, { useState } from "react";
import { Component } from "react";
import '../adminPages/seviceeditor/servicelistStyle.css'
import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import image from '../adminPages/offers/offerImage/offerimage.jpg'
class UserViewOffer extends Component<{}, {value:object}>{
    createArray(datasnap:any,datasnap2:any)
    {
        var arr=[]
        arr.push(<p></p>)
     var count=0;
    var ServiceApplicable=(datasnap.get('ApplicableService'))
    var offerCollection=datasnap.get('offerName')
    var offerPercentaeg=datasnap.get('offerPercentage')
    
    var serNameArr=datasnap2.get('serviceName');
    
    
    var  applicableServiceArr=new Array();
    var s=""
    var sercount=0;
    
 // get name of service using id
         for( var data of ServiceApplicable)
         {
          for(var data2 of (data as string).split(','))
          {
            data2=data2.trimEnd();
            data2=data2.trimStart();
            sercount=0;
            for(var data3 of datasnap2.get('id'))
            { 
              data3=data3.trimEnd();
              data3=data3.trimStart();
             
              if(data3==data2)
              { 
                s=s+serNameArr[sercount]+',';
                break;
              }
              sercount++
            }
           
            
          }
          
          s=s.slice(0, -1)
          applicableServiceArr.push(s);
          s=""
        
         }
      for(var i of datasnap.get("id"))
      {
            arr.push(<div style={{position:"relative",height:"220px",paddingBottom:"20px",textAlign:"left"}}>
                <img style={{height:"100%",width:"99.5%",opacity:"25%", borderStyle:"solid",border:"0.5%"}}src={image} alt="refresh"></img>
                <h1 style={{color: "black",position:"absolute",top:"0%",left:"5%"}}>{(offerCollection[count] as string).toUpperCase()}</h1>
                <p style={{color: "black",position:"absolute",bottom:"5%",left:"5%"}}>This offer is applicable to {applicableServiceArr[count]} service.</p>
                <h2 style={{color: "black",position:"absolute",top:"20%",left:"5%"}}> {offerPercentaeg[count++] }% OFF</h2>
                </div>);
         
      } 
    
    return  arr
    }
    async ServiceList()
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
     var datasnap= await getDoc(doc(db,'offer','offer'));
     var datasnap2= await getDoc(doc(db,'service','services'));
     //alert(datasnap)
     var ar=[]
     ar=this.createArray(datasnap,datasnap2)
    this.setState({value:ar})
   //on change
   onSnapshot(doc(db,'offer','offer'),(doc)=>{
    var ar=[]
    ar=this.createArray(doc,datasnap2)
    this.setState({value:ar})
   })

}
    

   constructor(props:any)
    {
        super(props)
        this.state={
            value:[]
            

        };
        this.ServiceList()
    }
  render(): React.ReactNode {
    
    

    
 
    
    return(<div id="oferplaceHolder"  >
      <p style={{color:"red"}}>* only one offer applicable on a service</p>
      {this.state.value as any}</div>);
    
}
}


export default UserViewOffer;
