import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
class deleteService
{
 async delete()
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
   var ServiceIdCollection=Array.from(datasnap.get('id'));
   var serPriceArr=Array.from(datasnap.get('servicePrice'));
   var serNameArr=Array.from(datasnap.get('serviceName'));
               

   var serIdElement:any=document.getElementById("deleteserviceId");
   var serId=serIdElement.value;
      var isFound=false
      var foundPos=0
      var name;
      var price;
      for( var val of ServiceIdCollection)
      { 
       
          if(val==serId.toString())
          {
            isFound=true
            
            foundPos++
            break;
         
          }
          else{
            foundPos++
          }
      }
    if(isFound==false)
    {
      alert("no service with this id found")
    }
    else{
    ServiceIdCollection.splice(foundPos-1,1)
    
     //reduce id valy=ue by one if ser3 id delted ser4 will become ser3
     
      


for (var i=foundPos-1;i<ServiceIdCollection.length;i++)
      {
        var str1=ServiceIdCollection.at(i);
        var str2:string=str1+"";
       var str= str2.charAt(0)+str2.charAt(1)+str2.charAt(2);
       var numPart="";
       for(var j=3;j<str2.length;j++)
       {
       numPart=numPart+str2.charAt(j);
       }
       var num=parseInt(numPart);
       
       var n=num-1;
       ServiceIdCollection[i]=str+""+n;
      }
    //delte name and price a certain pos
    serNameArr.splice(foundPos-1, 1);
    serPriceArr.splice(foundPos-1, 1);
    alert(serNameArr);
    await setDoc(doc(db,'service','services'),{id:ServiceIdCollection,serviceName:serNameArr,servicePrice:serPriceArr}).then(
      a=>{alert("service inofrmation has been deleted ")}).catch(
          async er=>
        {

          alert(er);
        });
      }

 }
}
export default deleteService;