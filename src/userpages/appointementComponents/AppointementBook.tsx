import React from "react";
import { Component } from "react";
import "./Booking.css"
import ServiceCheckBox from "./userserviceCheckbox";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";
import GenerateSelect from "./generateSelect";
import AppointementServiceCheckBox from "./Appointement Service";
import BookFunction from "./BookFunction";

class AppointemetBook extends Component{
   

        render(): React.ReactNode {
            
            return(
                <div className="bookingmodificationcontainer">
                    <h1 > Appointement Book</h1>
                <input type="date" id="bookdate" className="bookinginput" placeholder="date"></input>
                <br></br>
                <input type="time" id="booktime" className="bookinginput" placeholder="time"></input>
                
                <p style={{textAlign:"left",paddingLeft:"30%"}}>select service</p>
                <ServiceCheckBox/>
                <div style={{display:"block",float:"left",width:"100%"}}>
               
                <div style={{width:"100%",float:"left"}}>
                <p style={{paddingLeft:"30%",float:"left"}}> select buetician</p>
                </div>
                
                
                <GenerateSelect></GenerateSelect>
              </div>
                <button className="bookingbutton" onClick={new BookFunction().book}  > submit</button>
            </div>
            );
        }
}
export default AppointemetBook;