import React from "react";
import { Component } from "react";
import "../servicestyle.css"
import InsertService from "./service activity/insertService";
class Serviceinsert extends     Component{
    render(): React.ReactNode {
        return(<div className="servicemodificationcontainer">
            <input id="insertservicename" className="serviceinput" name="sername" placeholder="name"></input>
            <input id="insertserviceprice" className="serviceinput" placeholder="price"></input>
            <button className="servicebutton" onClick={new InsertService().insert} > submit</button>
        </div>)
    }
}
export default Serviceinsert