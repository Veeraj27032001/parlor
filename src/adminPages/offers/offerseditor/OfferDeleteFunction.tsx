import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
class OfferDeleteFunction
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
   var datasnap= await getDoc(doc(db,'offer','offer'));
   var OfferIdCollection=Array.from(datasnap.get('id'));
   var applicableSerArr=Array.from(datasnap.get('ApplicableService'));
   var offNameArr=Array.from(datasnap.get('offerName'));
   var offPercentageArr=Array.from(datasnap.get('offerPercentage'));
               

   var serIdElement:any=document.getElementById("deleteofferId");
   var serId=serIdElement.value;
      var isFound=false
      var foundPos=0
    
      for( var val of OfferIdCollection)
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
      alert("no offer with this id found")
    }
    else{
    OfferIdCollection.splice(foundPos-1,1)
    
     //reduce id valy=ue by one if ser3 id delted ser4 will become ser3
     
      


for (var i=foundPos-1;i<OfferIdCollection.length;i++)
      {
        var str1=OfferIdCollection.at(i);
        var str2:string=str1+"";
       var str= str2.charAt(0)+str2.charAt(1)+str2.charAt(2);
       var numPart="";
       for(var j=3;j<str2.length;j++)
       {
       numPart=numPart+str2.charAt(j);
       }
       var num=parseInt(numPart);
       
       var n=num-1;
       OfferIdCollection[i]=str+""+n;
      }
    //delte name and price a certain pos
    offNameArr.splice(foundPos-1, 1);
    applicableSerArr.splice(foundPos-1, 1);
    offPercentageArr.splice(foundPos-1, 1);
    alert(OfferIdCollection)
    alert(offNameArr)
    alert(offPercentageArr)
    alert(applicableSerArr)
    
    await setDoc(doc(db,'offer','offer'),{id:OfferIdCollection,offerName:offNameArr,ApplicableService:applicableSerArr,offerPercentage:offPercentageArr}).then(
      a=>{alert("offer inofrmation has been deleted ")}).catch(
          async er=>
        {

          alert("failed to delete offer detail");
        });
      }

 }
}
export default OfferDeleteFunction;