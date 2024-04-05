import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AdminLogin from './Components/AdminLogin';
import UserLogin from './LoginSignUp/UserLogin';
import Signup from './LoginSignUp/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import AdminReg from './Components/AdminReg';
import UserDashboard from './Components/Dashboard/UserDashboard/UserDashboard';
import UserProfile from './Components/Accessories/UserProfile';
import Home from './Components/Accessories/Home';
import About from './Components/Accessories/About';
import AdminDashboard from './Components/Dashboard/AdminDashboard/AdminDashboard';
import ServiceListing from './Components/Services/ServiceListing';
import NearbyGasStation from "./Pages/NearbyGasStation";
import NearbyMechanic from "./Pages/NearbyMechanic";
import NearbyTowingCar from "./Pages/NearbyTowingCar";
import MechanicListing from "./Components/Mechanics/MechanicListing";
import AddMechanic from "./Components/Mechanics/AddMechanic";
import EditMechanic from "./Components/Mechanics/EditMechanic";
import Faq from "./Components/Accessories/Faq";
import MechanicRegister from "./Components/Mechanics/MechanicRegister";
import MechanicLogin from "./Components/Mechanics/MechanicLogin";
import MechanicDashboard from "./Components/Dashboard/MechanicDashboard/MechanicDashboard";
import CarDetails from "./Components/Dashboard/UserDashboard/CarDetails";
import UserAddress from "./Components/Dashboard/UserDashboard/UserAddress";
import ContactUs from "./Components/Dashboard/UserDashboard/ContactUs";
import MechanicProfile from "./Components/Mechanics/MechanicProfile";

import Cart from  "./Components/Cart/cart"
import Checkout from  "./Components/Cart/checkout"
import Introductorypage from "./Components/Accessories/Introductorypage";
// import PaymentGateway from "./Payment/PaymentGateway";


function App() {
  return (
    <>    

      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
         <Route exact path="/intro" element={<Introductorypage/> }/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/dashboard" element={<UserDashboard/>} />
          <Route path="/car-details" element={<CarDetails/>} />
          <Route path="/user-address" element={<UserAddress/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
           <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/nearby-gas-station" element={<NearbyGasStation/>} />
          <Route path="/nearby-mechanic" element={<NearbyMechanic/>} />
          <Route path="/nearby-towing-car" element={<NearbyTowingCar/>} />
          <Route path="/services" element={<ServiceListing/>} />
          <Route path="/services/:serviceName" element={<ServiceListing/>} />
          <Route path="/mechanics" element={<MechanicListing/>} />
          <Route path="/add-mechanics" element={<AddMechanic/>} />
          <Route path="/edit-mechanic" element={<EditMechanic/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/mechanic/signup" element={<MechanicRegister/>} />
          <Route path="/mechanic/login" element={<MechanicLogin/>} />
          <Route path="/mechanic/dashboard" element={<MechanicDashboard/>} />
          <Route path="/mechanic/mechanic-profile" element={<MechanicProfile/>} />

          
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
         


        </Routes>
      </Router>
    </>
  );
}

export default App;
