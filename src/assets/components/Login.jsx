import Navbar from './Navbar'
import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import { Link } from 'react-router-dom';


export const Login = (props) => {
   const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);

    const login = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        const userData = {
            name,
            email,
            password,
        };
        localStorage.setItem('token-info', JSON.stringify(userData));
        // setIsLoggedin(true);
        // setName('');
        // setEmail('');
        // setPassword('');
        useEffect(() => {
          
        
          return () => {
            second
          }
        }, [])
        
    };

    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
    };

    return (
      <>
            <div>
                <Navbar />
                <ParticlesBg type="thick" bg={true} />
                <div class="App">
                    <div className="auth-form-container">
                        <h2 class="font-bold text-2xl" >Login</h2>
                        {!isLoggedin ? (
                            <>
                                <form action="" className="login-form">
                                    <input
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        placeholder=" Name"
                                    />
                                    <input className="mt-5 my-3 text-white rounded-lg"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        placeholder=" Email"
                                    />
                                    <input className='mt-5 my-3 text-white rounded-lg'
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        placeholder=" Password"
                                    />
                                    <button type="submit" onClick={login} className="rounded-lg mt-10 my-3 text-white bg-gradient-to-r from-blue-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        GO
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <h1>User is logged in</h1>
                                <button onClickCapture={logout}>logout user</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login