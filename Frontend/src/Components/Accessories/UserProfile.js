import React from 'react'
import GlobalNav from '../Nav'
import './UserProfile.css'

function UserDashboard() {
  
  return (
    <div className='user-profile-page'> 
    <GlobalNav/>
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center main-body ">
       <div class="card p-4"> <h1 className='text-center'> User Profile </h1>
       <div class=" image d-flex flex-column justify-content-center align-items-center">
         <button class="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> <span class="name mt-3">Zobiya Shaikh</span> 
         <span class="idd">@shaikhZobiya</span>
          <div class="d-flex flex-row justify-content-center align-items-center gap-2">
             <span class="idd1">Oxc4c16a645_b21a</span>
              <span><i class="fa fa-copy"></i></span>
               </div> <div class="d-flex flex-row justify-content-center align-items-center mt-3"> 
               </div> <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Edit Profile</button> 
               </div>
                <div class=" px-2 rounded mt-4 date "> 
                <span class="join">Joined May,2021</span> 
                </div> 
                </div> 
                </div>
</div> </div>
  )
}

export default UserDashboard
