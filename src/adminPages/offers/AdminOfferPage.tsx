import React from "react";
import { Component } from "react";
//import "../adminPages/servicestyle.css"
import ReactDOM from 'react-dom/client'
import Offerinsert from "./offerseditor/OfferInsert";
import ViewOffer from "./ViewOffer";
import Offerdelete from "./offerseditor/offerDelete";


  var offerbody:any=null;


class AdminOfferPage extends Component
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

 
 
 
 if(offerbody!=null || offerbody!=undefined)
 { 
  offerbody.unmount();
  
 }
 offerbody = ReactDOM.createRoot(
  document.getElementById('offercontainer') as HTMLElement
 
);
 if(e.target.value==="insert")
 {
  
  offerbody.render(
    <React.StrictMode>
    <Offerinsert></Offerinsert>
    </React.StrictMode>
  );
 }
 else if(e.target.value==="delete")
 {
  offerbody.render(
    <React.StrictMode>
     <Offerdelete></Offerdelete>
    </React.StrictMode>
  );
 }
 
 else if(e.target.value==="choose operation")
 {
  offerbody.render(
    <React.StrictMode>
     
    </React.StrictMode>
  );
 }
}



    render(): React.ReactNode {
     
        return(<div style={{height:"95%"}} >
          
            <div  style={{float:"right",width:"50%",height:"100%",textAlign:"center",boxShadow:"0 0 20px 0 rgba(245, 220, 240, 0.2), 0 5px 5px 0 rgba(249, 188, 225, 0.24)"}}>
            <select   onChange={this.handledropdown}  defaultValue="choose operation" title="op" id="offeroperation" style={{height:"5%" }}>
            <option value="insert">insert</option>
            <option value="delete">delete</option>
            <option value="choose operation">choose operation</option>
            </select>
            
            <div   id="offercontainer"style={{backgroundColor:"rgba(100,100,100,0)",height:"96.5%"}}>
           
            </div>
            </div>
            <div  id="offerlist" style={{overflowY:"auto", overflowX:"auto", float:"left",width:"49.5%",height:"100%",textAlign:"center",boxShadow:"0 0 20px 0 rgba(245, 220, 240, 0.2), 0 5px 5px 0 rgba(249, 188, 225, 0.24)",backgroundColor: '#ebd1e4'}}>
            <ViewOffer></ViewOffer>
            </div>
          
                  
     
        </div>);
    }
}
export default AdminOfferPage;