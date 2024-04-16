import React from "react";
import { Component } from "react";
import "../../../adminPages/servicestyle.css"
import OfferDeleteFunction from "./OfferDeleteFunction";

class Offerdelete extends     Component{
    render(): React.ReactNode {
        return(<div className="servicemodificationcontainer">
            <input id="deleteofferId" className="serviceinput" placeholder="OfferId"></input>
            <button className="servicebutton" onClick={(new OfferDeleteFunction()).delete}> submit</button>
        </div>)
    }
}
export default Offerdelete