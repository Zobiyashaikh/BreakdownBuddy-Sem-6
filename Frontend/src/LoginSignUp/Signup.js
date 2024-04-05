import React,{useState} from 'react'
import axios from 'axios';
import {message} from 'antd'
// import './UserLogin.css'
import './Signup.css'
function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [confirmPasswordError, setConfirmPasswordError] = useState();
    // const [errorMessage, setErrorMessage] = useState('');

    const handleSignup = async () => {
        if(username && !emailError && !passwordError && password.length > 5 && email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && confirmPassword){
          try {
              const response = await axios.post('http://localhost:8080/api/users/signup', {
                  email: email,
                  userName: username,
                  password: password,
              });
              let data = response?.data
              let success = response?.data?.success
              // console.log(response);
              if(success == true){
                message.success(`Hello ${data?.user?.userName} you have successfully registered with us!`, 5)
                setTimeout(() => {
                    window.location = '/login'
                }, 3000);
              }
          } catch (error) {
              console.error(error);
          }
        }
        else{
          message.warning('Please enter valid credentials!', 5);
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

    // const PasswordInput = () => {
    //   const [password, setPassword] = useState('');
    //   const [errorMessage, setErrorMessage] = useState('');
    
      // const handlePasswordChange = (e) => {
      //   let value = e.target.value;
      //   setPassword(value);
      //   if (value.length < 5 || value.length > 9) {
      //     setErrorMessage('Password must be between 5 and 9 characters');
      //   } else {
      //     setErrorMessage('');
      //   }
      // };






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
  return (
    <div className='userreg'>  
    <div className="userregcontainer">
        <div className="userregmain">
            {/* <input type="checkbox" id="userregchk" aria-hidden="true"/> */}

            <div className="userregister">
                <div className="userregform">
                    <label className="userreglabel text-white" for="userchk" aria-hidden="true">Register</label>
                    <input className="userreginput" type="text" name="txt" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
                    
                    <input className="userreginput" type="email" name="email" placeholder="Email" onChange={handleEmail} required/>
                    {emailError && <span className="error">Please enter a valid email address!</span>}

                    <input className="userreginput" type="password" name="pswd" placeholder="Password" onChange={handlePassword} required/>
                    {passwordError && <span className="error">Password must be atleast 6 characters</span>}

                    <input className="userreginput" type="password" name="pswd" placeholder="Confirm Password" onChange={handleResetPassword} required disabled={password && !passwordError?false:true}
                    />
                    {confirmPasswordError && <span className="error">Password & Confirm Password must be same!</span>}

                    <button onClick={handleSignup}>Register</button>
                    <h6 className='text-white'>Already a user? <a href='/login'>Login here</a></h6>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup
