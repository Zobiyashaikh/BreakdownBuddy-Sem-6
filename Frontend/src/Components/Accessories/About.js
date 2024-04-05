import React from "react";
import "./About.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalNav from "../Nav.js";
import FooterMain from "../Footer/FooterMain.js";
import { Audi,BMW, Mercedes,Fiat,Ford,LandRover,Jeep,Kia,Volvo,Suzuki,Toyota,Honda,Skoda,Nissan,Chevrolet } from "../images.js";
function About() {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 100
  };
  return (
    <>
      <GlobalNav />
      <div>
       
      </div>

      <div class="parallax"></div>

      <div className="slide-in-left"
        style={{
          height: "350px",
          backgroundColor: "#FFFFFF",
          fontSize: "16px",
          textAlign: "center",
          color:"black"
        }}
      >
        <h1>About Us</h1>
        <span style={{
          fontSize:"25px",
          color:"blue"
        }}
        className="tracking-in-contract-bck">"Peace of Mind, One Ride at a Time."</span>
        <br />
        At BreakDown Buddy, we understand the frustration and stress that comes
        with unexpected car troubles. That's why we're here to provide you with
        a simple and reliable solution to get you back on the road quickly and
        safely. <br/>
        Our mission is to offer fast assistance when you need it most,
        connecting you with reliable roadside assistance services with just a
        few taps on your phone. Whether it's a flat tire, dead battery, or any
        other breakdown issue, count on us to be there for you, anytime,
        anywhere.<br/> Whether you're facing a breakdown, running low on fuel, or in
        need of mechanical assistance, trust BreakDown Buddy to be your
        dependable companion on the road.<br/>
        Drive with confidence, knowing that help and support are always within reach with BreakDown Buddy
      </div>
      
      <div class="parallax2"></div>

      <div
       className="client-logo-div" style={{ height: "300px", backgroundColor: "#ddd", fontSize: "16px" }}
      >
        <h1 className="text-center">Our Clients</h1>
        <Slider {...settings}>
        <div >
        <img className='client-logo-div' src={Audi}></img>
          
        </div>
        <div>
         <img className='client-logo-div'src={BMW}></img>
        </div>
        <div >
          
          <img className='client-logo-div'  src={Mercedes}></img>
          
        </div>
        <div >
         <img className='client-logo-div' src={Fiat}></img>
        </div>
        <div >
          <img className='client-logo-div' src={Ford}></img>
        </div>
        <div >
          <img className='client-logo-div' src={LandRover}></img>
        </div>
        <div >
          <img className='client-logo-div' src={Jeep}></img>
        </div>
        <div >
          <img className='client-logo-div' src={Kia}></img>
        </div>
        <div >
       <img className='client-logo-div' src={Volvo}></img>
        </div>
        <div >
      <img className='client-logo-div' src={Suzuki}></img>
        </div>
        <div >
          <img className='client-logo-div' src={Toyota}></img>
        </div>
        <div >
          <img className='client-logo-div' src={Honda}></img>
        </div>
        <div >
      <img className='client-logo-div' src={Skoda}></img>
        </div>
        <div >
         <img className='client-logo-div' src={Nissan}></img>
        </div>
        <div >
         <img className='client-logo-div' src={Chevrolet}></img>
        </div>
      </Slider>
      </div>
      <div class="parallax3"></div>

      <div
        style={{ height: "500px", backgroundColor: "#ddd", fontSize: "16px" , textAlign:"center"}}
      >
     <h1 style={{color:"grey"}}>Our Values</h1><br/>
       <h3 className="tracking-in-expand-fwd-bottom values-text">  Reliability</h3>
<h3 className="tracking-in-expand-fwd-bottom values-text"> Customer-Centric Approach</h3>
<h3 className="tracking-in-expand-fwd-bottom values-text"> Transparency</h3>
<h3 className="tracking-in-expand-fwd-bottom values-text"> Empathy</h3>
<h3 className="tracking-in-expand-fwd-bottom values-text"> Quality</h3>
<h3 className="tracking-in-expand-fwd-bottom values-text"> Innovation</h3>
<h3 className="tracking-in-expand-fwd-bottom values-text"> Community</h3>
<h3 className="tracking-in-expand-fwd-bottom values-text"> Safety</h3>
      </div>

      <FooterMain />
    </>
  );
}

export default About;
