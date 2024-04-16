import React from "react";
import { Component } from "react";
import "../servicestyle.css"
import UpdateService from "./service activity/updateService";
var UpdateTask=""
class Serviceupdate extends     Component{
    constructor(props:any)
    {
        super(props);
        this.state={
            val:""
        };
        this.handledropdown=this.handledropdown.bind(this)
    }
    
 handledropdown(e:any)
 {
 
 this.setState({val:e.target.value})
 if(e.target.value==="name")
 {
  document.getElementById("updateservicename")?.removeAttribute("hidden")
  document.getElementById("updateserviceprice")?.setAttribute("hidden","")
  UpdateTask="name"
 }
 else if(e.target.value==="price"){
    UpdateTask="price"
    document.getElementById("updateserviceprice")?.removeAttribute("hidden")
    document.getElementById("updateservicename")?.setAttribute("hidden","")
 }
 else if(e.target.value==="both"){
    UpdateTask="both"
    document.getElementById("updateserviceprice")?.removeAttribute("hidden");
    document.getElementById("updateservicename")?.removeAttribute("hidden")
}
else if(e.target.value=="choose operation")
{
    document.getElementById("updateservicename")?.setAttribute("hidden","")
    document.getElementById("updateserviceprice")?.setAttribute("hidden","")
    UpdateTask="none"
}
 }
    render(): React.ReactNode {
        return(<div className="servicemodificationcontainer">
            <input id="updateservicesearchId" className="serviceinput" placeholder="service id"></input>
            <select onChange={this.handledropdown}    defaultValue="choose operation" title="op" id="operation" style={{height:"5%",float:"left",marginLeft:"10%",marginBottom:"3%" }}>
            <option value="name">name</option>
            <option value="price">price</option>
            <option value="both">name & price</option>
            <option value="choose operation">choose operation</option>
            </select>
            <input hidden id="updateservicename" className="serviceinput" placeholder="new name"></input>
            <input hidden id="updateserviceprice" className="serviceinput" placeholder="new price"></input>
            <button className="servicebutton" onClick={  new UpdateService(UpdateTask).Update}> submit</button>
        </div>)
    }
}
export default Serviceupdate