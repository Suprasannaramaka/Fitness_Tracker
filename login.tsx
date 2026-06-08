import { AtSignIcon, EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";
import React, {useState , useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../context/AppContext";
import {Toaster} from 'react-hot-toast';
const Login = () => {
  const [state , setState] = useState('login')
  const[username , setUsername] = useState('')
   const[email , setEmail] = useState('')
    const[password , setPassword] = useState('')
     const[showPassword , setShowPassword] = useState(false)
      const[isSubmitting , setIsSubmitting] = useState(false)
      const navigate = useNavigate()
      const {login , signUp , user} = useAppContext()
      async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    if (state == "login") {
      await login({ email, password });
    }
    else {
      await signUp({ username, email, password });
    }
    setIsSubmitting(false);
  }

      useEffect(() => {
      if(user)
      {
        navigate('/')
      }
    },[user,navigate])
  return (
    <>
    <Toaster />
    <main className="login-page-container">
  <form className="login-form" onSubmit={handleSubmit}>
    <h2 className="text-3xl font-medium text-gray-900 dark:text-white">{state === 'login' ? "sign-in" : "sign-up"}</h2>
    <p>{state === 'login' ? 'Please enter email and password to access' : 'Please enter your details to create an account'}</p>
    {/*Username*/}
    {state !== 'login' && (
     <div className="mt-4">
      <label className="font-medium text-sm text-gray-700 dark:text-gray-300">Username</label>
      <div className="relative mt-2">
        <AtSignIcon className="absolute left-3 top-1/2-translate-y-1/2 text-gray-400 size-4.5"/>
      <input onChange={(e) =>setUsername(e.target.value)}  value={username} type="text" placeholder="Enter Username" 
      className="login-input" required/>
      </div>
     </div>
    )}
     {/*Email*/}
    <div className="mt-4">
      <label className="font-medium text-sm text-gray-700 dark:text-gray-300">Email</label>
      <div className="relative mt-2">
        <AtSignIcon className="absolute left-3 top-1/2-translate-y-1/2 text-gray-400 size-4.5"/>
      <input onChange={(e) =>setEmail(e.target.value)}  
      value={email} type="email" placeholder="Please Enter your Email"
      className="login-input" required/>
      </div>
     </div>
        {/*Password*/}
    <div className="mt-4">
      <label className="font-medium text-sm text-gray-700 dark:text-gray-300">Password</label>
      <div className="relative mt-2">
        <LockIcon className="absolute left-3 top-1/2-translate-y-1/2 text-gray-400 size-4.5"/>
      <input onChange={(e) =>setPassword(e.target.value)}  
      value={password}  placeholder="Please Enter your Password"
      className="login-input pr-10" required
      type={showPassword ? 'text' : 'password'}/>
      <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
      onClick={()=> setShowPassword((p) => !p)}>{showPassword ? <EyeOffIcon size={16}/> : <EyeIcon size={16}/>}</button>
      </div>
     </div>
     <button type="submit" disabled={isSubmitting} className="login-button">
      {isSubmitting ? "Signing in" : state === "login" ? 'Login' : 'Sign Up'}
     </button>
     {state === 'login' ? (
      <p className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">Don't have an account? 
      <button onClick={() => setState('sign-up')}
        className="ml-1 cursor-pointer text-green-400 hover:underline">Sign Up</button></p>
     ) 
    :
    (
      <p className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">Already have an account? 
      <button onClick={() => setState('login')}
        className="ml-1 cursor-pointer text-green-400 hover:underline">Login</button></p>
    )}
   </form>
    </main>
    </>
  )
}
export default Login