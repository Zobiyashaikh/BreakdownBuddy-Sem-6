import React, { useState, useEffect } from "react";
import "../UserDashboard/UserDashboard.css";
import { customer01, customer02} from "../../images.js";
function UserDashboard() {
//   const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        // add hovered class to selected list item
        let list = document.querySelectorAll(".navigation li");

        function activeLink() {
        list.forEach((item) => {
            item.classList.remove("hovered");
        });
        this.classList.add("hovered");
        }

        list.forEach((item) => item.addEventListener("mouseover", activeLink));
        // Menu Toggle
        let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");

        toggle.onclick = function () {
            navigation.classList.toggle("active");
            main.classList.toggle("active");
        };
    }, [])
    
    
  return (
    <>
    <div className='user-dashboard-main'>
    <div className="user-dashboard-container">
        <div className="navigation">
            <ul className="pl-0">
                <li>
                    <a href="#">
                        <span className="title">User DashBoard</span>
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
                    <a href="/user-address">
                        <span className="icon">
                        <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span className="title">Address</span>
                    </a>
                </li>

                <li>
                    <a href="/car-details">
                        <span className="icon">
                        <ion-icon name="car-sport-outline"></ion-icon>

                        </span>
                        <span className="title">Car Details</span>
                    </a>
                </li>

                <li>
                    <a href="/services">
                        <span className="icon">
                        <ion-icon name="time-outline"></ion-icon>
                        </span>
                        <span className="title">Services</span>
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
                    <a href="/">
                        <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    {/* <!-- ========================= Main ==================== --> */}
        <div className="main">
            <div className="topbar">
                <div className="toggle" 
                // onClick={menuToggle}
                >
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div className="search">
                    <label>
                        <input type="text" placeholder="Search here"/>
                        <ion-icon  name="search-outline"
                        style={{
                            position:"absolute",
                            top:"12px"
                        }}
                        ></ion-icon>
                    </label>
                </div>

                <div className="user">
                    <img src={customer01} alt=""/>
                </div>
            </div>
            <div className="cardBox">
                {/* <div className="card">
                    <div>
                        <div className="numbers">1,504</div>
                        <div className="cardName">Daily Views</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div> */}

                {/* <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Sales</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">284</div>
                        <div className="cardName">Comments</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">$7,842</div>
                        <div className="cardName">Earning</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div> */}
            </div>
             {/* <!-- ================ Order Details List ================= --> */}
             <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Services</h2>
                     
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Service Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Batery Replacement</td>
                                <td>3000/-</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                           
                          
                        </tbody>
                    </table>
                </div>
                
            {/* <!-- ================= New Customers ================ --> */}
            {/* <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>

                    <table>
                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>
                    </table>
                </div> */}
            </div>

        </div>
            {/* <!-- ======================= Cards ================== --> */}
            
           
  
            </div>

 
    </>
  )
}


export default UserDashboard