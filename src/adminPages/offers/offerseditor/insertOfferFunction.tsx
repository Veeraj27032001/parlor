import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
class InsertOfferFunction{
  
async  insert()
{
     
   var offNameElement:any=document.getElementById("insertoffername");
   var offName=offNameElement.value;
   
var offPercentaegElement:any=document.getElementById("insertofeerpercentage");
var offPercentage=offPercentaegElement.value;
if(offName=="")
{
 alert("enter offer name ")
}  
else if(!parseInt(offPercentage))
{
 alert("percentage should be in number format ")
}
else if(parseInt(offPercentage)>100)
{
  alert("offer percentage should be lesser then or equal to 100%")
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

     var serdatasnap= await getDoc(doc(db,'service','services'));
     
     var seridArr=serdatasnap.get('id');
     var serArr="";
     for(var serid of seridArr)
     {
       // alert((document.getElementById(serid))?.getAttribute('checked'))
      if( document.querySelector('#'+serid+":checked")!=null)
      {
        serArr=serArr+serid+',';
      }
     }
     if(serArr.length>0)
     {
     serArr=serArr.slice(0, -1)
     alert(serArr)

     //insert offer id 
     var datasnap= await getDoc(doc(db,'offer','offer'))
  var offid="off"+((datasnap.get('id')).length+1);
   
  var seridarr;
   seridarr=(Array.from(datasnap.get("ApplicableService")));
  seridarr.push(serArr);

  var idarr;
   idarr=(Array.from(datasnap.get("id")));
   idarr.push(offid)
   //alert(idarr);
     
        //get service name and insert new data to array
   
        var offNameArr;
         offNameArr=(Array.from(datasnap.get("offerName")));
         offNameArr.push(offName)
         //alert(serNameArr);
//get service price and insert price to array 



var offPerArr;

offPerArr=(Array.from(datasnap.get("offerPercentage")));
offPerArr.push(offPercentage)

           await setDoc(doc(db,'offer','offer'),{id:idarr,offerName:offNameArr,offerPercentage:offPerArr,ApplicableService:seridarr}).then(
            a=>{alert("offer inofrmation has been added ")}).catch(
                async er=>
              {
      
                alert(er);
              });

 offNameElement.value="";
offPercentaegElement.value="";
}
else{
  alert("select applicable services")
}

}
} 
}
export default InsertOfferFunction