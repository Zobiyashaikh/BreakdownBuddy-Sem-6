import React,{useState} from 'react'
import axios from 'axios';
import {message} from 'antd'
import { setCookie } from '../utils/cookie';
import './UserLogin.css'
function UserLogin() {
    const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const handleLogin = async () => {
       
        message.destroy();
        if( !emailError && !passwordError && password.length > 5 && email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ){ 
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', {
                email: email,
                password: password,
            });
            let data = response?.data
            let success = response?.data?.success
            let token = response?.data?.token
            let userDetails = data?.user
            let localstoragevalues = {
                userName : userDetails?.userName,
                isAdmin: userDetails?.isAdmin,
                id: userDetails?.id
            }
            localStorage.setItem('userDetails', JSON.stringify(localstoragevalues));
            // console.log(response?.token)
            if(success == true){
                setCookie('AT', `${token}`)
                message.success(`Hello ${data?.user?.userName} you have successfully logged in!`, 5)
                setTimeout(() => {
                    window.location = data?.user?.isAdmin?'/admin-dashboard':'/dashboard'
                }, 1000);
            }
            // setCookie
        } catch (error) {
            console.error(error);
            message.warning(`Sorry! we have got an error: ${error}!`, 5);
        }
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
    <>  
      <div id='User'> 
    <div className="usercontainer">
        <div className="usermain">
            <input type="checkbox" id="userchk" aria-hidden="true"/>
            <div className="userlogin">
                <div className="userform">
                    <label  className="userlabel" for="chk" aria-hidden="true">Login</label>
                    <input className="userinput" type="email" name="email" placeholder="Email" onChange={handleEmail} required/>
                    {emailError && <span className="error">Please enter a valid email address!</span>}
                    <input className="userinput" type="password" name="pswd" placeholder="Password"  onChange={handlePassword} required/>
                    {passwordError && <span className="error">Password must be atleast 6 characters</span>}
                    <button onClick={handleLogin}>Login</button>
                    <h6 className='text-white'>Not a registered user? <a href='/signup'>Register Here</a></h6>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>

  )
}

export default UserLogin
