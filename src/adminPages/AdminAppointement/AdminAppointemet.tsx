import React from "react";
import { Component } from "react";

import ReactDOM from 'react-dom/client';
import AdminAppointementRequest from "./AdminAppointentRequets";
import AdminAppointementAccepted from "./AdminAppointementAccepted";
import AppointementAccepted from "../../userpages/appointementComponents/userAccepted";




var holder:any;
class AdminAppointementPageView  extends Component{
    
        render(): React.ReactNode {
            
            return(
                <div id="AdminAppointementPageView" style={{height:"95%",width:"100%"}}>
                        
                        <div id="adminrequestview" style={{width:"100%",height:"5%",borderTop:"0.5px",borderTopStyle:"solid",float:"left",display:"block",backgroundImage:"linear-gradient(45deg,#efecece1,#ebb1d6bd)"}}>
                        <button id="appointementsAdminButton" style={{border:"0",background:"0%",fontSize:"medium",fontSizeAdjust:"unset"}} onClick={()=>{
                                      if(holder!=null || holder!=undefined)
                                      { 
                                          holder.unmount();
                                      }
                                      holder= ReactDOM.createRoot(
                                      document.getElementById("adminAppointementViewcont") as HTMLElement
                                    );
                                      holder.render(<AdminAppointementAccepted/>);

                            }} >appointments</button>

                        <button style={{border:"0",background:"0%",fontSize:"medium",fontWeight:"normal"}} onClick={ ()=>{
                             
                             if(holder!=null || holder!=undefined)
                             { 
                                 holder.unmount();
                             }
                             holder= ReactDOM.createRoot(
                             document.getElementById("adminAppointementViewcont") as HTMLElement
                           );
                             holder.render(<AdminAppointementRequest/>);

                            }}> Requests</button>
                            
                           

                            
                        </div>
                <div id="adminAppointementViewcont" style={{height:"90%",width:"100%", overflowX:"auto", float:"right",display:"block",backgroundImage:"linear-gradient(45deg,#efecece1,#ebb1d6bd)"}}>
                  <AdminAppointementAccepted></AdminAppointementAccepted>
                </div>
                
                </div>);
        }
}
export default AdminAppointementPageView;