import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Hotel from './components/HotelList/Hotel';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import Ocean101 from './components/HotelList/Ocean101';
import Standard from './components/HotelList/Standard';
import Couple from './components/HotelList/Couple';
import Standard3 from './components/HotelList/Standard3';
import Hillside from './components/HotelList/Hillside';
import Hillstandard from './components/HotelList/Hillstandard';
import Honeymoon from './components/HotelList/Honeymoon';
import Hillpremium from './components/HotelList/Hillpremium'
import Maya from './components/HotelList/Maya';
import Mayastandard from './components/HotelList/Mayastandard';
import Mayadouble from './components/HotelList/Mayadouble';
import Mayapremium from './components/HotelList/Mayapremium';
import Login from './components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  ChatBotComponent  from "./components/ChatbotComponent";



const App = () =>{
    return(
        <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotel' element={<Hotel />} />
        <Route path='/hotel/ocean101' element={<Ocean101 />}  />
        <Route path='/hotel/ocean101/standard' element= {<Standard />} />
        <Route path= '/hotel/ocean101/couple' element= {<Couple />} />
        <Route path= '/hotel/ocean101/standard3' element= {<Standard3 />} />
        <Route path='/hotel/hillside' element= {<Hillside />} />
        <Route path= '/hotel/hillside/standard' element = {<Hillstandard />} />
        <Route path= '/hotel/hillside/honeymoon' element= {<Honeymoon />} />
        <Route path= '/hotel/hillside/premium' element= {<Hillpremium />} />
        <Route path= '/hotel/maya' element ={<Maya />} />
        <Route path= '/hotel/maya/standard' element = {<Mayastandard />} />
        <Route path= '/hotel/maya/double' element={<Mayadouble />} />
        <Route path= '/hotel/maya/premium' element= {<Mayapremium />} />
        <Route path= '/checkout' element= {<Checkout />} />
        <Route path='/about' element= {<About />} />
        <Route path= '/contact' element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/signup' element= {<Signup />} />
      </Routes>
      <Footer />

      <Routes> 
        <Route  path= '/' element = {<ChatBotComponent />} />
      </Routes>
    </Router>
    </>
    );
};
export default App;