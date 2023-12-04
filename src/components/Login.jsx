import React, { useState } from 'react';
import person from '../components/icons/passlock.svg'
import passlock from '../components/icons/passlock.svg'
import logo from "../assets/LaBouy1.png";
import {Link} from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    if (usernameError || passwordError) {
      setErrorMessage(usernameError || passwordError);
      return;
    }

    
    fetch("https://api.apispreadsheets.com/data/cRV0nOhXZJ8t3vLc/", {
      method: "POST",
      body: JSON.stringify({
        "data": {
          "Password": password,
          "Username": username
        }
      }),
    }).then(res => {
      if (res.status === 201) {
        
      } else {
        
      }
    });

  };

  const validateUsername = (username) => {
    if (!username) {
      return 'Username cannot be empty.';
    }

    if (username.length < 6) {
      return 'Username must be at least 6 characters long.';
    }

    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password cannot be empty.';
    }

    if (password.length < 5) {
      return 'Password must be at least 5 characters long.';
    }

    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }

    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter.';
    }

    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one digit.';
    }

    else  {
      return 'Login Successfully';
    }
    

 
  };



  return (
    <div className='md:max-w-[1080px] max-w-[600px] m-auto w-full h-full flex justify-center items-center border-2 rounded-xl mt-12 mb-12 bg-[#01dada] '>
         <div className='grid lg:grid-cols-2 grid-cols-1 grid-rows-1 rounded-lg mt-5 mb-5'>
   
     
   <div className='col-span-1'> 
   
   <form onSubmit={handleSubmit}>
   
   <div className='flex '> 
   <label > <img src={person} className='w-[25px] h-[25px] mt-1'  /> </label>
     <input placeholder='Username' type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)} className='bg-gray-100 rounded-md w-[350px]'/>
    
     </div>

     <div className='flex mt-1'>
       <label>
         <img src={passlock} className='w-[25px] h-[25px] mt-1' />
       </label>
     <input placeholder='Password' type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} className='bg-gray-100 rounded-md w-[350px]'/>
     </div>
     <div className='flex justify-center'>
     {errorMessage && <p className="error-message bg-green-200 p-2 rounded-md w-[300px] text-sm   mt-3">{errorMessage}</p>}
     </div>
     <div className='flex justify-center gap-3 mb-2'>
     <button className='p-3 bg-yellow-200 hover:bg-yellow-300 mt-3 rounded-md font-semibold '  type="submit">Login</button>
     <p className='   px-2 flex items-center mt-3  font-semibold'><Link to='/signup'><u>Don't Have an Account?</u></Link></p>
     </div>
   </form>
   </div>
   <div className='col-span-1  ' >
       <div className='flex justify-center'>
     <img src={logo} className='w-[370px] h-[245px] border bg-yellow-200 rounded-xl '/>
     </div>
     </div>

 </div>
    </div>
  );
};

export default Login;
