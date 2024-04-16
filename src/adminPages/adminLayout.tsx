import React from "react";
import { Component } from "react";
import adminloader from "./adminpageloader";
import AdminAppointementPageView from "./AdminAppointement/AdminAppointemet";
const  loader=new adminloader();
class Adminlayout extends Component{
    render(): React.ReactNode {
         window.sessionStorage.setItem("page","ADMINPAGE")
    
        return(<div  style={{height:"90vh",width:"100vw",backgroundImage:"linear-gradient(45deg,#efecece1,#88597bbd)"}}> 
            <div  style={{height:"7%",backgroundImage:"linear-gradient(45deg,#efecece1,#d59cc6bd)"}}>
                <button id="adminappointmnet" onClick={loader.loadAppointment} style={{border:"0",background:"0%",fontSize:"medium",fontWeight:"normal"}}>Appointement</button>
                <button id="adminoffer" onClick={loader.loadoffer} style={{border:"0",background:"0%",fontSize:"medium",fontWeight:"normal"}}>Offers</button>
            
                <button id="adminservicebtn"  onClick={loader.loadservice} style={{border:"0",background:"0%",fontSize:"medium",fontWeight:"normal"}}>Services</button>
                 </div>
            <div id="admincontainer" style={{height:"93%",backgroundImage:"linear-gradient(45deg,#efecece1,#88597bbd)"}}>
                <AdminAppointementPageView/>
                </div>
            </div>);
    }
}
export default Adminlayout;