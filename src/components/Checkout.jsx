import React, { useState } from 'react';
import visa from '../components/icons/visa.svg';
import mastercard from '../components/icons/mastercard.svg';
import amex from '../components/icons/amex.svg';

const Checkout = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guestCount, setGuestCount] = useState('');

  const handlePayment = () => {
    if (validateForm()) {
      console.log('Payment logic goes here');

      fetch("https://api.apispreadsheets.com/data/aHWARlL6xvrNpWb9/", {
        method: "POST",
        body: JSON.stringify({
          "data": {
            "Name": fullName,
            "Email": email,
            "Message": "Payment details: " + JSON.stringify({
              cardName,
              cardNumber,
              expMonth,
              expYear,
              cvv,
              startDate,
              endDate,
              guestCount,
            }),
          }
        }),
      }).then(res => {
        if (res.status === 201) {
      
        } else {
      
        }
      });
    }
  };

  const validateForm = () => {
    return (
      fullName !== '' &&
      email !== '' &&
      streetAddress !== '' &&
      city !== '' &&
      state !== '' &&
      zipCode !== '' &&
      cardName !== '' &&
      cardNumber !== '' &&
      expMonth !== '' &&
      expYear !== '' &&
      cvv !== '' &&
      startDate !== '' &&
      endDate !== '' &&
      guestCount !== ''
    );
  };

  return (
    <div className='bg-gray-100'>
     

      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-center items-center'>
        <div className=' gap-12 p-12 bg-white my-12 rounded-lg'>

          <div className='grid lg:grid-cols-1 gap-3 '>
          <h1 className='flex justify-center text-2xl font-bold'>BOOKING DETAILS</h1>
          <div className='flex lg:flex-row flex-col'>
            <div>
           <p className='font-semibold'>Check In</p>
          <input className='lg:w-[125px] w-[250px]' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div >
          <p className='font-semibold'>Check Out</p>
          <input className='lg:w-[125px] w-[250px]' type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <div>
          <p className='displ'>.</p>
          <input  className='lg:w-[250px] w-[250px]'type="number" placeholder='Number of Guests' value={guestCount} onChange={(e) => setGuestCount(e.target.value)} />
          </div>
        </div>
            <h1 className='text-xl font-semibold'>BILLING ADDRESS</h1>
            <input className='w-[250px] lg:w-[500px]' type="text" placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <input className='w-[250px] lg:w-[500px]' type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className='w-[250px] lg:w-[500px]' type="text" placeholder='Street Address' value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
            <input className='w-[250px] lg:w-[500px]' type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
            <div className='flex '>
              <input className='lg:w-[250px] w-[125px]' type="text" placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
              <input className='lg:w-[250px] w-[125px]' type="text" placeholder='Zip Code' value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            </div>
          </div>
 
          <div className='grid lg:grid-cols-1  gap-3 mt-5'>
            <h1  className='text-xl font-semibold'>PAYMENT</h1>
            <p>Accepted Cards:</p>
            <div className='flex gap-3'>
              <img  src={amex} className='w-[40px]' alt='Amex' />
              <img src={visa} className='w-[40px]' alt='Visa' />
              <img src={mastercard} className='w-[40px]' alt='Mastercard' />
            </div>
            <input className='w-[250px] lg:w-[500px]'  type="text" placeholder='Name on Card' value={cardName} onChange={(e) => setCardName(e.target.value)} />
            <input className='w-[250px] lg:w-[500px]' type="number" placeholder='Credit Card Number' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <input className='w-[250px] lg:w-[500px]' type="number" placeholder='Exp Month' value={expMonth} onChange={(e) => setExpMonth(e.target.value)} />
            <div className='flex'>
              <input className='lg:w-[250px] w-[125px]' type="number" placeholder='Year' value={expYear} onChange={(e) => setExpYear(e.target.value)} />
              <input className='lg:w-[250px] w-[125px]' type="number" placeholder='Cvv' value={cvv} onChange={(e) => setCvv(e.target.value)} />
            </div>
          </div>
          
          <div className='flex justify-center mt-5'>
              <button
                className={`bg-yellow-200 px-12 py-3 rounded-xl font-semibold ${validateForm() ? '' : 'cursor-not-allowed opacity-50'}`}
                onClick={validateForm() ? handlePayment : null}
                disabled={!validateForm()}
              >
                PAY NOW
              </button>
            </div>

 
            </div>
          
        </div>
     
    </div>
   
  );
};

export default Checkout;