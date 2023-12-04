import React, {useState} from "react";
import {NavLink, Link} from 'react-router-dom'; 
import logo from "../assets/LaBouy1.png";
import lock from "../assets/lock.png";
import burger from "../assets/burger.svg"
import close from "../assets/close.svg"


    const Navbar = () => {
        const [toggle, setToggle] = useState(false);
        const handleClick = () => setToggle(!toggle);
    
        return (
            <div className="primary-nav">
                <div className="w-full h-[70px] bg-white border-b">
                    <div className="container-fluid">
                        <nav className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center">
                            <img src={logo} className="h-[70px] w-[230px]" />
    
                            
                            <div className="hidden md:flex items-center">
                                <ul className="navbar-nav ml-auto items-center flex gap-4">
                                <li className="nav-item">
                                 <NavLink className="nav-link hover:bg-[#01dada]" to="/">
                                 <p className="font-medium">HOME</p>
                                 </NavLink>
                                </li>
                                <li className="nav-item">
                                 <NavLink className="nav-link hover:bg-[#01dada]" to="/hotel">
                                 <p className="font-medium">HOTEL</p>
                                 </NavLink>
                                </li>
                                <li className="nav-item">
                                 <NavLink className="nav-link hover:bg-[#01dada]" to="/about">
                                   <p className="font-medium">ABOUT</p>
                                  </NavLink>
                                </li>
                                <li className="nav-item">
                                 <NavLink className="nav-link hover:bg-[#01dada]" to="/contact">
                                 <p className="font-medium">CONTACT</p>
                                 </NavLink>
                                </li>
                                </ul>
                            </div>
                                <div className="hidden md:flex">
                                <button className="flex justify-between items-center bg-transparent px-4 gap-2">
                                 <img className="h-[25px]" src={lock}/>
                                 <Link  to="/login"><p className="font-medium">Log In</p></Link></button>
                                <button className="px-4 py-3  bg-[#01dada] hover:bg-yellow-300 text-white font-bold rounded-2xl">
                                 <Link  to="/signup">Sign Up</Link></button>
                                </div>
                            
    
                            
                            <div className="md:hidden" onClick={handleClick}>
                                <img className="h-[30px]" src={toggle ? close : burger} />
                            </div>
                        </nav>
    
                       
                        <div className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 shadow-xl md:hidden' : 'hidden'} >
                            <ul>
                            <li className="className='p-4 hover:bg-[#01dada] flex justify-center items-center">
                             <NavLink className="nav-link hover:text-cyan-400 " to="/">
                              Home
                              </NavLink>
                           </li>
                           <li className="className='p-4 hover:bg-[#01dada] flex justify-center items-center">
                             <NavLink className="nav-link hover:bg-[#01dada]" to="/hotel">
                              Hotel
                             </NavLink>
                           </li>
                           <li className="className='p-4 hover:bg-[#01dada] flex justify-center items-center">
                             <NavLink className="nav-link hover:bg-[#01dada]" to="/about">
                              About
                             </NavLink>
                           </li>
                           <li className="className='p-4 hover:bg-[#01dada] flex justify-center items-center">
                             <NavLink className="nav-link hover:bg-[#01dada]" to="/contact">
                              Contact
                             </NavLink>
                           </li>
                            </ul>

                <div className='flex flex-col my-4 gap-4 py-10'>
                
               <button className='flex justify-center items-center bg-transparent px-1 gap-2 mr-7' >
                <img className="h-[25px]" src={lock}/>
                <Link to='/login'>Login</Link></button>

              
             <button className='px-6 py-2 rounded-md bg-[#01dada] text-white font-bold'><Link to='/signup'>Sign Up</Link></button>
                </div>


                        </div>
                    </div>
                </div>
            </div>



        );
    };
    
    
export default Navbar;
    