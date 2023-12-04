import React from 'react'
import room01 from '../roomimage/couple1.jpg'
import room02 from '../roomimage/oceanroom3.avif'
import room03 from '../roomimage/oceanroom15.jpg'
import room04 from '../roomimage/oceanroom14.webp'
import room05 from '../roomimage/oceanroom5.jpg'
import room6 from '../roomimage/oceanroom2.jpg'
import room7 from '../roomimage/oceanroom13.jpg'
import room8 from '../roomimage/couple1.jpg'
import room09 from '../roomimage/oceanroom1.jpg';
import room011 from '../roomimage/oceanroom2.jpg';
import square from '../icons/square.svg';
import family from '../icons/family.svg';
import bed from '../icons/bed.svg';
import shower from '../icons/shower.svg';
import spoon from '../icons/spoon.svg';
import frost from '../icons/frost.svg';
import check from '../icons/check.svg';
import waves from '../icons/waves.svg';
import wifi from '../icons/wifi.svg'
import { Link } from 'react-router-dom'



const Couple = () => {
  return (
    <>
<div className='bg-gray-100'>
        <div className='md:max-w-[1480px] max-w-[600px]  m-auto w-full h-full flex justify-center items-center ' >
              <div className='flex mb-10 mt-12 mx-2'>

              <div className=' grid sm:grid-cols-1 grid-row-1 lg:grid-cols-3 gap-3'>
              <div className='col-span-1 '>
                
              <div className="carousel w-full h-[456px] my-2 ml-3 lg:ml-0">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={room01} className='lg:rounded-bl-xl w-[480px] lg:rounded-tl-xl'/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={room6} className='lg:rounded-bl-xl w-[480px] lg:rounded-tl-xl ' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={room7} className='lg:rounded-bl-xl w-[480px] lg:rounded-tl-xl '/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={room8} className='lg:rounded-bl-xl w-[480px] lg:rounded-tl-xl ' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-outline btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-outline btn-circle">❯</a>
    </div>
  </div>
</div>
                
                
                
                </div>

                <div className='grid lg:grid-cols-3 lg:ml-0 lg:gap-0 col-span-2 grid-cols-1 gap-5 ml-8'>
                  <div  >
                <img src={room02} className='w-[300px] h-[220px] my-2'/>
                </div>
                <div>
                <img src={room03}  className='w-[300px] h-[220px] my-2 '/>
                </div>
                <div>
                <img src={room04} className='lg:rounded-tr-xl w-[300px] h-[220px] my-2'/>
                </div>
                <div >
                <img src={room05} className='w-[300px] h-[220px] my-2'/>
                </div>
                <div >
                <img src={room09} className='w-[300px]  h-[220x] my-2' />
                </div>
                <div>
                <img src={room011} className='lg:rounded-br-xl w-[300px] h-[225px] my-2'/>
                </div>


                </div>


                </div>
                </div>
              </div>

              <div className='md:max-w-[1400px] max-w-[600px] font-semibold  m-auto w-full h-full p-3 rounded-xl mt-12'>
                <h1 className='text-3xl'>Waterfront Premier Room</h1>
                <p className='text-gray-600'>Ocean View</p>
              </div>

              <div className='md:max-w-[1400px] max-w-[600px]   m-auto w-full h-full bg-yellow-300 p-3 rounded-xl mt-12' >
              <h1 className='text-2xl font-semibold'>Highlights</h1>
    <div className=' mb-10 mt-12'>
    
      <div className=' gap-5  text-xl grid lg:grid-cols-7 grid-cols-2'>
        <p className='bg-yellow-100 p-3 rounded-lg text-center'>Balcony or patio</p>
        <p className='bg-yellow-100 p-3 rounded-lg text-center'>Air conditioning</p> 
        <p className='bg-yellow-100 p-3 rounded-lg text-center'>Flat-screen TV</p>
        <p className='bg-yellow-100 p-3 rounded-lg text-center'>Private bathroom</p>
        <p className='bg-yellow-100 p-3 rounded-lg text-center'>Living room</p>
        <p className='bg-yellow-100 p-3 rounded-lg '>Rainfall showerhead</p>
        <p className='bg-yellow-100 p-3 rounded-lg text-center'>Electric kettle</p>
      </div>

      </div>
      </div>
      <div className='md:max-w-[1400px] max-w-[600px] grid-row-2 grid grid-cols-3  m-auto w-full h-full bg-white p-3 rounded-xl mt-12' >
      <div className='col-span-1 mx-2'>
      <div className='lg:flex gap-3 my-5 '>
          <img src={waves} className='w-[30px] h-[30px]'/>
        <p className='text-lg font-semibold'>Ocean View</p>
        </div >
        <div className='lg:flex gap-3 my-5 '>
          <img src={square} className='w-[30px] h-[30px]'/>
        <p className='text-lg font-semibold'>42 sq m</p>
        </div >
        <div className='lg:flex gap-3 my-5'>
          <img src={family} className='w-[30px] h-[30px]'/>
        <p className='text-lg font-semibold'>Sleeps 2</p>
        </div>
        <div className='lg:flex gap-3 my-5'>
          <img src={bed} className='w-[30px] h-[30px]' />
        <p className='text-lg font-semibold'>1 Double Bed</p>
        </div>
      </div>

      <div className='col-span-2'>
        <div className='border p-3 rounded-xl'>
          <h1 className='text-2xl font-semibold mb-2'>Room options</h1>
          <p className='text-lg text-gray-600'>Partially refundable</p>
          <p className='text-3xl font-semibold my-3'>P6,967</p>
          <h2 className='mb-1 text-lg'>Your price includes:</h2>
          <div className='flex'>
            <img src={check} className='w-[20px] h-[20px]' />
          <p>Free Cancelation</p>
          </div>
          <div className='flex'>
          <img src={wifi} className='w-[20px] h-[20px]' />
          <p>Free wifi</p>
          </div>

          <div className='flex justify-end'>
            <Link to='/checkout'><button className='bg-yellow-300 p-4 rounded-xl font-semibold'>BOOK NOW</button></Link>
          </div>
        </div>
      </div>
      </div>


              <div className='md:max-w-[1400px] max-w-[600px]  m-auto w-full h-full bg-white p-3 rounded-xl mt-12 mb-10' >
    <div className=' mb-10 mt-12'>

    <div className=' grid sm:grid-cols-1 lg:grid-cols-2 gap-5 ml-2'>
    <h1 className='text-3xl mt-12 font-semibold flex justify-left col-span-2'>Room amenities</h1>
        <div className='col-span-1'>
      
        <div className='flex gap-3  mt-5'>
                <img src={shower}  className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Bathroom</h1>
                <p className='text-gray-600 mt-2'>Free toiletries</p>
                <p className='text-gray-600'>Private bathroom</p>
                <p className='text-gray-600'>Rainfall showerhead</p>
                <p className='text-gray-600'>Shower</p>
                <p className='text-gray-600'>Towels</p>
                </div>
            </div>

            <div className='flex gap-3  mt-5'>
                <img src={spoon}  className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Food and drink</h1>
                <p className='text-gray-600 mt-2'>Electric kettle</p>
                </div>
            </div>

  
        </div>

        <div className='col-span-1'>
            
    
            <div className='flex gap-3 mb-20 mt-5'>
                <img src={bed} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>Bedroom</h1>
                <p className='text-gray-600 mt-2'>Air conditioning</p>
                <p className='text-gray-600'>Bed sheets</p>
                <p className='text-gray-600'>Rollaway/extra beds (surcharge)</p>
                </div>
            </div>

            
           

            
            <div className='flex gap-3 my-5 '>
                <img src={frost} className='w-[30px] h-[30px]' />
                <div>
                <h1 className='text-xl font-semibold '>More</h1>
                <p className='text-gray-600 mt-2'>Housekeeping (on request)</p>
                <p className='text-gray-600'>Living room</p>
                <p className='text-gray-600'>View - garden</p>
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

export default Couple