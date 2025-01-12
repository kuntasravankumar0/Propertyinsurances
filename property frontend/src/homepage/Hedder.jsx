import React from 'react';
import { useNavigate } from 'react-router-dom';
import contact from '../images/contact.png';
import ramana from '../images/ramanasoft.png';

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const navig = () => {
    navigate('/'); // Navigates to the home route
  };
  const info = () => {
    navigate('/info'); // Navigates to the home route
  };

  return (
   
      <header >
       <div className='continer'>
             <img className='imageramana' onClick={navig} src={ramana} alt="not found" />
             <a href="">
               <img className="imagecontact" onClick={info} src={contact} alt="no found" />
             </a>
           </div>
    </header>
  );
};

export default Header;
