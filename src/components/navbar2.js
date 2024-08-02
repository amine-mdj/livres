import React, { useState } from 'react';
import { NavLink} from 'react-router-dom'
import Heart from '../images/heart2.png'
import Promo from '../images/promo2.png'
import './navbar2.css'


const Navbar2 = () => {

    const [isActive, setIsActive] = useState(false);
    const [isSlide, setIsSlide] = useState(false);

    

   const handleclose = () => {
    setIsActive(!isActive);
   }

   const handleslide = () => {
    setIsSlide(!isSlide);
   }

    return (
      <div className='container'>
        <div className='banner'></div>
        <div className='nav'>
            <div className='bar' onClick={handleslide}>
            <i class="fa-solid fa-bars fa-2xl"></i>
            </div>
        <div className='heart1'><p className='logo'>Musleira</p>
        <svg class="heart2" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="heart-path" d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#1C274C"/>
</svg></div>
        
        <div className='cart'>
         <div className='inpt'>
         <i className="fa-solid fa-magnifying-glass fa-lg search"></i>
         <input type="text" />
         </div>
        <i className="fa-solid fa-cart-shopping fa-xl"></i>
        </div>
        
        </div>
        <div className='nav2'>
          <div className={`nav2inter ${isSlide ? 'slide' : ''}`}>
          <div className='nav2inner'>
          <NavLink className="navlink" to='/'><p>Home</p></NavLink>
          <NavLink className="navlink" to='/bygenre'><p>BY Genre</p></NavLink>
          <p>Stickers</p>
          <p>Cards</p>
          </div>
          <div className='nav2inner2'><p>Reduction pendant le mois de ramadan allant jusqu'a -50% </p></div>
          </div>
        </div>
        </div>
    );
  }
  
  export default Navbar2;