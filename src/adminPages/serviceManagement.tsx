import React from "react";
import { Component } from "react";
//import "../adminPages/servicestyle.css"
import ReactDOM from 'react-dom/client'
import Serviceinsert from "./seviceeditor/insert";

import Servicedelete from "./seviceeditor/delete";
import Serviceupdate from "./seviceeditor/update";
import LoadServicelist from "./servicelist";

  var servicebody:any=null;


class Adminservicemanagement extends Component
{ constructor(props:any)
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

 
 
 
 if(servicebody!=null || servicebody!=undefined)
 { 
  servicebody.unmount();
  
 }
 servicebody = ReactDOM.createRoot(
  document.getElementById('servicecontainer') as HTMLElement
 
);
 if(e.target.value==="insert")
 {
  
  servicebody.render(
    <React.StrictMode>
      <Serviceinsert/>
    </React.StrictMode>
  );
 }
 else if(e.target.value==="delete")
 {
  servicebody.render(
    <React.StrictMode>
     <Servicedelete/>
    </React.StrictMode>
  );
 }
 else if(e.target.value==="update")
 {
  servicebody.render(
    <React.StrictMode>
     <Serviceupdate/>
    </React.StrictMode>
  );
 }
 else if(e.target.value==="choose operation")
 {
  servicebody.render(
    <React.StrictMode>
     
    </React.StrictMode>
  );
 }
}



    render(): React.ReactNode {
     
        return(<div style={{height:"95%"}} >
          
            <div  style={{float:"right",width:"50%",height:"100%",textAlign:"center",boxShadow:"0 0 20px 0 rgba(245, 220, 240, 0.2), 0 5px 5px 0 rgba(249, 188, 225, 0.24)"}}>
            <select   onChange={this.handledropdown}  defaultValue="choose operation" title="op" id="operation" style={{height:"5%" }}>
            <option value="insert">insert</option>
            <option value="update">update</option>
            <option value="delete">delete</option>
            <option value="choose operation">choose operation</option>
            </select>
            
            <div   id="servicecontainer"style={{backgroundColor:"rgba(100,100,100,0)",height:"96.5%"}}>
            
            </div>
            </div>
            <div  id="servicelist" style={{overflowY:"auto", overflowX:"auto", float:"left",width:"49.5%",height:"100%",textAlign:"center",boxShadow:"0 0 20px 0 rgba(245, 220, 240, 0.2), 0 5px 5px 0 rgba(249, 188, 225, 0.24)",backgroundColor: '#ebd1e4'}}>
         <LoadServicelist/>
            </div>
          
                  
     
        </div>);
    }
}
export default Adminservicemanagement;