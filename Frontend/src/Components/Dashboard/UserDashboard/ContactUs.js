import React from 'react'
import GlobalNav from "../../Nav.js";
import FooterMain from "../../Footer/FooterMain.js";
import {
    Form,
    Input,
    Button
  } from "antd";
  import {
    EnvironmentOutlined,
    FacebookOutlined,
    WhatsAppOutlined,
    UserOutlined,
    MessageOutlined,
    InstagramOutlined,
    LinkedinFilled,
MailOutlined} from '@ant-design/icons';
import "./UserDashboard.css";
import "./style.css";
import "./animate.css";
import { contactus, email, location, contact} from "../../images.js";
function ContactUs() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("Submitted values:", values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
  return (
    <>{/* Contact Form */}
    <GlobalNav/>
<section >
		<div class="container">
			
			<div class="contact-box row justify-content-center" style={{marginTop:"30px"}}>
				<div class="col-lg-10 col-md-12 ">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-md-7 d-flex align-items-stretch">
								<div class="contact-wrap w-100 p-md-5 p-4">
									<h3 class="mb-4">Get in touch</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		
									<form  id="contactForm" name="contactForm">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<input type="text" class="form-control"  id="name" placeholder="Name"/>
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
													<input type="email" class="form-control"  id="email" placeholder="Email"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea  class="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<button style={{width:"150px", height:"50px", backgroundColor:"#1089FF",border:"1px solid #1089FF "}} className='primary'>Submit</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-5 d-flex align-items-stretch">
								<div class="info-wrap bg-primary w-100 p-lg-5 p-4">
									<h3 class="mb-4 mt-md-4">Contact us</h3>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Address:</span> 198 West 21th Street, Suite 721 Delhi 110001</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Phone:</span> <a href="tel://1234567920">+91 7605803622</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a href="mailto:breakdownbuddy@services.co.in">breakdownbuddy@services.co.in</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Website</span> <a href="#">Breakdownbuddy.com</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  
  <FooterMain/>
</>)}


export default ContactUs 