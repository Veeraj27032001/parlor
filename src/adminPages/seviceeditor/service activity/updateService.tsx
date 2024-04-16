import { doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { FirebaseApp, initializeApp } from "firebase/app";
  var  task=""
class UpdateService{
     

  constructor(UpdateTask:any)
  {
    task=UpdateTask;

  }
 
  
async  Update()
{
    var serIdElement:any=document.getElementById("updateservicesearchId");
    var serId=serIdElement.value;

       var firebaseConfig = {
        apiKey:process.env.React_App_apiKey,
        authDomain: process.env.React_App_authDomain,
        databaseURL:process.env.React_App_databaseURL,
        projectId: process.env.React_App_projectId,
        storageBucket: process.env.React_App_storageBucket,
        messagingSenderId: process.env.React_App_messagingSenderId,
        appId: process.env.React_App_appId,
        measurementId:process.env.React_App_measurementId
        // Initialize Firebase      

     };
     // Initialize Firebase
      var app = initializeApp(firebaseConfig);
      var db=getFirestore(app)
     //get  service id 
     var datasnap= await getDoc(doc(db,'service','services'));
      var ServiceIdCollection=datasnap.get('id')
      alert(serId)
      var isFound=false
     
      var foundPos=0
      for( var val of (Array.from(ServiceIdCollection)))
      { 
       
         foundPos++
          if(val==serId)
          {
            isFound=true
           
          
          break;
          }
          
      }
      if( isFound==true)
      {
      
        if(task=="name")
        {
          var serNameElement1:any=document.getElementById("updateservicename");
         let serName1=serNameElement1.value;
        if(serName1=="")
          {
          alert("enter service name ")
          }  
          else{
                 let serNameArr1=Array.from(datasnap.get('serviceName'));
                  let serPriceArr1=Array.from(datasnap.get('servicePrice'));
                  alert(foundPos)
                  serNameArr1[(foundPos-1)]=serName1;
                 alert(serNameArr1)
                  await setDoc(doc(db,'service','services'),{id:ServiceIdCollection,serviceName:serNameArr1,servicePrice:serPriceArr1}).then(
                    a=>{alert("service information has been  updated sucessfully.")}).catch(
                        async er=>
                      {
              
                        alert(er);
                      });
                }
        }
       else if(task=="price")
        {
          
          let serPriceElement1:any=document.getElementById("updateserviceprice");
          let serPrice1=serPriceElement1.value;
           if(!parseInt(serPrice1))
          {
          alert("price should be in number format")
          }
          else{
            let serNameArr2=datasnap.get('serviceName');
            let serPriceArr2=Array.from(datasnap.get('servicePrice'));
            serPriceArr2[foundPos-1]=serPrice1;
           
            await setDoc(doc(db,'service','services'),{id:ServiceIdCollection,serviceName:serNameArr2,servicePrice:serPriceArr2}).then(
              a=>{alert("service information has been  updated sucessfully. ")}).catch(
                  async er=>
                {
        
                  alert(er);
                });
          }
        }
        if(task=="both"){
           
          let serNameElement:any=document.getElementById("updateservicename");
         let serName3=serNameElement.value;
         let serPriceElement:any=document.getElementById("updateserviceprice");
                let serPrice=serPriceElement.value;
        if(serName3=="")
          {
          alert("enter service name ")
          }  
          if(!parseInt(serPrice))
          {
          alert("price should be in number format")
          }
          else{
                 let serNameArr3=Array.from(datasnap.get('serviceName'));
                  let serPriceArr=Array.from(datasnap.get('servicePrice'));
                  serNameArr3[foundPos-1]=serName3;
                
                  await setDoc(doc(db,'service','services'),{id:ServiceIdCollection,serviceName:serNameArr3,servicePrice:serPriceArr}).catch(
                        async er=>
                      {
              
                        alert(er);
                      });
                
                
                
                serPriceArr[foundPos-1]=serPrice;
                 
                  await setDoc(doc(db,'service','services'),{id:ServiceIdCollection,serviceName:serNameArr3,servicePrice:serPriceArr}).then(
                    a=>{alert("service information has been  updated sucessfully. ")}).catch(
                        async er=>
                      {
              
                        alert(er);
                      });
                }
        }
        
      }
      else{
        alert("no service with this id found");
      }
  
} 
}
export default UpdateService