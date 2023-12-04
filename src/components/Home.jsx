import React from 'react';
import {Link} from 'react-router-dom'
import cloud9 from '../components/image/cloud91.jpg'
import daku from '../components/image/daku2.jpg'
import guyam from '../components/image/guyam3.jpg'
import maasin from '../components/image/maasin4.jpg'
import naked from '../components/image/naked2.jpg'
import pungko from '../components/image/magpupungko2.jpg'
import sugba from '../components/image/sugba4.jpg'
import trend from '../components/icons/trend.svg'
import hotel from '../components/icons/hotel.svg'
import points from '../components/icons/points.svg'
import pic from  '../components/image/cloud9.jpg';
import pic1 from '../components/image/cloud91.jpg';
import pic2 from '../components/image/cloud92.jpg';
import pic3 from '../components/image/cloud93.jpg';
import pic4 from '../components/image/cloud94.jpg';
import pic5 from '../components/image/daku.jpg';
import pic6 from '../components/image/daku1.jpg';
import pic7 from '../components/image/daku2.jpg';
import pic8 from '../components/image/daku3.jpg';
import pic9 from '../components/image/daku4.jpg';
import pic10 from '../components/image/guyam.jpg';
import pic11 from '../components/image/guyam1.jpg';
import pic12 from '../components/image/guyam2.jpg';
import pic13 from '../components/image/guyam3.jpg';
import pic14 from '../components/image/guyam4.jpg';
import pic15 from '../components/image/maasin.jpg';
import pic16 from '../components/image/maasin1.jpg';
import pic17 from '../components/image/maasin2.jpg';
import pic18 from '../components/image/maasin3.jpg';
import pic19 from '../components/image/maasin4.jpg';
import pic20 from '../components/image/naked.jpg';
import pic21 from '../components/image/naked1.jpg';
import pic22 from '../components/image/naked2.jpg';
import pic23 from '../components/image/naked3.jpg';
import pic24 from '../components/image/naked4.jpg';
import pic25 from '../components/image/magpupungko.jpg';
import pic26 from '../components/image/magpupungko1.jpg';
import pic27 from '../components/image/magpupungko2.jpg';
import pic28 from '../components/image/magpupungko3.jpg';
import pic29 from '../components/image/magpupungko4.jpg';
import pic30 from '../components/image/sugba.jpeg';
import pic31 from '../components/image/sugba1.jpg';
import pic32 from '../components/image/sugba2.jpg';
import pic33 from '../components/image/sugba3.jpg';
import pic34 from '../components/image/sugba4.jpg';
import pic35 from '../components/image/taktak.jpg';
import pic36 from '../components/image/taktak1.jpg';
import pic37 from '../components/image/taktak2.jpg';
import pic38 from '../components/image/taktak3.jpg';
import pic39 from '../components/image/taktak4.jpg';
import man from '../components/icons/man.svg';
import Date from './Date'
import Reservation from './Reservation';



