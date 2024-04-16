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
class AdminAppointementRequest extends Component<{}, {value:object}>{
    createRequestArray(datasnap:any,datasnap2:any,offersnap:any)
    {
        var arr=[]
    
     var count=0;
  
     var serNameArr=datasnap2.get('serviceName');
     var serPriceArr=datasnap2.get('servicePrice');
    
    
     var  applicableServiceArr=new Array();
     var  applicableOfferArr=new Array();
     var ApplicableOfferService=""
     var  applicableServicePriceArr=new Array();
     var  applicableoffServicePriceArr=new Array();
     var s=""
     var sercount=0;
     var price=0;
     var offprice=0;
  // get name of service using id
  for(var  snap of  datasnap.docs)      
    {
                
      for(var data2 of (snap.get('serice') as string).split(','))
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
                 price=price+  Number.parseInt(serPriceArr[sercount]);
                 var offcount=0;   
                 var offper=offersnap.get('offerPercentage')
                  for(var data4 of offersnap.get('ApplicableService'))
                  {
                    
                    if((data4 as String).includes(data3))
                    {
                       
                        applicableOfferArr.push(offper[offcount])
                        ApplicableOfferService=data3;
                    }
                    offcount++
                  }
                  if(applicableOfferArr.length!=0)
                  {
                  offprice=offprice+ (Number.parseInt(serPriceArr[sercount]) -((Math.max.apply(null, applicableOfferArr)*Number.parseInt(serPriceArr[sercount]))/100))
                 
                  
                  }
                  else{
                    offprice=offprice+Number.parseInt(serPriceArr[sercount])
             
                  }
                  applicableOfferArr=   [];
                  ApplicableOfferService=""
                 break;
               }
               sercount++
             }
            
             
           }
           
           s=s.slice(0, -1)
           applicableServiceArr.push(s);
           applicableServicePriceArr.push(price+"") ;
           applicableoffServicePriceArr.push(offprice+"");
       
           s=""
           price=0;
           offprice=0;
         
           
        }
          var sercount=0;
    for(var  data of  datasnap.docs)
    {   
      
        arr.push(<div style={{borderStyle:"solid",margin:"0.5%",overflowX:"auto"}}>
        <p id={"name"+data.id} className={data}>Name: {data.get("name")}</p> 
        <p id={"email"+data.id}style={{display:"inline"}}>Email: {data.get("email")}</p> 
        <p id={"phoneNo"+data.id}>Phone no: {data.get("phoneNo")} </p>   
        <p id={"Date"+data.id}>Date: {data.get("date")} </p>
        <p id={"Time"+data.id}>Time: {data.get("time")} </p>
        <p>Employee: {data.get("empName")} </p>
        <p id={"services"+data.id}>services: {applicableServiceArr[sercount]}</p>
        <p id={"price"+data.id}> price before offer: {applicableServicePriceArr[sercount]}</p>
        <p id={"offprice"+data.id}>price: {applicableoffServicePriceArr[sercount]}</p>
        <button   value={data.id+","+data.get("email")+","+(applicableServiceArr[sercount]as string).replaceAll(",",";")+","+applicableServicePriceArr[sercount]+","
        +(snap.get('serice') as string).replaceAll(",",";")+","+applicableoffServicePriceArr[sercount]} style={{background:"0%",border:"0"}} 
        onClick={async (e)=>{
            var val= e.currentTarget.getAttribute("value")?.split(",");
        var id=val?.at(0);
       
       var reason=prompt("enter the reason")
       if(reason!=null){
         var dataquery= await query(collection(db, "appointementRequest"));
         var datasnap=await getDocs(dataquery);
         var count=0;
        for(var data of datasnap.docs)
        {
            if(data.id==id)
            {       var dd= query(collection(db, "appointementRejected"));
                    var snap=await getDocs(dd);        
                    var count2=snap.size;
                await setDoc(doc(db,'appointementRejected',(++count2)+""),{email:data.get("email"),name:data.get("name"),phoneNo:data.get("phoneNo"),date:data.get("date"),time:data.get("time"),serice:val?.at(2),empName:data.get("empName"),price:val?.at(3),serviceId:data.get("serice"),reason:reason,timeOfOperation:(new Date()),offPrice:val?.at(5)}).then(()=>{
                alert("sucessfully rejected request");
               });
                await deleteDoc(doc(db, "appointementRequest", ""+id)); 
                
                    
            }
            else{

                await setDoc(doc(db,'appointementRequest',(++count)+""),{email:data.get("email"),name:data.get("name"),phoneNo:data.get("phoneNo"),date:data.get("date"),time:data.get("time"),serice:data.get("serice"),empName:data.get("empName")}).then(()=>{
               
               });
            }
        }
        var last:any;
        for(var data of datasnap.docs)
        {
            last=data;
           
        }
        await deleteDoc(doc(db, "appointementRequest", ""+last.id)); 
        }
        }} >     
        <img width="40" height="40" src={reject} alt="reject">
       </img>
       </button>
       
       <button style={{marginLeft:"0.5%",background:"0%",border:"0"}}
       value={data.id+","+data.get("email")+","+(applicableServiceArr[sercount]as string).replaceAll(",",";")+","+applicableServicePriceArr[sercount]+","
       +(snap.get('serice') as string).replaceAll(",",";")+","+applicableoffServicePriceArr[sercount++]}
       onClick={async (e)=>{
        var conf=window.confirm("accept?");
       
        if(conf==true)
        {
        var val= e.currentTarget.getAttribute("value")?.split(",");
        var id=val?.at(0);
       
     
         var dataquery= await query(collection(db, "appointementRequest"));
         var datasnap=await getDocs(dataquery);
         var count=0;
        for(var data of datasnap.docs)
        {
            if(data.id==id)
            {       var dd= query(collection(db, "appointementAccepted"));
                    var snap=await getDocs(dd);        
                    var count2=snap.size;
                await setDoc(doc(db,'appointementAccepted',(++count2)+""),{email:data.get("email"),name:data.get("name"),phoneNo:data.get("phoneNo"),date:data.get("date"),time:data.get("time"),serice:val?.at(2),empName:data.get("empName"),price:val?.at(3),serviceId:data.get("serice"),offPrice:val?.at(5)}).then(()=>{
                alert("sucessfully acceted request");
               });
                await deleteDoc(doc(db, "appointementRequest", ""+id)); 
                
                    
            }
            else{

                await setDoc(doc(db,'appointementRequest',(++count)+""),{email:data.get("email"),name:data.get("name"),phoneNo:data.get("phoneNo"),date:data.get("date"),time:data.get("time"),serice:data.get("serice"),empName:data.get("empName")}).then(()=>{
               
               });
            }
        }
        var last:any;
        for(var data of datasnap.docs)
        {
            last=data;
           
        }
        await deleteDoc(doc(db, "appointementRequest", ""+last.id)); 

    } 
    }}
      >     
        <img width="40" height="40" src={accept} alt="accept">
       </img>
       </button>
       </div>
        );
     
    }
    return  arr
    }
    async Reuests()
    {
    
    
     var dataquery= await query(collection(db, "appointementRequest"));
     var datasnap=await getDocs(dataquery);
     
     var datasnap2= await getDoc(doc(db,'service','services'));
     var datasnap3= await getDoc(doc(db,'offer','offer'));
     var ar=[]
     ar=this.createRequestArray(datasnap,datasnap2,datasnap3)
    this.setState({value:ar})
   //on change
   onSnapshot(dataquery,(doc)=>{
    
    var ar=[]
    ar=this.createRequestArray(doc,datasnap2,datasnap3)
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
    <div id="requests" style={{height:"100%",width:"100%",overflowY:"auto",backgroundImage:"linear-gradient(45deg,#efecece1,#ebb1d6bd)"}}>
                <h2 style={{textAlign:"center"}}> AppointementRequests</h2>
                <div style={{ display: "grid",gridTemplateColumns: "repeat(2, 1fr)"}}>
                    {this.state.value as any}</div>
                
                </div>
    );
    
}
}
export default AdminAppointementRequest;
