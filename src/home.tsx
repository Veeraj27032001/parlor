import React from 'react';
import logo from './logo.svg';
import './App.css';
import './websitestyle.css'
import beautyimg1 from './BuetyImg/beauty2.jpg'
import changeImg from './functionality/imagechanger';
var i=0;
function App() {
    window.sessionStorage.setItem("page","HOME");
  return (
    <div  className="App">
      
    <div onLoad={ ()=>{new changeImg(document.getElementById("imageshower")).imgload(i++)}} style={{float:"left",textAlign:"center",marginTop:"2%", width:"100vw"} } >
    <img id="imageshower" width={"100%"} height={"100%"} src={beautyimg1} className="App-logo" alt="logo"  />

    </div>
  
    <br></br>
    <div> <p className="websitefont" style={{color:"black",fontSize:"19px" ,textAlign:"left",marginLeft:"5%" ,fontStyle:"bold"}}>
    QUEENS BEAUTY PARLOUR</p>
<p  className="websitefont" style={{color:"black",fontSize:"16px" ,textAlign:"left",marginLeft:"5%"}}>
Located at saibrakate udupi QUEENS Beauty parlour provides you a range of highly trendy hair cuts and styling, makeup, hair coloring, waxing services, spray tanning and facials. It was established in the year 2005 and has a team of highly skilled and experienced beautician.
Our mission at QUEENS Beauty parlour is to provide a friendly, personalized service through a team of highly skilled and creative professionals. Teamwork is our most valuable asset which ensures our clients are always number one, and we strive to exceed your expectations.
    </p>
   </div>
   <div style={{fontSize:"20px",color:"blue",marginLeft:"5%"
  ,textAlign:"left"}}>
    
    <a href='https://maps.app.goo.gl/7q8rntqKjxsYdTVx9'target={"_blank"} > Visit us</a>
    </div>
    
   
</div>

  );
}
 
export default App;