const Home = () => {


  return (
    
<div className='container-fluid'>
<div className="hero min-h-[550px]" style={{backgroundImage: 'url(https://gttp.imgix.net/292344/x/0/)'}}>
  <div className="hero-overlay bg-opacity-45"></div>
 
  <div className="hero-content text-center text-dark ml-2">
 
 <div className='grid lg:grid-cols-1 md:grid-cols-1'>
 <h1 className='text-7xl'><span className='text-white font-semibold'>Welcome to</span> <span className='text-yellow-300 font-semibold'>LABOUY</span></h1>
  

</div> 
</div>

</div>


<div className='bg-gray-100'>
<div className='flex justify-center'>
                <h1 className='lg:mt-12 mt-10 text-3xl font-bold text-center'>
                    Tourist spots in Siargao
                </h1>
            </div>
    <div className='md:max-w-[1780px] max-w-[600px] m-auto w-full h-full flex justify-center items-center '>
          

            
            <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-8 gap-5 mb-10'>

              
                <div className='grid grid-cols-1 '>
                <img className='w-[170px] h-[170px] rounded-full hover:animate-bounce' src={cloud9}  />
                <span className='text-xl mt-2 text-center'>Cloud 9</span>
                </div>
               
                <div className='grid grid-cols-1 '>
                <img className='w-[170px] h-[170px] rounded-full hover:animate-bounce' src={daku}  />
                <span className='text-xl mt-2 text-center'>Daku Islands</span>

                </div>
                <div className='grid grid-cols-1 '>
                <img className='w-[170px] h-[170px] rounded-full hover:animate-bounce' src={guyam}  />
                <span className='text-xl mt-2 text-center'>Guyam Island</span>
                </div>

                <div className='grid grid-cols-1 '>
                <img className='w-[170px] h-[170px] rounded-full hover:animate-bounce' src={maasin}  />
                <span className='text-xl mt-2 text-center'>Maasin River</span>
                </div>

                <div className='grid grid-cols-1 '>
                <img className='w-[170px] h-[170px] rounded-full hover:animate-bounce' src={naked}  />
                <span className='text-xl mt-2 text-center'>Naked Island</span>
                </div>

                <div className='grid grid-cols-1 '>
                <img className='w-[170px] h-[170px] rounded-full hover:animate-bounce' src={pungko}  />
                <span className='text-xl mt-2 text-center'>Magpupungko</span>
                </div>

                <div className='grid grid-cols-1 '>
                <img className='w-[170px] h-[170px] rounded-full hover:animate-bounce' src={sugba}  />
                <span className='text-xl mt-2 text-center'>Sugba Lagoon</span>
                </div>
                <div className='grid grid-cols-1 '>
                <img className='w-[170px] h-[170px] rounded-full hover:animate-bounce' src={pic36}  />
                <span className='text-xl mt-2 text-center'>Taktak Falls</span>
                </div>

            </div>
        </div>

        <div className='md:max-w-[1680px] max-w-[600px] m-auto w-full h-full flex justify-center items-center bg-yellow-300 p-2 rounded-xl ' >
              <div className='flex gap-5'>

              <div className=' grid sm:grid-cols-1 lg:grid-cols-4 gap-5'>

                <div className='grid grid-cols-1'>
                  <h2 className='text-2xl mt-3 font-semibold ml-10 '><b>LA BOUY</b><br /> makes it easier for everyone to travel</h2>
                </div>
                <div className='grid grid-cols-1'>
                <div className='bg-yellow-300  p-10 rounded-xl flex gap-5' >
                  <img src={trend} className='w-[50px]' />
                  <p className='font-medium'>Get alerts if hotel prices drop</p>
                </div>
                </div>
                <div className='grid grid-cols-1'>
                <div className='bg-yellow-300 p-10 rounded-xl flex gap-5' >
                <img src={hotel}  className='w-[50px]'/>
                  <p className='font-medium'>Bundle activities + hotel to save</p>
                </div>
                </div>
                <div className='grid grid-cols-1'>
                <div className='bg-yellow-300 p-10 rounded-xl flex gap-5' >
                <img src={points} className='w-[50px]'/>
                  <p className='font-medium'>Earn points for your next booking</p>
                </div>
                </div>

                </div>
             
              </div>


            </div>
            <div className='mt-12 flex justify-center text-3xl font-bold'>
              <h1>Explore stays in trending destinations</h1>
            </div>
        
  <div className="grid md:grid-cols-4 gap-4 px-10 py-10 justify-center items-center cursor-pointer ">

  <div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-3 pt-3">

  <div id="carousel" className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
   <img src={pic}  className=" w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn-btn-outline">❮</a> 
      <a href="#slide2" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={pic1}  className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn-btn-outline">❮</a> 
      <a href="#slide3" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={pic2} className="w-full h-[245px] rounded-md"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn-btn-outline">❮</a> 
      <a href="#slide4" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={pic3} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn-btn-outline">❮</a> 
      <a href="#slide5" className="btn-btn-outline">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={pic4} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn-btn-outline">❮</a> 
      <a href="#slide1" className="btn-btn-outline">❯</a>
    </div>
  </div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      Cloud9 Surfing Beach    
    </h2>
    <p>Have fun playing with waves!</p>
    <div className="card-actions justify-center py-1">
      <div className="badge badge-outline text-gray-400">Beach</div> 
      <div className="badge badge-outline text-gray-400">Surfing</div>
      <div className="badge badge-outline text-gray-400">Water Sport</div>
    </div>
    <button
            className="bg-[#01dada] hover:bg-yellow-300 duration-300 px-5 py-2.5 font-bold
            rounded-md text-white md:w-auto w-full"> <Link to='/hotel'>More details...</Link>
    </button>      
  </div>
</div>


<div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-3 pt-3">

  <div id="carousel2" className="carousel w-full">
  <div id="slide6" className="carousel-item relative w-full">
   <img src={pic5}  className=" w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide10" className="btn-btn-outline">❮</a> 
      <a href="#slide7" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide7" className="carousel-item relative w-full">
    <img src={pic6}  className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn-btn-outline">❮</a> 
      <a href="#slide8" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide8" className="carousel-item relative w-full">
    <img src={pic7} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn-btn-outline">❮</a> 
      <a href="#slide9" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide9" className="carousel-item relative w-full">
    <img src={pic8} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide8" className="btn-btn-outline">❮</a> 
      <a href="#slide10" className="btn-btn-outline">❯</a>
    </div>
  </div>
  <div id="slide10" className="carousel-item relative w-full">
    <img src={pic9} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide9" className="btn-btn-outline">❮</a> 
      <a href="#slide6" className="btn-btn-outline">❯</a>
    </div>
  </div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      Daku Island   
    </h2>
    <p>Smile comes when you visit here!</p>
    <div className="card-actions justify-center py-1">
      <div className="badge badge-outline text-gray-400 ">Beach</div> 
      <div className="badge badge-outline text-gray-400">Island</div>
      <div className="badge badge-outline text-gray-400">Boat Ride</div>
    </div>
    <button
            className="bg-[#01dada] hover:bg-yellow-300 duration-300 px-5 py-2.5 font-bold
            rounded-md text-white md:w-auto w-full"><Link to='/hotel'>More details...</Link>
    </button>   
  </div>
</div>

<div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-3 pt-3">

  <div id="carousel3" className="carousel w-full">
  <div id="slide11" className="carousel-item relative w-full">
   <img src={pic10}  className=" w-full h-[245px]  rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide15" className="btn-btn-outline">❮</a> 
      <a href="#slide12" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide12" className="carousel-item relative w-full">
    <img src={pic11}  className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide11" className="btn-btn-outline">❮</a> 
      <a href="#slide13" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide13" className="carousel-item relative w-full">
    <img src={pic12} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide12" className="btn-btn-outline">❮</a> 
      <a href="#slide14" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide14" className="carousel-item relative w-full">
    <img src={pic13} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide13" className="btn-btn-outline">❮</a> 
      <a href="#slide15" className="btn-btn-outline">❯</a>
    </div>
  </div>
  <div id="slide15" className="carousel-item relative w-full">
    <img src={pic14} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide14" className="btn-btn-outline">❮</a> 
      <a href="#slide11" className="btn-btn-outline">❯</a>
    </div>
  </div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      Guyam Island   
    </h2>
    <p>Come and have fun in the sun!</p>
    <div className="card-actions justify-center py-1">
      <div className="badge badge-outline text-gray-400 ">Beach</div> 
      <div className="badge badge-outline text-gray-400">Island</div>
      <div className="badge badge-outline text-gray-400">Boat Ride</div>
    </div>
    <button
            className="bg-[#01dada] hover:bg-yellow-300 duration-300 px-5 py-2.5 font-bold
            rounded-md text-white md:w-auto w-full"><Link to='/hotel'>More details...</Link>
    </button>   
  </div>
</div>

<div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-3 pt-3">

  <div id="carousel4" className="carousel w-full">
  <div id="slide16" className="carousel-item relative w-full">
   <img src={pic15}  className=" w-full h-[245px]  rounded-md "/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide20" className="btn-btn-outline">❮</a> 
      <a href="#slide17" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide17" className="carousel-item relative w-full">
    <img src={pic16}  className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide16" className="btn-btn-outline">❮</a> 
      <a href="#slide18" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide18" className="carousel-item relative w-full">
    <img src={pic17} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide17" className="btn-btn-outline">❮</a> 
      <a href="#slide19" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide19" className="carousel-item relative w-full">
    <img src={pic18} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide18" className="btn-btn-outline">❮</a> 
      <a href="#slide20" className="btn-btn-outline">❯</a>
    </div>
  </div>
  <div id="slide20" className="carousel-item relative w-full">
    <img src={pic19} className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide19" className="btn-btn-outline">❮</a> 
      <a href="#slide16" className="btn-btn-outline">❯</a>
    </div>
  </div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      Maasin River   
    </h2>
    <p>Enjoy in this enchanted river</p>
    <div className="card-actions justify-center py-1">
      <div className="badge badge-outline text-gray-400 ">River</div> 
      <div className="badge badge-outline text-gray-400">Tree Swing</div>
      <div className="badge badge-outline text-gray-400">Boat Ride</div>
    </div>
    <button
            className="bg-[#01dada] hover:bg-yellow-300 duration-300 px-5 py-2.5 font-bold
            rounded-md text-white md:w-auto w-full"><Link to='/hotel'>More details...</Link>
    </button>   
  </div>
</div>

<div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-3 pt-3">

  <div id="carousel5" className="carousel w-full">
  <div id="slide21" className="carousel-item relative w-full">
   <img src={pic20}  className=" w-full h-[245px]  rounded-md "/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide25" className="btn-btn-outline">❮</a> 
      <a href="#slide22" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide22" className="carousel-item relative w-full">
    <img src={pic21}  className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide21" className="btn-btn-outline">❮</a> 
      <a href="#slide23" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide23" className="carousel-item relative w-full">
    <img src={pic22} className="w-full h-[245px]  rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide22" className="btn-btn-outline">❮</a> 
      <a href="#slide24" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide24" className="carousel-item relative w-full">
    <img src={pic23} className="w-full h-[245px]  rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide23" className="btn-btn-outline">❮</a> 
      <a href="#slide25" className="btn-btn-outline">❯</a>
    </div>
  </div>
  <div id="slide25" className="carousel-item relative w-full">
    <img src={pic24} className="w-full h-[245px]  rounded-md "/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide24" className="btn-btn-outline">❮</a> 
      <a href="#slide21" className="btn-btn-outline">❯</a>
    </div>
  </div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      Naked Island 
    </h2>
    <p>Feel free to be FREE!</p>
    <div className="card-actions justify-center py-1">
      <div className="badge badge-outline text-gray-400 ">Naked Island</div> 
      <div className="badge badge-outline text-gray-400">Beach</div>
      <div className="badge badge-outline text-gray-400">Boat Ride</div>
    </div>
    <button
            className="bg-[#01dada] hover:bg-yellow-300 duration-300 px-5 py-2.5 font-bold
            rounded-md text-white md:w-auto w-full"><Link to='/hotel'>More details...</Link>
    </button>   
  </div>
</div>

<div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-3 pt-3">

  <div id="carousel6" className="carousel w-full">
  <div id="slide26" className="carousel-item relative w-full">
   <img src={pic25}  className=" w-full h-[245px]  rounded-md "/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide30" className="btn-btn-outline">❮</a> 
      <a href="#slide27" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide27" className="carousel-item relative w-full">
    <img src={pic26}  className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide26" className="btn-btn-outline">❮</a> 
      <a href="#slide28" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide28" className="carousel-item relative w-full">
    <img src={pic27} className="w-full h-[245px]  rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide27" className="btn-btn-outline">❮</a> 
      <a href="#slide29" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide29" className="carousel-item relative w-full">
    <img src={pic28} className="w-full h-[245px]  rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide28" className="btn-btn-outline">❮</a> 
      <a href="#slide30" className="btn-btn-outline">❯</a>
    </div>
  </div>
  <div id="slide30" className="carousel-item relative w-full">
    <img src={pic29} className="w-full h-[245px]  rounded-md "/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide29" className="btn-btn-outline">❮</a> 
      <a href="#slide26" className="btn-btn-outline">❯</a>
    </div>
  </div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      Magpupungko
    </h2>
    <p>Enjoy in this natural pool</p>
    <div className="card-actions justify-center py-1">
      <div className="badge badge-outline text-gray-400 ">Rock pool</div> 
      <div className="badge badge-outline text-gray-400">Beach</div>
      <div className="badge badge-outline text-gray-400">Rock Formation</div>
    </div>
    <button
            className="bg-[#01dada] hover:bg-yellow-300 duration-300 px-5 py-2.5 font-bold
            rounded-md text-white md:w-auto w-full"><Link to='/hotel'>More details...</Link>
    </button>   
  </div>
</div>

<div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-3 pt-3">

  <div id="carousel7" className="carousel w-full">
  <div id="slide31" className="carousel-item relative w-full">
   <img src={pic30}  className=" w-full h-[245px]  rounded-md "/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide35" className="btn-btn-outline">❮</a> 
      <a href="#slide32" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide32" className="carousel-item relative w-full">
    <img src={pic31}  className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide31" className="btn-btn-outline">❮</a> 
      <a href="#slide33" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide33" className="carousel-item relative w-full">
    <img src={pic32} className="w-full h-[245px]  rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide32" className="btn-btn-outline">❮</a> 
      <a href="#slide34" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide34" className="carousel-item relative w-full">
    <img src={pic33} className="w-full h-[245px]  rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide33" className="btn-btn-outline">❮</a> 
      <a href="#slide35" className="btn-btn-outline">❯</a>
    </div>
  </div>
  <div id="slide35" className="carousel-item relative w-full">
    <img src={pic34} className="w-full h-[245px]  rounded-md "/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide34" className="btn-btn-outline">❮</a> 
      <a href="#slide31" className="btn-btn-outline">❯</a>
    </div>
  </div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      Sugba Lagoon
    </h2>
    <p>Dive in this beautiful lagoon</p>
    <div className="card-actions justify-center py-1">
      <div className="badge badge-outline text-gray-400 ">Lagoon</div> 
      <div className="badge badge-outline text-gray-400">Islands</div>
      <div className="badge badge-outline text-gray-400">Rock Formation</div>
    </div>
    <button
            className="bg-[#01dada] hover:bg-yellow-300 duration-300 px-5 py-2.5 font-bold
            rounded-md text-white md:w-auto w-full"><Link to='/hotel'>More details...</Link> 
    </button>   
  </div>
</div>

<div className="card w-82 bg-base-100 shadow-xl">
  <figure className="px-3 pt-3">

  <div id="carousel8" className="carousel w-full">
  <div id="slide36" className="carousel-item relative w-full">
   <img src={pic35}  className=" w-full h-[245px]  rounded-md "/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide40" className="btn-btn-outline">❮</a> 
      <a href="#slide37" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide37" className="carousel-item relative w-full">
    <img src={pic36}  className="w-full h-[245px] rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide36" className="btn-btn-outline">❮</a> 
      <a href="#slide38" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide38" className="carousel-item relative w-full">
    <img src={pic37} className="w-full h-[245px]  rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide37" className="btn-btn-outline">❮</a> 
      <a href="#slide39" className="btn-btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide39" className="carousel-item relative w-full">
    <img src={pic38} className="w-full h-[245px]  rounded-md " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide38" className="btn-btn-outline">❮</a> 
      <a href="#slide40" className="btn-btn-outline">❯</a>
    </div>
  </div>
  <div id="slide40" className="carousel-item relative w-full">
    <img src={pic39} className="w-full h-[245px]  rounded-md "/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide39" className="btn-btn-outline">❮</a> 
      <a href="#slide36" className="btn-btn-outline">❯</a>
    </div>
  </div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      Taktak Falls 
    </h2>
    <p>Wonder falls in front of you</p>
    <div className="card-actions justify-center py-1">
      <div className="badge badge-outline text-gray-400 ">Water Falls</div> 
      <div className="badge badge-outline text-gray-400">swimming</div>
      <div className="badge badge-outline text-gray-400">Adventure</div>
    </div>
    <button
            className="bg-[#01dada] hover:bg-yellow-300 duration-300 px-5 py-2.5 font-bold
            rounded-md text-white md:w-auto w-full"><Link to='/hotel'>More details...</Link>
    </button>   
  </div>
</div>


</div>
</div>  
</div>    


  );
};

export default Home;