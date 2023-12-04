import React from 'react'
import h1 from '../roomimage/maya1.jpg';
import h2 from '../roomimage/maya2.jpg';
import h3 from '../roomimage/maya3.jpg';
import h4 from '../roomimage/maya4.jpg';
import h5 from '../roomimage/maya5.jpg';
import h6 from '../roomimage/maya6.jpg';
import h7 from '../roomimage/maya7.jpg';
import breakfast from '../icons/breakfast.svg';
import family from '../icons/family.svg';
import frost from '../icons/frost.svg';
import glass from '../icons/glass.svg';
import spoon from '../icons/spoon.svg';
import wifi from '../icons/wifi.svg';
import star from '../icons/star.svg';
import map from '../image/map.jpg';
import location from  '../icons/location.svg';
import hand from '../icons/hand.svg';
import vest from '../icons/vest.svg';
import bag from '../icons/bag.svg';
import bell from '../icons/bell.svg';
import car from '../icons/car.svg';
import umbrella from '../icons/umbrella.svg';
import desk from '../icons/desk.svg';
import tv from '../icons/tv.svg';
import shower from '../icons/shower.svg';
import bed from '../icons/bed.svg';
import visa from '../icons/visa.svg';
import mastercard from '../icons/mastercard.svg';
import amex from '../icons/amex.svg';
import standard1 from '../roomimage/maya15.jpg'
import standard2 from '../roomimage/maya14.avif'
import standard3 from '../roomimage/maya13.jpg'
import standard4 from '../roomimage/maya12.jpg'
import standard5 from '../roomimage/maya11.jpg'
import couple1 from '../roomimage/maya10.jpg'
import couple2 from '../roomimage/maya9.jpg'
import couple3 from '../roomimage/maya8.jpg'
import couple4 from '../roomimage/maya7.jpg'
import couple5 from '../roomimage/maya6.jpg'
import premium1 from '../roomimage/maya5.jpg'
import premium2 from '../roomimage/maya4.jpg'
import premium3 from '../roomimage/maya3.jpg'
import premium4 from '../roomimage/maya2.jpg'
import premium5 from '../roomimage/maya1.jpg'
import {Link, Outlet} from 'react-router-dom'


