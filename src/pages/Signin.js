import React , {useState} from 'react'
import { Link } from 'react-router-dom'

function Signin() {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    
    const updateUsername = (e) => {
      setUsername(e.target.value)
    }
    const updatePassword = (e) => {
      setPassword(e.target.value)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
    }
  return (
    <div className='form-container'>
      <form className='form-body' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <hr></hr>
        <div className='login-routes'>
        <div className='signin-routes mb-3'> <i class="fa-brands fa-google"></i> &nbsp; Sign in with Google</div>
        <div className='signin-routes mb-3'><i class="fa-brands fa-apple"></i> &nbsp; Sign in with Apple</div>
        </div>
        <p>OR</p>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email Address or Phone Number</label>
          <input type="email" className="form-control input-box" value={username} onChange={updateUsername} required />
        </div>
        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control input-box" value={password} onChange={updatePassword} required />
        </div>
        <button type="submit" className="btn loginbtn mb-3">Sign in</button>
        <hr></hr>
        <div className='signup-link'>
          <p>Don't have an account?</p>
          <Link>Create an Account</Link>
        </div>
      </form>
    </div>
  )
}

export default Signin
