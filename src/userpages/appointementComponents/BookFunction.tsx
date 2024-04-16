import { randomFill } from "crypto";
import { initializeApp } from "firebase/app";
import { QueryDocumentSnapshot, QuerySnapshot, collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from "firebase/firestore";

class BookFunction{
  
    async  book()
    {
         
       var dateElement:any=document.getElementById("bookdate");
       var date=dateElement.value;
       
    var timeElement:any=document.getElementById("booktime");
    var time=timeElement.value;
    
   
    
    
    if(date=="")
    {
     alert("enter date ")
    
    }
    else if(time=="")
    {
     alert("enter time ")
    
    }
    else if( date < new Date().toISOString().slice(0, 10)  )
    {
      alert("enter valid date")
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
         
         var dd= query(collection(db, "appointementRequest"));
         var snap=await getDocs(dd);        
         var count=snap.size;
        
         await setDoc(doc(db,'appointementRequest',(++count)+""),{email:localStorage["email"],name:localStorage["name"],phoneNo:localStorage["phone"],date:date,time:time,serice:serArr,empName:localStorage["Selected"]}).then(()=>{
          alert("sucessfully requested appointement");
         });
    
         //insert offer id 
         dateElement.value="";
         timeElement.value="";
         
    }
    else{
      alert("select  services")
    }
    
    }
    } 
    }
    export default BookFunction