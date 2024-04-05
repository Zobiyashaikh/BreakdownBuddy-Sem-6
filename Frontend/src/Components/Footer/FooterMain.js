import React from "react";
import "./FooterMain.css";
import { MainLogo } from "../images";

function FooterMain() {
  const d = new Date();
  let year = d.getFullYear();
  return (
<>
      <footer id="footer" class="new_footer_area bg_color" onFooterReached={() => setFixed(false)}> 
        <div class="new_footer_top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  style={{visibility:"visible", animationDelay:"0.2sec", animationName: "fadeInLeft"}}
                >
                   <img style={{marginLeft:"35px",width:"100px",height:"100px" }} src={MainLogo}></img><br/>
                   <h5>BreakDown Buddy</h5>
                   <p>At your service 24/7</p>
    </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{visibility:"visible", animationDelay: "0.4s", animationName: "fadeInLeft"}}
                >
                  <h3 class="f-title f_600 t_color f_size_18">Quick Links</h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <a href="#">NearBy Gas Stations</a>
                    </li>
                    <li>
                      <a href="#">Call a Towing Car</a>
                    </li>
                    <li>
                      <a href="#">Call a Mechanic</a>
                    </li>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{visibility:"visible",animationDelay:"0.6s",animationName:"fadeInLeft"}}
                >
                  <h3 class="f-title f_600 t_color f_size_18">Services</h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <a href="#">Service Packages</a>
                    </li>
                    <li>
                      <a href="#">Ac Services</a>
                    </li>
                    <li>
                      <a href="#">Battery Services</a>
                    </li>
                    <li>
                      <a href="#">Tyre Services</a>
                    </li>
                    <li>
                      <a href="#">Denting Painting</a>
                    </li>
                    <li>
                      <a href="#">Detailing Services</a>
                    </li>
                    <li>
                      <a href="#">Windshields and Headlights</a>
                    </li>
                    <li>
                      <a href="#">Clutch Services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{visibility:"visible",animationDelay:"0.8s",animationName:"fadeInLeft"}}
               
                >
                  <h3 class="f-title f_600 t_color f_size_18">
                    Team Solutions
                  </h3>
                  <div class="f_social_icon">
                    <a href="#" class="fab fa-facebook"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-linkedin"></a>
                    <a href="#" class="fab fa-pinterest"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-sm-7">
                <p class="mb-0 f_400">
                  © BreakDown Buddy Inc.. {year} All rights reserved.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterMain;
