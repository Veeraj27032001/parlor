import React from "react";
import { Component } from "react";
import LoadUserServicelist from "../adminPages/seviceeditor/UserLoadService";




class UserService extends Component{
    render(): React.ReactNode {
        
        return(
            <div id="serviceview" style={{height:"95%",width:"100%",backgroundColor: '#ebd1e4'}}>
            <div style={{height:"100%",width:"60%",overflowY:"scroll", overflowX:"auto", float:"left",textAlign:"center",display:"block",
            boxShadow:"0 0 20px 0 rgba(245, 220, 240, 0.2), 0 5px 5px 0 rgba(249, 188, 225, 0.24)"}}>
            <LoadUserServicelist></LoadUserServicelist>
            </div>
            <div  style={{height:"100%",width:"40%",display:"block",overflowY:"auto",float:"right"}}>
                <h1 style={{textAlign:"center"}}>QUEENS</h1>
                <h2>
                    True beauty doesn't come from bottles of makeup,
                    it cannot be surgically added either. No, true beauty,
                     it radiates from the heart, hotter and brighter than the sun.</h2>
                     <h2>
                     The non permanent appearance of happiness and distress, 
                     and their disappearance in due course, are like the appearance and 
                     disappearance of summer and winter seasons.
                     </h2>
                     <h2>
                     Don't underestimate a person by their appearance now.
                      That person might have better appearance than you in the future.
                     </h2>
            </div>
            </div>);
            
    
    }
}
export default UserService;