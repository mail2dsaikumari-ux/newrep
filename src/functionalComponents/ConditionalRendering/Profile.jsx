import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'

function Profile() {    
    let [logIn,setLogIn] = useState(false)
    let [exist,setExist] = useState(true)

    let changeLogin=()=>{      
       setLogIn(true) 
    }

  return (    
    <div>
      {
        logIn?<div>
            <h3>Profile</h3>
            
            </div>:exist?<Login value={changeLogin}/>:<SignUp/>
      }
      {
        logIn?<button onClick={()=>setLogIn(false)}>Logout</button>:
        exist?
        <div>
            <p>new user? click</p><button onClick={()=>setExist(false)}>signUp</button>
        </div>
        :
        <div>
            <p>existing user? click</p><button onClick={()=>setExist(true)}>LogIn</button>
        </div>
      }
      
      
    </div>
  )
}

export default Profile