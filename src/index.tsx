import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './home';
import Header from '../src/headerComponents/HeaderComponent'
import reportWebVitals from './reportWebVitals';
import img from'../src/functionality/imagechanger'
import Adminlayout from './adminPages/adminLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
if(localStorage.getItem("loginType")=="ADMIN")
{
 

  root.render(
    <React.StrictMode>
     <Adminlayout></Adminlayout>
    </React.StrictMode>
  );
}
else{
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
}
const heading = ReactDOM.createRoot(
  document.getElementById('heading') as HTMLElement
);
heading.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);


 
export default root;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