const Maya=() => {
  return (
<>
<div className='bg-gray-100'>
    <div className='md:max-w-[1480px] max-w-[600px]  m-auto w-full h-full flex justify-center items-center ' >
              <div className='flex mb-10 mt-12 mx-2'>

              <div className=' grid sm:grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='grid grid-cols-1'>
                    <img className='w-[700px] h-[430px] rounded-tl-xl rounded-bl-xl' src={h1} />
                </div>

                <div className='grid grid-cols-3 gap-1 '>
                    <div >
                    
                    <img className= 'h-[210px] w-[220px]' src={h2} />
                </div>
                <div>
                    
                    <img className= 'h-[210px] w-[220px] ' src={h3} />
                </div>
                <div>
                    
                    <img className= 'h-[210px] w-[220px] rounded-tr-xl' src={h4} />
                </div>
                <div>
                    
                    <img className= 'h-[210px] w-[220px]' src={h5} />
                </div>
                <div>
                    
                    <img className= 'h-[210px] w-[220px]' src={h6} />
                </div>
                <div>
                    
                    <img className= 'h-[210px] w-[220px] rounded-br-xl' src={h7} />
                </div>
                
                    
                </div>
              
           
                </div>
                </div>
                </div>

               
               
    <div className='md:max-w-[1400px] max-w-[600px]  m-auto w-full h-full bg-white p-3 rounded-xl' >
    <div className=' mb-10 mt-12'>

    <div className=' grid sm:grid-cols-1 lg:grid-cols-2 gap-5 ml-2'>

<div className='grid grid-cols-1'>
    <h1 className='text-3xl font-semibold mb-1'>Maya Villa</h1>
    <div className='flex'>
    <img className='w-[20px] h-[20px]' src={star}/>
    <img className='w-[20px] h-[20px] ' src={star}/>
    <img className='w-[20px] h-[20px] ' src={star}/>
    <img className='w-[20px] h-[20px] ' src={star}/>
    </div>
    <h1 className=' text-lg my-2 text-gray-500'>Waterfront hotel with restaurant and bar/lounge</h1>

    <div>
        <h1 className='text-2xl mt-12 font-semibold'>Popular amenities:</h1>
    </div>
        
    

    <div className=' grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>

    
    <div className='flex gap-2 mt-5'>
    <img className='w-[30px] h-[30px]' src={breakfast}/>
    <p className='text-lg'>Breakfast available</p>
    </div>
    <div className='flex gap-2 mt-5'>
    <img className='w-[30px] h-[30px]' src={frost}/>
    <p className='text-lg'>Air conditioning</p>
    </div>
    <div className='flex gap-2'>
    <img className='w-[30px] h-[30px]' src={glass}/>
    <p className='text-lg'>Bar</p>
    </div>
    <div className='flex gap-2'>
    <img className='w-[30px] h-[30px]' src={wifi}/>
    <p className='text-lg'>Free WiFi</p>
    </div>
    <div className='flex gap-2'>
    <img className='w-[30px] h-[30px]' src={spoon}/>
    <p className='text-lg'>Restaurant</p>
    </div>
    <div className='flex gap-2'>
    <img className='w-[30px] h-[30px]' src={family}/>
    <p className='text-lg'>Family friendly</p>
    </div>
    


    </div>
    <h1 className='text-lg mt-7 font-semibold'>More about the breakfast based on your search</h1>

    <ul className='mt-3 text-gray-500'>
        <li>
Cooked-to-order breakfast for a fee
</li>
<li>

Served daily from 6:30 AM - 10 AM
</li>
<li>

PHP 350 for adults and PHP 350 for children
</li>
    </ul>







</div>
    <div className='flex justify-end mr-2'>

        <div>
        <img className='block w-[450px] h-[300px] rounded-xl' src={map} />
        <p className='mt-2 text-lg text-gray-500 ]'>Cloud 9, Gen. Luna, Siargao Island, General Luna, <br /> Surigao del Norte, 8419</p>
        <h1 className='mt-12 text-xl font-semibold mb-5'>Explore the Area:</h1>
        <div className='grid grid-cols-2'>

        <div className='grid grid-cols-1 gap-2 '>
            <div className='flex gap-1'>
        <img src={location} className='w-[20px] h-[20px]'/>
        <p className='text-base'>Cloud 9 Beach</p>
        </div>
        <div className='flex gap-1'>
        <img src={location} className='w-[20px] h-[20px]'/>
        <p>General Luna Port</p>
        </div>
        <div className='flex gap-1'>
        <img src={location} className='w-[20px] h-[20px]'/>
        <p>General Luna Beach</p>
        </div>
         </div>

         <div className='grid grid-cols-1 gap-2 '>
        <p>4 min walk</p>
        <p>5 min drive</p>
        <p>2 min drive</p>

         </div>




        </div>
        </div>

      
       
       
        
    </div>
    

</div>

      
</div>

</div>


<div className='md:max-w-[1400px] max-w-[600px] mb-10 mt-12 m-auto w-full h-full bg-white p-3 rounded-xl' >
    <div className=' my-10'>

    <div className=' grid sm:grid-cols-1 lg:grid-cols-3 gap-5 ml-2'>

 <div className='room1'>
 <div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-2 pt-2">

  <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={standard1} className="w-full h-[275px]" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={standard2} className="w-full h-[275px]" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={standard3} className="w-full h-[275px]" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={standard4} className="w-full h-[275px]" />
  </div>
  <div id="item5" className="carousel-item w-full">
    <img src={standard5} className="w-full h-[275px]" />
  </div>
</div> 

  </figure>
  <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn  btn-xs">1</a> 
  <a href="#item2" className="btn  btn-xs">2</a> 
  <a href="#item3" className="btn  btn-xs">3</a> 
  <a href="#item4" className="btn  btn-xs">4</a>
  <a href='#item5'  className='btn  btn-xs'>5</a>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Deluxe Room</h2>
    <p>1 Double bed and 1 Bathroom</p>
    <p className='text-md font-bold my-3'>P3,975.00/night</p>
    <div className="card-actions">
      <nav>
        <Link to ='/hotel/maya/standard'>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
        focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg texext-sm px-5 py-3.5 text-center me-3 mb-3">See Details...</button></Link></nav>
        </div>
        <Outlet />
    </div>
  </div>
 </div>



  <div className='room2'>
 <div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-2 pt-2">

  <div className="carousel w-full">
  <div id="item6" className="carousel-item w-full">
    <img src={couple1} className="w-full h-[275px]" />
  </div> 
  <div id="item7" className="carousel-item w-full">
    <img src={couple2} className="w-full h-[275px]" />
  </div> 
  <div id="item8" className="carousel-item w-full">
    <img src={couple3} className="w-full h-[275px]" />
  </div> 
  <div id="item9" className="carousel-item w-full">
    <img src={couple4} className="w-full h-[275px]" />
  </div>
  <div id="item10" className="carousel-item w-full">
    <img src={couple5} className="w-full h-[275px]" />
  </div>
</div> 

  </figure>
  <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item6" className="btn  btn-xs">1</a> 
  <a href="#item7" className="btn  btn-xs">2</a> 
  <a href="#item8" className="btn  btn-xs">3</a> 
  <a href="#item9" className="btn btn-xs">4</a>
  <a href='#item10'  className='btn btn-xs'>5</a>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Double Room</h2>
    <p>1 Queen size bed and 1 Bathroom</p>
    <p className='text-md font-bold my-3'>P6,967/night</p>
    <div className="card-actions">
    <nav>
   <Link to='/hotel/maya/double'>
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
    focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg texext-sm px-5 py-3.5 text-center me-3 mb-3">See Details...
    </button>
    </Link> 
    </nav>
    </div>
    <Outlet />
  </div>
 </div>
</div>

<div className='room3'>
 <div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-2 pt-2">

  <div className="carousel w-full">
  <div id="item11" className="carousel-item w-full">
    <img src={premium1} className="w-full h-[275px]" />
  </div> 
  <div id="item12" className="carousel-item w-full">
    <img src={premium2} className="w-full h-[275px]" />
  </div> 
  <div id="item13" className="carousel-item w-full">
    <img src={premium3} className="w-full h-[275px]" />
  </div> 
  <div id="item14" className="carousel-item w-full">
    <img src={premium4} className="w-full h-[275px]" />
  </div>
  <div id="item15" className="carousel-item w-full">
    <img src={premium5} className="w-full h-[275px]" />
  </div>
</div> 

  </figure>
  <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item11" className="btn  btn-xs">1</a> 
  <a href="#item12" className="btn  btn-xs">2</a> 
  <a href="#item13" className="btn  btn-xs">3</a> 
  <a href="#item14" className="btn  btn-xs">4</a>
  <a href='#item15'  className='btn  btn-xs'>5</a>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Premium Room</h2>
    <p>2 Queen bed, 1 Double bed , 1 Bath & Balcony</p>
    <p className='text-md font-bold my-3'>P14,754.00/night</p>
    <div className="card-actions">
    <nav>
    <Link to='/hotel/maya/premium'>
    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
    focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg texext-sm px-5 py-3.5 text-center me-3 mb-3">See Details...</button>
    </Link>
    </nav>
    </div>
    <Outlet />
    </div>
  </div>
</div>
</div>
</div>
</div>

<div className='md:max-w-[1400px] max-w-[600px]  m-auto w-full h-full bg-white p-3 rounded-xl mt-12' >
    <div className=' mb-10 mt-12'>

    <div className=' grid sm:grid-cols-1 grid-row-2 lg:grid-cols-3 gap-5 ml-2'>
        <div className='col-span-1'>
            <h1 className='text-3xl mt-12 font-semibold flex justify-left'>About this property</h1>
        </div>

        <div className='col-span-2'>
            <h1 className='text-xl font-semibold mb-2 '>Maya Villa</h1>
            <p className='my-2 text-lg text-gray-500'>Hotel on the waterfront</p>
            <p className=' text-lg'>A bar, conference space, and a restaurant are just a few of the amenities provided at Ocean 101 Beach Resort. Guests can connect to free WiFi in public areas.</p>
            <h3 className=' text-lg'>You'll also enjoy perks such as:</h3>
            <div>
                <ul className='my-3 text-lg'>
                    <li>Cooked-to-order breakfast (surcharge), a roundtrip airport shuttle (surcharge), and a front-desk safe.</li>
                    <li className='mt-5'>Bathrooms with free toiletries</li>
                    <li>Flat-screen TVs with cable channels</li>
                    <li>Balconies or patios, electric kettles, and housekeeping</li>
                </ul>
              
            </div>
        

        </div>
        
</div>
<hr className='my-5' />
        <div className=' grid sm:grid-cols-1 grid-row-2 lg:grid-cols-3 gap-5 ml-2 mt-12'>
        <div className='col-span-1'>
            <h1 className='text-3xl mt-12 font-semibold flex justify-left'>Cleaning and safety practices</h1>
        </div>

        <div className='col-span-2'>
            <div className='flex gap-3'>
                <img src={hand} className='w-[40px] h-[40px]' />
                <div>
                <h1 className='text-xl font-semibold ' >Enhanced cleanliness measures</h1>
                <p className='text-lg'>Disinfectant is used to clean the property</p>
                </div>
            </div>
            

            <div className='flex gap-3 mt-5'>
                <img src={vest} className='w-[40px] h-[40px]' />
                <div>
                <h1 className='text-xl font-semibold '>Safety measures</h1>
                <p className='text-lg'>Personal protective equipment worn by staff</p>
                </div>
            </div>
            

        </div>

        </div>
</div>
</div>

<div className='md:max-w-[1400px] max-w-[600px]  m-auto w-full h-full bg-white p-3 rounded-xl mt-12' >
    <div className=' mb-10 mt-12'>

    <div className=' grid sm:grid-cols-1 grid-row-2 lg:grid-cols-3 gap-5 ml-2'>
        <div className='col-span-1'>
            <h1 className='text-3xl mt-12 font-semibold flex justify-left col-span-2'>Property amenities</h1>
        </div>

        <div className='col-span-2 grid grid-cols-2'>
            <div className='flex gap-3 mt-5'>
                <img src={spoon} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold ' >Restaurants on site</h1>
                <p className='text-gray-600'>Ocean 101 Beach Resort</p>
                </div>
                
            </div>
            

            <div className='flex gap-3 mt-5 '>
                <img src={wifi} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Internet</h1>
                <p className='text-gray-600'>Personal protective equipment worn by staff</p>
                </div>
            </div>

            <div className='flex gap-3 mt-5 '>
                <img src={car} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Parking and transportation</h1>
                <p className='text-gray-600'>No onsite parking available</p>
                </div>
            </div>

            <div className='flex gap-3 mt-5 '>
                <img src={breakfast} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Food and drink</h1>
                <p className='text-gray-600'>Daily cooked-to-order breakfast available</p>
                </div>
            </div>

            
            <div className='flex gap-3  mt-5'>
                <img src={desk} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Conveniences</h1>
                <p className='text-gray-600'>Limited-hour front desk Safe at front desk</p>
                </div>
            </div>

            
            <div className='flex gap-3 mt-5 '>
                <img src={bell} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Guest services</h1>
                <p className='text-gray-600'>Housekeeping on request</p>
                </div>
            </div>

            <div className='flex gap-3 mt-5'>
                <img src={bag} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Business services</h1>
                <p className='text-gray-600'>Conference space</p>
                </div>
            </div>

            <div className='flex gap-3 mt-5'>
                <img src={umbrella} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Outdoors</h1>
                <p className='text-gray-600'>On the waterfront</p>
                </div>
            </div>

            

            
            

        </div>

        </div>
        
</div>
<hr className='my-5' />
        <div className=' grid sm:grid-cols-1 grid-row-2 lg:grid-cols-3 gap-5 ml-2 mt-12'>
        <div className='col-span-1'>
            <h1 className='text-3xl mt-12 font-semibold flex justify-left'>Room amenities</h1>
        </div>

        <div className='col-span-2 grid grid-cols-2'>
            <div className='flex gap-3'>
                <img src={bed} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold' >Bedroom</h1>
                <p className='text-gray-600'>Disinfectant is used to clean the property</p>
                </div>
            </div>
           

            <div className='flex gap-3 '>
                <img src={shower} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Bathroom</h1>
                <p className='text-gray-600'>Free toiletries <br />Private bathroom <br />Towels</p>
                </div>
            </div>

            <div className='flex gap-3 mb-1'>
                <img src={tv} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Entertainment</h1>
                <p className='text-gray-600'>Flat-screen TV with cable channels</p>
                </div>
            </div>

            <div className='flex gap-3 mt-5 '>
                <img src={glass} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Food and drink</h1>
                <p className='text-gray-600'>Electric kettle</p>
                </div>
            </div>

            <div className='flex gap-3 '>
                <img src={umbrella} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Outdoor space</h1>
                <p className='text-gray-600 mb-5'>Balcony/patio</p>
                </div>
            </div>

     

        </div>

        </div>
</div>

<div className='md:max-w-[1400px] max-w-[600px]  m-auto w-full h-full bg-white p-3 rounded-xl mt-12' >
    <div className=' mb-10 mt-12'>

    <div className=' grid sm:grid-cols-1 grid-row-2 lg:grid-cols-3 gap-5 ml-2'>
        <div className='col-span-1'>
            <h1 className='text-3xl mt-12 font-semibold flex justify-left'>Policies</h1>
        </div>

        <div className='col-span-2 grid grid-cols-2 '>
                <div className='mr-5'>
                    
                    <h1 className='text-2xl font-semibold mb-3'>Check-In</h1>
                    <p className='text-gray-700'>Check-in start time: 1 PM; Check-in end time: 8 PM <br />Late check-in subject to availability Minimum <br />check-in age: 18</p>
                    
                </div>
                <div>
                    <h1 className='text-2xl font-semibold mb-3'>Check-out</h1>
                    <p className='text-gray-700'>Check-out before 11 AM <br />Contactless check-out available</p>
                </div>

                <div className='col-span-2 mt-12'>
            <h1 className='text-xl font-semibold mb-3 '>Special check-in instructions</h1>
            <p className='text-gray-700'>This property offers transfers from the airport (surcharges may apply); guests must contact the property with arrival details before travel, using the contact information on the booking confirmation</p>
            <p className='text-gray-700'>The front desk is open daily from 6 AM - 10 PM</p>
            <p className='text-gray-700'>Guests must contact the property in advance for check-in instructions; front desk staff will greet guests on arrival</p>
            <p className='text-gray-700'>To make arrangements for check-in please contact the property ahead of time using the information on the booking confirmation</p>
            <p className='text-gray-700'>If you are planning to arrive after 8 PM please contact the property in advance using the information on the booking confirmation</p>

            <h1 className='mt-12 text-xl font-semibold mb-1'>Access methods</h1>
            <p className='text-gray-700'>Staffed front desk</p>

            <h1 className='mt-12 text-xl font-semibold mb-1'>Pets</h1>
            <p className='text-gray-700'>No pets or service animals allowed</p>

            <h1 className='mt-12 text-xl font-semibold mb-1'>Children and extra beds</h1>
            <p className='text-gray-700'>Children are welcome <br />Rollaway/extra beds are available for PHP 900.0 per night <br /> Cribs (infant beds) are not available </p> 

            <h1 className='mt-12 text-xl font-semibold '>Property payment types:</h1>
            <div className='flex gap-2'>
                <img src={amex} className='w-[100px]' />
                <img src={visa} className='w-[100px]' />
                <img src={mastercard}  className='w-[100px]'/>
    </div>
   </div>

</div>
</div>
</div>
</div>
</div>
 </>
      
  )
}

export default Maya