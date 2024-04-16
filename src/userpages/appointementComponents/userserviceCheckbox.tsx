import React, { useState } from "react";
import { Component } from "react";
import '../../adminPages/seviceeditor/servicelistStyle.css'
import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";

class ServiceCheckBox extends Component<{}, {value:object}>{
    createArray(datasnap:any)
    {
        var arr=[]
    
     var count=0;
  
    var serviceCollection=datasnap.get('serviceName')
    for(var  i of  datasnap.get('id'))
    {   
        arr.push(<div >
            <input type={"checkbox"} id={i} title={i} value={i} name={"ServiceSelectCheckbox"}/>
           
            <label style={{textAlign:"justify"}}> {serviceCollection[count++]}
            </label></div>
        );
     
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
     var datasnap= await getDoc(doc(db,'service','services'));
     //alert(datasnap)
     var ar=[]
     ar=this.createArray(datasnap)
    this.setState({value:ar})
   //on change
   onSnapshot(doc(db,'service','services'),(doc)=>{
    var ar=[]
    ar=this.createArray(doc)
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
    
    

    
    return( <div style={{textAlign:"right"}}>
       

    <div style={{ position:"static",textAlign:"left", width:"450px" ,paddingLeft:"30%",height:"140px",overflowY:"auto"}}>
    {this.state.value as any}
    </div></div>);
    
}
}
export default ServiceCheckBox;
