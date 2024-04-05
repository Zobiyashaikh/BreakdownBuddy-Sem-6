import React, { useState, useEffect } from "react";
import "../MechanicDashboard/MechanicDashboard.css";
import { customer01, customer02} from "../../images.js";
// import GlobalNav from '../../Nav'
// import FooterMain from '../../Footer/FooterMain';
import {removeCookie, getCookie} from '../../../utils/cookie';
function MechanicDashboard() {
    const [userDetails, setUserDetails] = useState('')
    const handleLogout = () => {
        removeCookie('AT');
        localStorage.clear()
        if(userDetails?.isMechanic){
          window.location = '/mechanic/login';
        }
        else{
          window.location = '/';
        }
      }
  return (

     
     <>
     <div className='mechanic-dashboard-main'>
    <div className="user-dashboard-container">
        <div className="navigation">
            <ul className="pl-0">
                <li>
                    <a href="#">
                        <span className="title">Mechanic DashBoard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                        <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span className="title">Personal Details</span>
                    </a>
                </li>

                <li>
                    <a href="/edit-mechanic">
                        <span className="icon">
                        <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span className="title">Address</span>
                    </a>
                </li>

                <li>
                    <a href="/mechanics">
                        <span className="icon">
                        <ion-icon name="time-outline"></ion-icon>
                        </span>
                        <span className="title">Service History</span>
                    </a>
                </li>

                <li >
                    <a href="#">
                        <span className="icon">
                        <ion-icon name="notifications-outline"></ion-icon>
                        </span>
                        <span className="title">Notifications</span>
                    </a>
                </li>

                <li >
                    <a href="/contactUs">
                        <span className="icon">
                        <ion-icon name="call-outline"></ion-icon>
                        
                        </span>
                        <span className="title">Contact Us</span>
                    </a>
                </li>

                <li>
                <a href="#" onClick={handleLogout}>
                        <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="main">
      <div className="details">
        <div className="recentServices">
        <div className="upcoming-services">
  <h1 className="cardHeader" style={{color:"#E9B10A"}}>Upcoming Services</h1>
  <table className="mechanic-table">
  <tr>
    <th>Customer Name</th>
    <th>Date</th>
    <th>Time</th>
    <th>Services</th>
    <th>Address</th>
  </tr>
  <tr>
    <td>Zobiya Shaikh</td>
    <td>2024-03-19</td>
    <td>9:00 AM</td>
    <td>Flywheel Turning,Flywheel Replacement,Clutch Bearing Replacement</td>
    <td>Mumbai, Maharashtra</td>
  </tr>
  <tr>
    <td>Afiya Mulla</td>
    <td>2024-03-19</td>
    <td>9:00 AM</td>
    <td>Flywheel Turning,Flywheel Replacement,Clutch Bearing Replacement</td>
    <td>Mumbai, Maharashtra</td>
  </tr>

  <tr>
    <td>Anit Nadar</td>
    <td>2024-03-19</td>
    <td>9:00 AM</td>
    <td>Flywheel Turning,Flywheel Replacement,Clutch Bearing Replacement</td>
    <td>Mumbai, Maharashtra</td>
  </tr>

  <tr>
    <td>Mahek Patel</td>
    <td>2024-03-19</td>
    <td>9:00 AM</td>
    <td>Flywheel Turning,Battery Replacement,Clutch Bearing Replacement</td>
    <td>Delhi, India</td>
  </tr>
 
</table>

</div>
        </div>
      </div>

    <div className="details">
                <div className="recentOrders upcoming-services">
                    <div className="cardHeader">
                        <h2>Previous Services</h2>
                        {/* <a href="#" className="user-dashboard-btn">View All</a> */}
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Customer Name</td>
                                <td>Services Requested</td>
                                <td>Total Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                             
                                <td>Adiva Fatema</td>
                                <td>Rear Shock Absorber Replacement,
                                Front Shock Absorber Replacement,
                                EPS Module Repair
                                </td>
                                <td>4200/-</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Ruchita Mehta</td>
                                <td>Teflon Coating,Polishing</td>
                                <td>10000/-</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Aamina Patel</td>
                                <td>Standard Services</td>
                                <td>7000/-</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Payal Gupta</td>
                                <td>Heating Coil Replacement,Regular AC service</td>
                                <td>5000/-</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Ismail Mulla</td>
                                <td>Rear Shock Absorber Replacement,AMARON(72 months Warranty)</td>
                                <td>12050/-</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Azim Shaikh</td>
                                <td>Car Fluid Check</td>
                                <td>12580/-</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Salman Khan</td>
                                <td>Second Hand Car Inspection</td>
                                <td>2500/-</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Atlmash Mirza</td>
                                <td>Rear Bumper Paint,Basic Services</td>
                                <td>15000/-</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
  </div>
  </div>
  </div>
  </>
               

               
            
                
          
           
    
 
        
     
     
    

   
  )
}

export default MechanicDashboard