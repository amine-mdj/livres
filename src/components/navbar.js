import React, { useState } from 'react';
import Heart from '../images/heart2.png'
import Promo from '../images/promo2.png'
import './navbar.css'


const Navbar = () => {

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
        <img src={Heart} alt="" srcset="" /></div>
        
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
          <p>Home</p>
          <p>BY Genre</p>
          <p>Stickers</p>
          <p>Cards</p>
          </div>
          <div className='nav2inner2'><p>Reduction pendant le mois de ramadan allant jusqu'a -50% </p></div>
          </div>
        </div>
        <div className='arabic'><p>إقرأ</p></div>
        <img className='promo' src={Promo} alt="" srcset="" />
      </div>
    );
  }
  
  export default Navbar;