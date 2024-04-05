import React, {useState, useEffect } from 'react'
import './MechLoginSignUp.css';
import {mechanicLogin,tyre} from '../images.js';
import axios from 'axios';
import { message } from 'antd';


function MechanicLogin() {
  const [ firstName, setFirstName] = useState('');
  const [ lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState(null);


const [ firstNameError, setFirstNameError] = useState('');
const [ lastNameError, setLastNameError] = useState('');
const[phonenumberError, setPhonenumberError] = useState();
const[SpecialityError, setSpecialityError] = useState();
const [emailError, setEmailError] = useState();
const [passwordError, setPasswordError] = useState();
const [confirmPasswordError, setConfirmPasswordError] = useState();
    
useEffect(() => {
  
  if(navigator?.geolocation){
    navigator.geolocation.getCurrentPosition(showExactPosition)
  }
  else{
    alert("Location Not Provided!")
  }

  function showExactPosition(position){
    let lat=parseFloat(position?.coords?.latitude).toFixed(6)
    let long=parseFloat(position?.coords?.longitude).toFixed(6)
    
    setLatitude(Number(lat))
    setLongitude(Number(long))
  }
}, [])

const handleFirstName = (e)=> {
  let value = e.target.value
  if (!/^[a-zA-Z]+$/.test(value)) {
    console.error('First name must contain only letters');
    return; 
  }
  const limitedValue = value.substring(0, 10);
  setFirstName(limitedValue);
}

    const handleEmail = (e) => {
      let value = e.target.value
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     let validate = value.match(emailRegex)
     if(!validate){
        setEmailError(true)
     }
     else{
        setEmail(value)
        setEmailError(false)
     }
  }
  const handlePassword =(e)=>{
      let value = e.target.value
      if(value.length < 6){
        setPasswordError(true)
      }
      else{
        setPassword(value)
        setPasswordError(false)
      }
  }

  const handleResetPassword =(e)=>{
    let passvalue = e.target.value
    if(passvalue != password){
        setConfirmPasswordError(true)
    }
    else{
      setConfirmPasswordError(false)
      setConfirmPassword(passvalue)
    }
  }

    const handleMechanicSignup = async (values) => {
      if(firstName && lastName && !emailError && !passwordError && password.length > 5 && email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && confirmPassword){
          try {
              const response = await axios.post('http://localhost:8080/api/users/mechanic/signup', {
                email: email,
                password: password,
                phoneNumber: phonenumber,
                firstName:firstName,
                lastName:lastName,
                speciality: speciality,
                latitude: latitude,
                longitude: longitude,
              });
              let data = response?.data
              let success = response?.data?.success
              if(success == true){
                message.success(`Hello ${data?.firstName} you have successfully registered with us!`, 5)
                setTimeout(() => {
                  window.location = '/mechanic/login'
                }, 3000);
              }
          } 
          catch (error) {
            console.error(error);
          }
      }
      else{
        message.warning('Please fill the compulsory fields!', 5);
      }
    }
  return (
    <div class="wrapper">
      <div class="inner">
          <img src={mechanicLogin} alt="" class="image-1"></img>
          <div className='mechanic-login-signup-form' >
              <div className='mechaniclogin-signup-main-div'> 
              <h3>New Account?</h3>
             <div class="form-holder">
                <span class="lnr lnr-use"></span>
                {firstNameError && <span className="error d-block mt-1 mb-1 text-danger">First Name must have all characters.</span>}
              <input type="text" class="form-control" name="firstName" placeholder="First Name" onChange={handleFirstName} required/>
              </div>
              <div class="form-holder">
                <span class="lnr lnr-use"></span>
                <input type="text" class="form-control" name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required/>
              </div>
              <div class="form-holder">
                <span class="lnr lnr-phone-handset"></span>
                <input type="text" class="form-control" placeholder="Specialities" onChange={(e) => setSpeciality(e.target.value)} required/>
              </div>
              <div class="form-holder">
                <span class="lnr lnr-phone-handset"></span>
                <input type="text" class="form-control" placeholder="Phone Number" name="phonenumber" onChange={(e) => setPhonenumber(e.target.value)} required></input>
              </div>
              <div class="form-holder">
                <span class="lnr lnr-envelope"></span>
                <input type="email" name="email" placeholder="Email" onChange={handleEmail} required class="form-control" autocomplete="off"/>
              </div>
              {emailError && <span className="error d-block mt-1 mb-1 text-danger">Please enter a valid email address!</span>}
              <div class="form-holder">
                <span class="lnr lnr-lock"></span>
                <input type="password" class="form-control" placeholder="Password" name="password" onChange={handlePassword} required />
              </div>
              {passwordError && <span className="d-block mt-1 mb-1 text-danger">Password must be atleast 6 characters</span>}
              <div class="form-holder">
                <span class="lnr lnr-lock"></span>
                <input type="password" class="form-control" placeholder="Confirm Password" onChange={handleResetPassword} required disabled={password && !passwordError?false:true}/>
              </div>
              {confirmPasswordError && <span className="d-block mt-1 mb-1 text-danger">Password & Confirm Password must be same!</span>}

              <button onClick={handleMechanicSignup}>
                <span>Register</span>
              </button>
              </div>
              <p className='login-here'>Already a user? <a href="/Login-mechanic">Login Here</a></p>
          </div>
          <img src={tyre} alt="" class="image-2"></img>
      </div>
    </div>
  )
}

export default MechanicLogin