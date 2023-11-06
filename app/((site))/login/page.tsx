"use client"
import { useState } from 'react'

const Login = () => {
  const [signupOption, setSignupOption] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignupOption = (status: boolean) => {
    console.log(status)
    return setSignupOption(!status)
  }


  return (
    <div className="bg-primaryLight h-screen">
      <h1 className='text-xl font-bold text-primaryDark p-4'>Instatwitt Login</h1>
      <div className='flex flex-col justify-center'>
      <div className="flex flex-row justify-around w-1/4 m-auto p4">
        <button className={`w-full py-4 ${signupOption ? "bg-primaryLight": "bg-primaryCentral"}`} disabled={signupOption} onClick={() => handleSignupOption(signupOption)}>Sign Up</button>
        <button className={`w-full py-4 ${signupOption ? "bg-primaryCentral": "bg-primaryLight"}`} disabled={!signupOption} onClick={() => handleSignupOption(signupOption)}>Sign In</button>
      </div>
        <form action="/auth/signin" method="post">
      <div className="flex flex-col justify-center w-1/4 m-auto p-4">
        <div className={`flex justify-between py-4 ${signupOption ? "" : "hidden" }`}>
          <label htmlFor='username'>Username:</label>
          <input 
            className='border-2 border-primaryDark'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            />
            </div>
            <div  className='flex justify-between py-4'>
          <label htmlFor='email'>Email:</label>
          <input
            className='border-2 border-primaryDark'
            name='email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          </div>
          <div className='flex justify-between py-4'>
          <label htmlFor='password'>Password:</label>
          <input
            className='border-2 border-primaryDark'
            type='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          </div>
          <div className='flex justify-center'>
          <button className={`bg-primaryCentral px-4 py-2 m-2 rounded-lg ${signupOption ? "" : "hidden" }`} formAction="/auth/signup">Sign up</button>
          <button className={`bg-primaryCentral px-4 py-2 m-2 rounded-lg ${signupOption ? "hidden" : "" }`}>Sign in</button>
          </div>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Login
