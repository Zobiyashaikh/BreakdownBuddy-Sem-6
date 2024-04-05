import React from "react";
import "./Introductorypage.css";
import { MechanicIntro, UserIntro } from "../images.js";
function Introductorypage() {
  return (
    <>
      <div className="intro-section">
        <h1 className="section-heading tracking-in-contract-bck " >BreakDownBuddy</h1>
        <p className="section-heading " style={{fontSize:"30px"}}>Select User Type</p>
        <div className="boxes-container">
          <div className="box swing-in-top-fwd">
           <a href="/mechanic/login"> 
            <img src={MechanicIntro} className="intro-mechanic-image"></img>
            </a>
          </div>
          {/* <h2>Mechanic</h2> */}
          <div className="box swing-in-top-fwd">
          <a href="/login"> 
            <img src={UserIntro} className="intro-user-image"></img>
           </a>
          </div>
          {/* <h2>User</h2> */}
        </div>
       
        {/* <h2 >Mechanic</h2> */}
        {/* <h2 className="intromechanic">Mechanic</h2> */}
        <p className="intromechanic ">Become a BreakdownBuddy Partner</p>
        {/* <h2 className="introuser">User</h2> */}
        <p className="introuser " >Give your car professional services anytime anywhere!</p>
      </div>
    </>
  );
}

export default Introductorypage;
