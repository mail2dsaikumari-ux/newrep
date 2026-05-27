import React from 'react'

function Login({value}) {
    console.log(value)
    let handSubmit =(e)=>{
        e.preventDefault()
        value()        
        //api call post (userID, Password)
        //success
        //fail
        //true --> profile page
        //false --> login page
    }
    
  return (
    <div>
      <h3>Login</h3>
      <form action="" onSubmit={handSubmit}>
      <label htmlFor="">Username</label><br />
      <input type="text" /><br /><br />
      <label htmlFor="">Password</label><br />
      <input type="password" /><br /><br />
      <button type='submit'>Login</button>      
      </form>
    </div>
  )
}

export default Login