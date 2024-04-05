import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import { customer01, customer02} from "../../images.js";
import {removeCookie, getCookie} from '../../../utils/cookie';
function AdminDashboard() {
    const [username, setUsername] = useState('')
    const [isClient, setIsClient] = useState(false)
    const [userDetails, setUserDetails] = useState('')
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
      if(getCookie('AT') && localStorage.getItem('userDetails')){
        let userDetails = JSON.parse(localStorage.getItem('userDetails'))
        setUserDetails(userDetails)
        setUsername(userDetails?.userName)
        setAuthenticated(true)
      }
    }, []);

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
    <div className='admin-dashboard-main'>
    <div className="admin-dashboard-container">
        <div className="navigation">
            <ul className="pl-0">
                <li>
                    <a href="#">
                        <span className="icon">
                        
                        </span>
                        <span className="title heading-admin-dashboard">Admin Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="/add-mechanics">
                        <span className="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span className="title">Add Mechanic Details</span>
                    </a>
                </li>

                {/* <li>
                    <a href="/edit-mechanic">
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="title">Edit Mechanic Details</span>
                    </a>
                </li>

                <li>
                    <a href="/mechanics">
                        <span className="icon">
                        <ion-icon name="trash-outline"></ion-icon>
                        </span>
                        <span className="title">Delete Mechanic</span>
                    </a>
                </li> */}

                <li>
                    <a href="/mechanics">
                        <span className="icon">
                        <ion-icon name="eye-outline"></ion-icon>
                        </span>
                        <span className="title">View Mechanics</span>
                    </a>
                </li>

                <li >
                    <a href="/services">
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="title">Services</span>
                    </a>
                </li>

                {/* <li >
                    <a href="#">
                        <span className="icon">
                        <ion-icon name="notifications-outline"></ion-icon>
                        </span>
                        <span className="title">Notifications</span>
                    </a>
                </li> */}

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
                <div className="card">
                    <div>
                        <div className="numbers">1,504</div>
                        <div className="cardName">Daily Views</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Sales</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                </div>

                {/* <div className="card">
                    <div>
                        <div className="numbers">284</div>
                        <div className="cardName">Comments</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div> */}

                <div className="card">
                    <div>
                        <div className="numbers">7,842/-</div>
                        <div className="cardName">Earning</div>
                    </div>

                    <div className="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
            </div>
             {/* <!-- ================ Order Details List ================= --> */}
             <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Services</h2>
                        {/* <a href="#" className="admin-dashboard-btn">View All</a> */}
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Prajakta Bomma</td>
                                <td>2200/-</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Fatema Kothari</td>
                                <td>1100/-</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Fia Thotthan</td>
                                <td>30200/-</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Shaikh Humaira</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Mahenoor Sathi</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Azim Shaikh</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Sohail Shaikh</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Rajshree Bhatt</td>
                                <td>2000/-</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            {/* <!-- ================= New Customers ================ --> */}
            <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>

                    <table>
                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>India</span></h4>
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
                                <h4>Zobiya <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>Afiya <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>Anit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>Alifiya <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>Arbaaz <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={customer02} alt=""/></div>
                            </td>
                            <td>
                                <h4>Sohail <br/> <span>India</span></h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
            {/* <!-- ======================= Cards ================== --> */}
            
           
  
            </div>
        {/* </div> */}
    {/* </div> */}

    {/* <!-- =========== Scripts =========  --> */}
    {/* <script src="assets/js/main.js"></script> */}

    {/* <!-- ====== ionicons ======= --> */}
    {/* <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
  {/* </div> */}
 
    </>
  )
}

export default AdminDashboard