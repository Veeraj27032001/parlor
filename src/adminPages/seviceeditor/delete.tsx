import React from "react";
import { Component } from "react";
import "../servicestyle.css"
import deleteService from "./service activity/deleteService";
class Servicedelete extends     Component{
    render(): React.ReactNode {
        return(<div className="servicemodificationcontainer">
            <input id="deleteserviceId" className="serviceinput" placeholder="ServiceId"></input>
            <button className="servicebutton" onClick={new deleteService().delete}> submit</button>
        </div>)
    }
}
export default Servicedelete