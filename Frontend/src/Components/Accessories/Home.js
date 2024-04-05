import { useState, useEffect, useMemo } from "react";
import GlobalNav from "../Nav.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Grid.css";
import { Card } from "antd";
import {
gasstation,
  towingcar,
  homepg1,
  nearbymechanic,
  TyreRepair,
  OilChange,
  CarRepair,
  Keylockout,
  BatteryJumpstar,
  CarTowing,
  mechanicworking1,
  mechanicworking2,
  mechanicworking3,
  mechanicworking4,
  mechanicworking5,
} from "../images.js";
import FooterMain from "../Footer/FooterMain.js";
// import hotels from '../../src/images/nearbyhotels.jpg'
const { Meta } = Card;
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const cards = document.querySelector(".cards");
      const position = cards.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <GlobalNav />
      <section className="sec1">
        <div className="large-div">
          <div className="large-div-content">
            <h1 className="txt1 text-animate" > BreakDown Buddy</h1>
            <h3 className="txt2">Road Service</h3>
            <h6 className="txt3">Quick Response Team </h6>
          </div>
        </div>
        <div className="sub-div">
          <img src={homepg1}></img>
        </div>
      </section>
      {/* Features */}
      <h1 style={{fontSize:"80px", color:"#999"}} className="text-center">Our Services</h1>
      <section className="sec2">
      
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3 className="feature1 features ">
                Key Lockout<img src={Keylockout}></img>
              </h3>
            </div>
            <div>
              <h3 className="feature1 features">
                Fuel Delivery<img src={OilChange}></img>
              </h3>
            </div>
            <div>
              <h3 className="feature1 features">
                Tyre Puncture
                <img src={TyreRepair}></img>
              </h3>
            </div>
            <div>
              <h3 className="feature1 features">
                Instant Car Repair<img src={CarRepair}></img>
              </h3>
            </div>
            <div>
              <h3 className="feature1 features">
                Battery Jumpstart<img src={BatteryJumpstar}></img>
              </h3>
            </div>
            <div>
              <h3 className="feature1 features">
                Car Towing<img src={CarTowing}></img>
              </h3>
            </div>
          </Slider>
          <button className="button-92" role="button">View More 
            <a href="/services">- </a>
           
          </button>
        </div>
        <div><Slider {...settings2} className="photos-slider">
<img  src={mechanicworking4}></img>
<img  src={mechanicworking5}></img>
<img  src={mechanicworking4}></img>
<img  src={mechanicworking5}></img>
<img   src={mechanicworking4}></img>

             </Slider></div>
      </section>
      

      {/* <div>
   <Slider {...settings2}>
    <div> <img style={{width:"500px", height:"300px", borderRadius:"50px",marginTop:"45px", marginLeft:"10px",border:"6px solid blue"}} src={mechanicworking4}></img> 
      </div>

      <div> <img style={{width:"500px", height:"300px", borderRadius:"50px",marginTop:"45px", marginLeft:"10px",border:"6px solid blue"}} src={mechanicworking4}></img> 
      </div>

      <div> <img style={{width:"500px", height:"300px", borderRadius:"50px",marginTop:"45px", marginLeft:"10px",border:"6px solid blue"}} src={mechanicworking4}></img> 
      </div>

      <div> <img style={{width:"500px", height:"300px", borderRadius:"50px",marginTop:"45px", marginLeft:"10px",border:"6px solid blue"}} src={mechanicworking4}></img> 
      </div>

      <div> <img style={{width:"500px", height:"300px", borderRadius:"50px",marginTop:"45px", marginLeft:"10px",border:"6px solid blue"}} src={mechanicworking4}></img> 
      </div>
     </Slider>
     </div> */}

      <section className="sec3">
        <h1 className="nearby-heading">LOCATE</h1>
        <div className="cards-container  ">
          <Card
            className={`cards  ${animate ? "tilt-in-top-1" : ""}`}
            hoverable
            style={{
              width: 350,
            }}
            cover={<img alt="example" src={nearbymechanic} />}
          >
            <a href="/nearby-mechanic">
              <Meta title="Find nearby mechanics" />
            </a>
          </Card>
          <Card
            className={`cards  ${animate ? "tilt-in-top-1" : ""}`}
            hoverable
            style={{
              width: 350,
            }}
            cover={<img alt="example" src={gasstation} />}
          >
            <a href="/nearby-gas-station">
              <Meta title="Find nearby gas station" />
            </a>
          </Card>
          <Card
            className={`cards  ${animate ? "tilt-in-top-1" : ""}`}
            hoverable
            style={{
              width: 350,
            }}
            cover={<img alt="example" src={towingcar} />}
          >
            <a href="/nearby-towing-car">  
            <Meta style={{ marginTop: "70px" }} title="Call A Towing Car" />
            </a>
          </Card>
        </div>
      </section>

     

      <FooterMain />
    </>
  );
}

export default Home;
