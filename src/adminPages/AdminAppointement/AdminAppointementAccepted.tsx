import React from "react";
import { Component } from "react";
import accept from './appointementImages/accept.jpg'
import reject from './appointementImages/reject.jpg' 
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
class AdminAppointementAccepted extends Component<{}, {value:object}>{
    createAcceptedArray(datasnap:any)
    {
        var arr=[]
    
   
          var sercount=0;
    for(var  data of  datasnap.docs)
    {   
      
        arr.push(<div style={{borderStyle:"solid",marginBottom:"0.5%",overflowX:"auto",margin:"0.5%"}}>
        <p id={"name"+data.id} className={data}>Name: {data.get("name")}</p> 
        <p id={"email"+data.id}style={{display:"inline"}}>Email: {data.get("email")}</p> 
        <p id={"phoneNo"+data.id}>Phone no: {data.get("phoneNo")} </p>   
        <p id={"Date"+data.id}>Date: {data.get("date")} </p>
        <p id={"Time"+data.id}>Time: {data.get("time")} </p>
        <p>Employee: {data.get("empName")} </p>
        <p id={"services"+data.id}>services: {data.get("serice")}</p>
        <p id={"price"+data.id}>price before offer: {data.get("price")}</p>
        <p id={"offprice"+data.id}>price: {data.get("offPrice")}</p>
        <button   value={data.id+","+data.get("email")} style={{background:"0%",border:"0"}} 
        onClick={async (e)=>{
            var val= e.currentTarget.getAttribute("value")?.split(",");
        var id=val?.at(0);
       
       var reason=prompt("enter the reason")
       if(reason!=null){
         var dataquery= await query(collection(db, "appointementAccepted"));
         var datasnap=await getDocs(dataquery);
         var count=0;
        for(var data of datasnap.docs)
        {
            if(data.id==id)
            {       var dd= query(collection(db, "appointementRejected"));
                    var snap=await getDocs(dd);        
                    var count2=snap.size;
                    await setDoc(doc(db,'appointementRejected',(++count2)+""),{email:data.get("email"),name:data.get("name"),phoneNo:data.get("phoneNo"),date:data.get("date"),time:data.get("time"),serice:data.get("serice"),empName:data.get("empName"),price:data.get("price"),serviceId:data.get("serviceId"),reason:reason,timeOfOperation:(new Date()),offPrice:data.get("offPrice")}).then(()=>{
                        alert("sucessfully rejected appointement");
                       });
                await deleteDoc(doc(db, "appointementAccepted", ""+id)); 
                
                    
            }
            else{

                await setDoc(doc(db,'appointementAccepted',(++count)+""),{email:data.get("email"),name:data.get("name"),phoneNo:data.get("phoneNo"),date:data.get("date"),time:data.get("time"),serice:data.get("serice"),empName:data.get("empName"),price:data.get("price"),serviceId:data.get("serviceId"),offPrice:data.get("offPrice")}).then(()=>{
               
               });
            }
        }
        var last:any;
        for(var data of datasnap.docs)
        {
            last=data;
           
        }
        await deleteDoc(doc(db, "appointementAccepted", ""+last.id)); 
        }
        }} >     
        <img width="40" height="40" src={reject} alt="reject">
       </img>
       </button>
        <button style={{marginLeft:"0.5%",background:"0%",border:"0"}}
       value={data.id+","+data.get("email")}
       onClick={async (e)=>{
        var conf=window.confirm("is the work done?");
       
        if(conf==true)
        {
        var val= e.currentTarget.getAttribute("value")?.split(",");
        var id=val?.at(0);
       
     
         var dataquery= await query(collection(db, "appointementAccepted"));
         var datasnap=await getDocs(dataquery);
         var count=0;
        for(var data of datasnap.docs)
        {
            if(data.id==id)
            {       
               
                await deleteDoc(doc(db, "appointementAccepted", ""+id)).then(()=>{
                    
                }); 
                
                    
            }
            else{

                await setDoc(doc(db,'appointementAccepted',(++count)+""),{email:data.get("email"),name:data.get("name"),phoneNo:data.get("phoneNo"),date:data.get("date"),time:data.get("time"),serice:data.get("serice"),empName:data.get("empName"),price:data.get("price"),offPrice:data.get("offPrice")}).then(()=>{
                
                });
            }
        }
        var last:any;
        for(var data of datasnap.docs)
        {
            last=data;
           
        }
        await deleteDoc(doc(db, "appointementAccepted", ""+last.id)); 

    } }}>
        <img width="40" height="40" src={accept} alt="accept">
    </img>
    </button>
        <br></br>
        </div>
        );
     
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
    <div id="accepted" style={{height:"100%",width:"100%",overflowY:"auto",backgroundImage:"linear-gradient(45deg,#efecece1,#ebb1d6bd)"}}>
                <h2 style={{textAlign:"center"}}> Appointement</h2>
                 <div style={{ display: "grid",gridTemplateColumns: "repeat(2, 1fr)",margin:"1%"}}>{this.state.value as any}</div>
                
                </div>
    );
    
}
}
export default AdminAppointementAccepted;
