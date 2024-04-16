import React from "react";
import { Component } from "react";
import LoadUserServicelist from "../adminPages/seviceeditor/UserLoadService";
import UserViewOffer from "./UserViewOffer";




class UserOffer  extends Component{
    
        render(): React.ReactNode {
            
            return(
                <div id="offerview" style={{height:"95%",width:"100%",backgroundColor: '#ebd1e4'}}>
                <div style={{height:"100%",width:"100%",overflowY:"auto", overflowX:"auto", float:"left",textAlign:"center",display:"block",
                boxShadow:"0 0 20px 0 rgba(245, 220, 240, 0.2), 0 5px 5px 0 rgba(249, 188, 225, 0.24)"}}>
                <UserViewOffer/>
                </div>
                
                </div>);
        }
}
export default UserOffer;