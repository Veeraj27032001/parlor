import ReactDOM from 'react-dom/client';
import React from "react";
import App from '../home';
import Service from './serviceManagement';
import AdminOfferPage from './offers/AdminOfferPage';
import AdminAppointementPageView from './AdminAppointement/AdminAppointemet';
var adminholder:any;
class adminloader{
    loadAppointment()
    {
        if(adminholder!=null || adminholder!=undefined)
        { 
            adminholder.unmount();
        }
          adminholder= ReactDOM.createRoot(
            document.getElementById('admincontainer') as HTMLElement
          );
          adminholder.render(<AdminAppointementPageView/>)

    }
    loadservice()
    {
        if(adminholder!=null || adminholder!=undefined)
        { 
            adminholder.unmount();
        }
        adminholder= ReactDOM.createRoot(
        document.getElementById('admincontainer') as HTMLElement
      );
        adminholder.render(<Service/>);

    }
    loadoffer()
    {
        if(adminholder!=null || adminholder!=undefined)
        { 
            adminholder.unmount();
        }
        adminholder= ReactDOM.createRoot(
        document.getElementById('admincontainer') as HTMLElement
      );
        adminholder.render(<AdminOfferPage/>);  

    }
    loadrequests()
    {
 alert("requests");
    }
    
}
export default adminloader;