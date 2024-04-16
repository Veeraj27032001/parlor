import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import root from "..";

import Login from "./loginpage";
import { doc} from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { StrictMode } from "react";
import { create } from "domain";
var usernameEle:any,passwordEle:any,nameEle:any,phoneEle:any,repasswordEle:any;
class signupverification{
    constructor(usernameele:any,passwordele:any,nameele:any,phoneele:any,repasswordele:any)
    {
 usernameEle=usernameele;
 passwordEle=passwordele;
 nameEle=nameele;
 phoneEle=phoneele;
 repasswordEle=repasswordele;
    }
async verify()
{
   if(!usernameEle.value.toLowerCase()
   .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
   {
alert("enter valid email");
   }
   else if((passwordEle.value).length<7){
      alert("enter valid password");
   }
   else if(nameEle.value.langth<3)
   {
      alert("enter  the name");
   }
   else if((passwordEle.value)!==repasswordEle.value){
      alert(" re-password should match password");
   }
   else{
      var email=usernameEle.value;
      var names=nameEle.value;
      var phone=phoneEle.value;
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
         const auth=getAuth(app);
         await createUserWithEmailAndPassword(auth,usernameEle.value,passwordEle.value)
         .then(async response=>{
            const user=response.user;
             
             root.render(<StrictMode>
                <Login/>
             </StrictMode>);
            await setDoc(doc(db,'logindetail',email),{email:email,name:names,number:phone,usertype:"user"}).catch( async er=>
               {

                  await user.delete()
               });
           
             alert(usernameEle.value+" sign up sucessfull") ;       
          })
         
            .catch(er=>{
            alert("sign up unsucessfull");

         });
        usernameEle.value="";
        passwordEle.value="";
        repasswordEle.value="";
        nameEle.value="";
        phoneEle.value="";  
        
       
           }
}
}
export default signupverification;