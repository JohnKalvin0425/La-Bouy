
import React, { useState } from 'react';

import person from '../components/image/person.svg'
import at from '../components/image/at.svg'
import mensahe from '../components/image/message.svg'
import logo from "../assets/LaBouy1.png";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Send the form data to the server
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Your message has been sent successfully!');
        } else {
          alert('There was an error sending your message. Please try again later.');
        }
      })
      .catch((error) => {
        console.error(error);
      });
    };

  return (
    
    <div className='md:max-w-[1180px] max-w-[600px]  m-auto w-full h-full flex justify-center items-center border-2 rounded-xl  mt-12 mb-12 bg-[#01dada] '>
      <div> 
      <div className='grid lg:grid-cols-2 grid-cols-1 grid-rows-1 rounded-lg mt-5 mb-5'>


        <div className='col-span-1 mr-2 '>
    <form  onSubmit={handleSubmit}>
    
    <div className='flex'>
    <label className=' p-1'  htmlFor="name"><img className='w-[25px] h-[25px]' src={person} /></label>
    
          
    <input placeholder='Name' type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className='bg-gray-100 rounded-md w-[350px]' /> 
    
    </div>
    <div className='flex '>
    <label className=' p-1' htmlFor="email"><img className='w-[25px] h-[25px]' src={at} /></label> 
    <input placeholder='Email' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className='bg-gray-100 rounded-md w-[350px]' /> 
    </div>
    
    <div className='flex mt-5'> 
    <label className='p-1' htmlFor="message"> <img className='w-[25px] h-[25px]' src={mensahe} /></label>
    <textarea className='bg-gray-100 rounded-md w-[350px]' placeholder='Message' id="message" name="message" value={message}
     
    onChange={(e) => setMessage(e.target.value)} required rows="5"></textarea>
    </div>
    <div className='flex justify-center mt-5 mb-2'>
          <button className='bg-yellow-200 p-4 rounded-xl font-medium ' type="submit">Send Message</button>
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
        </div>
  )
}

export default Contact