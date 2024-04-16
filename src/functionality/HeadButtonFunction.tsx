
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from '../home';
import reportWebVitals from '../reportWebVitals';
import root from '../index'
import Login from '../loginComponent/loginpage'
import LoadServicelist from '../adminPages/servicelist';
import UserService from '../userpages/userService';
import UserViewOffer from '../userpages/UserViewOffer';
import UserOffer from '../userpages/LoadUserOffer';
import AppointementPageView from '../userpages/UserAppointementPage';
import Adminlayout from '../adminPages/adminLayout';
var call:any;
  class HeadButtonFunctionality 
  {  
    
    constructor(called:any)
    {
     call=called;
    }
       // displayobj=new display()
            public  HomeButtonAction()
                {
                      
                              root.render(
                                <React.StrictMode>
                                  <App />
                                </React.StrictMode>
                              );
                             
                              if(call=="menucall")
                              {
                                
                                document.getElementById("menu")?.setAttribute("class","openmenu");
                              }
                  
                };
                public BookButtonAction()
                { 
                       if(localStorage["status"]=="LOGED"&&localStorage["loginType"]=="USER")
                       {
                        
                  root.render(
                    <React.StrictMode>
                    <AppointementPageView/>
                    </React.StrictMode>
                  );
            
                          if(call=="menucall")
                          {
                            document.getElementById("menu")?.setAttribute("class","openmenu");
                            
                          }  
                        }
                        else{
                          if(localStorage.getItem("loginType")==="ADMIN")
                          {
                            root.render(
                              <React.StrictMode>
                                <Adminlayout/>
                              </React.StrictMode>
                            );
                          }
                          else{
                            alert("login to book appointement");
                          }
                          
                        }
                  
                };
                public ServicesButtonAction()
                {
                   
                  
                 
                  root.render(
                    <React.StrictMode>
                      <UserService/>
                    </React.StrictMode>
                  );
            
                  if(call=="menucall")
                  {
                    document.getElementById("menu")?.setAttribute("class","openmenu");
                  }
                  
                };
                public OffersButtonAction()
                {
                   
                  root.render(
                    <React.StrictMode>
                    <UserOffer></UserOffer>
                    </React.StrictMode>
                  );
            
                        if(call=="menucall")
                        {
                          document.getElementById("menu")?.setAttribute("class","openmenu");
                        } 
                  
                };
                public LoginButtonAction()
                {
                  
                  root.render(
                    <React.StrictMode>
                      <Login />
                    </React.StrictMode>
                  );
                  if(call=="menucall")
                  {
                    document.getElementById("menu")?.setAttribute("class","openmenu");
                    
                  }
             
                  
                };
                public  async profileButtonAction()
                {
                  
                  localStorage.removeItem("status");
                  localStorage.removeItem("email");
                  localStorage.removeItem("name");
                  localStorage.removeItem("phone");
                  localStorage.removeItem("loginType");
                  localStorage.setItem("loginType","");
                  var ele:any=document.getElementById("book");
     
      
                  alert("loged out")
                  window.location.reload()
                 
                 
                  root.render(
                    <React.StrictMode>
                      <App />
                    </React.StrictMode>
                  );
                  if(call=="menucall")
                  {
                    document.getElementById("menu")?.setAttribute("class","openmenu")
                  }
                 
                  
                
              }
              
            }

export default HeadButtonFunctionality;