import React from "react";
import './card.css';
import { Button } from 'antd';


  export const Logincard = () =>{
    return(
  <div className="card">
     <dd className="des">
        &copy; THE GROUNDWORK 2016<br></br>
        The Groundwork, and our parent company  <u>Timshel,</u> create platforms that<br></br>
          help organizations and brands scale their social impact.<br></br><br></br>
     
                             Build LOCAL_DEV
     </dd>
    <div className="input">
      <div className="align">
        <h3 className="Ground">THE GROUNDWORK</h3>
        <div>
           <input type="email" placeholder="Email" className="email"></input>
           <div>
           <input type="Password" placeholder="Password" className="password"></input>

           </div>
           <div className="button">
           <Button type="primary" style={{background:'blue',width:270,color:'white',height:30}}>LOGIN</Button>
            <br></br>
            <div>
              <p style={{color:'doggerblue'}}> Forgot password? </p>
            </div>
           </div>
           
        </div>
        </div>
    </div>
  </div>
    );
 };