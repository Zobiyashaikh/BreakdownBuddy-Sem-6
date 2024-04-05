import {useEffect, useState} from 'react'
import './MechLoginSignUp.css';
import {message} from 'antd'
import axios from "axios";
import {mechanicLogin,tyre} from '../images.js';
import { setCookie } from '../../utils/cookie.js';

function MechanicLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const MechanichandleLogin = async () => {
        message.destroy();
        try {
            const response = await axios.post('http://localhost:8080/api/users/mechanic/login', {
                email: email,
                password: password,
            });
            let data = response?.data
            let success = response?.data?.success
            let token = response?.data?.token
            let mechanicDetails = data?.mechanic
            // console.log(mechanicDetails)
            let localstoragevalues = {
                userName : mechanicDetails?.firstName + " " + mechanicDetails?.lastName,
                isMechanic : true
                // isAdmin: mechanicDetails?.isAdmin
            }
            // console.log(typeof(success));
            localStorage.setItem('userDetails', JSON.stringify(localstoragevalues));
            // console.log(response?.token)
            if(success == true){
                setCookie('AT', `${token}`)
                message.warning(`Please fill all required fields`, 5);
                // message.success(`Hello ${mechanicDetails?.firstName} ${mechanicDetails?.lastName} you have successfully logged in!`, 5)
                setTimeout(() => {
                    window.location = '/mechanic/dashboard'
                }, 1000);
            }
        } catch (error) {
            // console.error(error);
            message.warning(`Sorry! we have got an error: ${error}!`, 5);
        }
    };

    const handleEmail = (e) => {
        let value = e.target.value
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       let validate = value.match(emailRegex)
       console.log({validate})
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
  return (
    <><div class="wrapper">
    <div class="inner">
        <img src={mechanicLogin} alt="" class="img-login-1"></img>
        <div className='mechanic-login-form' >
            <div className='mechaniclogin-signup-main-div'> 
            <h3 className='mechanic-heading'>Login</h3>
            {emailError && <span className="error">Please enter a valid email address!</span>}
            <div class="form-holder">
           
                <span class="lnr lnr-user"></span>
                
                <input type="text" class="form-control" placeholder="email" onChange={handleEmail} required/>
              
            </div>
            {/* <div class="form-holder">
                <span class="lnr lnr-phone-handset"></span>
                <input type="text" class="form-control" placeholder="Phone Number"></input>
            </div> */}
            {/* <div class="form-holder">
                <span class="lnr lnr-envelope"></span>
                <input type="text" class="form-control" placeholder="Mail"></input>
            </div> */}
             {passwordError && <span className="error">Password must be atleast 6 characters</span>}
            <div class="form-holder">
                <span class="lnr lnr-lock"></span>
                <input type="password" class="form-control" placeholder="Password" onChange={handlePassword} required/><br/>
               
            </div>
            {/* <div class="form-holder">
                <span class="lnr lnr-lock"></span>
                <input type="password" class="form-control" placeholder="Confirm Password"></input>
            </div> */}
            <button onClick={MechanichandleLogin}>
                <span>Login</span>
            </button>
            </div>
            <p className='register-here'>New User? <a href="/mechanic/signup">Register Here</a></p>
        </div>
        <img src={tyre} alt="" class=" img-login-2"></img>
    </div>
   
</div>
</>
  )
}

export default MechanicLogin