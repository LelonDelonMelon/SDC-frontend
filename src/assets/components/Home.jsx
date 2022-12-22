import Navbar from './Navbar'
import React, { useState } from "react";
import ParticlesBg from "particles-bg";


export const Home = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return (
      <div>
        <Navbar/>
        <ParticlesBg type="lines" bg={true} />        
        <div class="App">
          <div className="">
            <h1 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600" >SECURE DONATION CHAIN</h1>   
            <hr class="my-8 h-px bg-green-200 border-0 dark:bg-gray-700"></hr>     
            <p class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-gray-400 via-teal-500 to-green-400">Reduce tax obligations by giving Bitcoin, Ethereum, and other cryptocurrencies to nonprofits, charities, schools, faith-based groups, and more.</p>   
            <button class="mt-10 my-3 text-white bg-gradient-to-r from-blue-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">Documents</button>
            <button class="mt-10 my-3 text-white bg-gradient-to-r from-blue-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">GitHub Repo</button>
          </div>
        </div>
      </div>
    )
}

export default Home