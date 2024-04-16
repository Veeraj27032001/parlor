import React from "react";
import { Component } from "react";
import "./insertOfferFunction"
import "../../../adminPages/servicestyle.css"
import LoadServiceCheckBox from "./ServiceCheckboxLoad";
import InsertOfferFunction from "./insertOfferFunction";
class Offerinsert extends     Component{
    render(): React.ReactNode {
        return(<div className="servicemodificationcontainer">
            <input id="insertoffername" className="serviceinput" name="sername" placeholder="offer name"></input>
            <input id="insertofeerpercentage" className="serviceinput" placeholder="offer percentage"></input>
            <p>choose apllicable service</p>
            <LoadServiceCheckBox/>
            <button className="servicebutton" style={{marginTop:"15px"}} onClick={new InsertOfferFunction().insert}  > submit</button>
        </div>)
    }
}
export default  Offerinsert