"use client"
import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div>
      <h1>Instatwitt Login</h1>
      <form action="/auth/signin" method="post">
        <label htmlFor='username'>Username</label>
        <input 
          name='username'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          />
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button formAction="/auth/signup">Sign up</button>
        <button>Sign in</button>
      </form>
    </div>
  )
}

export default Login
