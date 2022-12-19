import React, { useState } from "react";
import Navbar from './Navbar'
import ParticlesBg from "particles-bg";
import { Link } from 'react-router-dom';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    

    return (

      <div>        
        <Navbar/>
        <ParticlesBg type="thick" bg={true} />
        <div class="App">
          <div className="auth-form-container">
              <h2 class="white font-bold text-2xl" >Register</h2>
          <form className="register-form" onSubmit={handleSubmit}>
              <label class="white font-bold" htmlFor="name">Full name</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="fullname" />
              <label class="white font-bold" htmlFor="email">Email</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
              <label class="white font-bold" htmlFor="password">Password</label>
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
              <button class="my-3 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" id="button" type="submit">Submit</button>
          </form>
          <Link class="underline" to="/Login">Already have an account? Login here.</Link>
          </div>
        </div>
      </div>
    )
}
export default Register