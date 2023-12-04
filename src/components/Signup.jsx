import React, { useState } from 'react';
import person from '../components/icons/person.svg';
import passlock from '../components/icons/passlock.svg';
import logo from '../assets/LaBouy1.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const firstNameError = validateField(firstName, 'First Name');
    const lastNameError = validateField(lastName, 'Last Name');
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);

    if (firstNameError || lastNameError || usernameError || passwordError || confirmPasswordError) {
      setErrorMessage(firstNameError || lastNameError || usernameError || passwordError || confirmPasswordError);
      return;
    }

    try {
      const response = await fetch("https://api.apispreadsheets.com/data/YepAwEYj8liKyZBv/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            "First Name": firstName,
            "Last Name": lastName,
            "Username": username,
            "Password": password,
            "Confirm Password": confirmPassword,
          },
        }),
      });

      if (response.status === 201) {
        console.log('Signup successful');
      
        setFirstName('');
        setLastName('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'An error occurred during signup.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('An unexpected error occurred.');
    }
  };

  const validateField = (value, fieldName) => {
    if (!value) {
      return `${fieldName} cannot be empty.`;
    }

    return '';
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

    return '';
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }

    else  {
        return 'Sign-up Successfully';
      }
  };

  return (
    <div className='md:max-w-[1080px] max-w-[600px] m-auto w-full h-full flex justify-center items-center border-2 rounded-xl mt-12 mb-12 bg-[#01dada] '>
      <div>
        <div className='grid lg:grid-cols-2 grid-cols-1 grid-rows-1 rounded-lg mt-5 mb-5'>
          <div className='col-span-1'>
            <form onSubmit={handleSubmit}>
            <div className='flex'>
                <label>
                  <img src={person} className='w-[25px] h-[25px] mt-1' alt='person icon' />
                </label>
                <input placeholder='First Name' type='text' name='firstName' value={firstName} onChange={(event) => setFirstName(event.target.value)} className='bg-gray-100 rounded-md w-[350px]'
                />
              </div>

              <div className='flex mt-1'>
                <label>
                  <img src={person} className='w-[25px] h-[25px] mt-1' alt='person icon' />
                </label>
                <input placeholder='Last Name' type='text' name='lastName' value={lastName} onChange={(event) => setLastName(event.target.value)} className='bg-gray-100 rounded-md w-[350px]'/>
              </div>

              <div className='flex mt-1'>
                <label>
                  <img src={person} className='w-[25px] h-[25px] mt-1' alt='person icon' />
                </label>
                <input placeholder='Username' type='text'  name='username' value={username} onChange={(event) => setUsername(event.target.value)} className='bg-gray-100 rounded-md w-[350px]'
                />
              </div>

              <div className='flex mt-1'>
                <label>
                  <img src={passlock} className='w-[25px] h-[25px] mt-1' alt='passlock icon' />
                </label>
                <input placeholder='Password'  type='password' name='password' value={password}  onChange={(event) => setPassword(event.target.value)} className='bg-gray-100 rounded-md w-[350px]'/>
              </div>

              <div className='flex mt-1'>
                <label>
                  <img src={passlock} className='w-[25px] h-[25px] mt-1' alt='passlock icon' />
                </label>
                <input placeholder='Confirm Password' type='password' name='confirmPassword' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className='bg-gray-100 rounded-md w-[350px]'
                />
              </div>

              <div className='flex justify-center'>
                {errorMessage && ( <p className='error-message bg-green-200 p-2 rounded-md w-[300px] text-sm mt-3'>{errorMessage}</p>  )}
              </div>

              <div className='flex justify-center gap-3 mb-2'>
                <button
                  className='p-3 bg-yellow-200 hover:bg-yellow-300 mt-3 rounded-md font-semibold' type='submit' > Signup </button>
                <p className='px-2 flex items-center mt-3 font-semibold'>
                  <Link to='/login'><u>Already have an account?</u></Link>
                </p>
              </div>
            </form>
          </div>
          <div className='col-span-1'>
            <div className='flex justify-center'>
              <img src={logo} alt='logo' className='w-[370px] h-[245px] border bg-yellow-200 rounded-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
