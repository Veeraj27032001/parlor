import React, { useState } from "react";
import { Component } from "react";
import '../adminPages/seviceeditor/servicelistStyle.css'
import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";

class LoadServicelist extends Component<{}, {value:object}>{
    createArray(datasnap:any)
    {
        var arr=[]
    
     var count=0;
    var priceCollection=datasnap.get('servicePrice')
    var serviceCollection=datasnap.get('serviceName')
    for(var  i of  datasnap.get('id'))
    {   
        arr.push(<tr><td>{i}</td>
        <td>{serviceCollection[count]}</td>
        <td>{priceCollection[count++]}</td>
        </tr>);
     
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
    
    

    
 
    
    return(<div id="serplaceHolder"  ><table><thead><tr>
    <th scope="col">Service ID</th>
    <th scope="col">Service</th>
    <th scope="col">Price</th>

    </tr></thead>
    <tbody>
    {this.state.value as any}</tbody></table></div>);
    
}
}
export default LoadServicelist;
