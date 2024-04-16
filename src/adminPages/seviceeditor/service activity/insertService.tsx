import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
class InsertService{
  
async  insert()
{
     
   var serNameElement:any=document.getElementById("insertservicename");
   var serName=serNameElement.value;
   
var serPriceElement:any=document.getElementById("insertserviceprice");
var serPrice=serPriceElement.value;
if(serName=="")
{
 alert("enter service name ")
}  
else if(!parseInt(serPrice))
{
 alert("price should be in number format")
}
else{
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
     
  var serid="ser"+((datasnap.get('id')).length+1);
   
  var idarr;
   idarr=(Array.from(datasnap.get("id")));
   idarr.push(serid)
   //alert(idarr);
     
        //get service name and insert new data to array
   
        var serNameArr;
         serNameArr=(Array.from(datasnap.get("serviceName")));
         serNameArr.push(serName)
         //alert(serNameArr);
//get service price and insert price to array 

var serPriceElement:any=document.getElementById("insertserviceprice");
var serPrice=serPriceElement.value;
var serPriceArr;

serPriceArr=(Array.from(datasnap.get("servicePrice")));
serPriceArr.push(serPrice)

           await setDoc(doc(db,'service','services'),{id:idarr,serviceName:serNameArr,servicePrice:serPriceArr}).then(
            a=>{alert("service inofrmation has been added ")}).catch(
                async er=>
              {
      
                alert(er);
              });

     serNameElement.value="";
     serPriceElement.value="";
  
}
} 
}
export default InsertService