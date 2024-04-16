import React from "react";
import { Component } from "react";
import AppointemetBook from "./appointementComponents/AppointementBook";
import ReactDOM from 'react-dom/client';
import App from "../home";
import AppointementAccepted from "./appointementComponents/userAccepted";
import AppointementRejected from "./appointementComponents/userrejected";



var holder:any;
class AppointementPageView  extends Component{
    
        render(): React.ReactNode {
            
            return(
                <div id="appointementPageView" style={{height:"95%",width:"100%",backgroundColor: '#ebd1e4'}}>
                        <div style={{width:"100%",height:"6%",display:"block",backgroundImage:"linear-gradient(45deg,#efecece1,#ebb1d6bd)"}}>
                               <button style={{border:"0",background:"0%",fontSize:"medium",fontWeight:"normal"}} onClick={ ()=>{
                             
                                if(holder!=null || holder!=undefined)
                                { 
                                    holder.unmount();
                                }
                                holder= ReactDOM.createRoot(
                                document.getElementById("bookingcontainer") as HTMLElement
                              );
                                holder.render(<AppointemetBook/>);

                               }}>Book</button>
                               
                              

                               <button style={{border:"0",background:"0%",fontSize:"medium",fontSizeAdjust:"unset"}} onClick={()=>{
                                         if(holder!=null || holder!=undefined)
                                         { 
                                             holder.unmount();
                                         }
                                         holder= ReactDOM.createRoot(
                                         document.getElementById("bookingcontainer") as HTMLElement
                                       );
                                         holder.render(<AppointementAccepted/>);

                               }} >Appointments</button>
                                
                                <button style={{border:"0",background:"0%",fontSize:"medium",fontSizeAdjust:"unset"}} onClick={()=>{
                                         if(holder!=null || holder!=undefined)
                                         { 
                                             holder.unmount();
                                         }
                                         holder= ReactDOM.createRoot(
                                         document.getElementById("bookingcontainer") as HTMLElement
                                       );
                                         holder.render(<AppointementRejected/>);

                               }} >Rejected</button>
                        </div>
                <div id="bookingcontainer" style={{height:"95%",width:"100%",overflowY:"auto", overflowX:"auto", float:"right",textAlign:"center",display:"block",
                boxShadow:"0 0 20px 0 rgba(245, 220, 240, 0.2), 0 5px 5px 0 rgba(249, 188, 225, 0.24)"}}>
                  <AppointemetBook/>
                </div>
                
                </div>);
        }
}
export default AppointementPageView;