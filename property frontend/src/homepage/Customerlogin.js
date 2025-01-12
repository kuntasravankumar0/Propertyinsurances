import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import contact from '../images/contact.png';
import ramana from '../images/ramanasoft.png';
import property from '../images/property.png';
import vehicle from '../images/vechile.png';
import health from '../images/health.png';

function Customerlogin() {
  // Get the customerNumber from the previous location state
  const location = useLocation();
  const { customerNumber } = location.state || {};  // Default to an empty object if state is not available

  const navigate = useNavigate();

  
// Function to navigate to the customer property page
const naveg = () => {
  navigate('/customerpropertyedit', { state: { customerNumber } });  // Corrected with a comma
};


  // Function to navigate to My Account page, passing customerNumber as state
  const mobilen = () => {
    if (customerNumber) {
      navigate('/myAccount', { state: { customerNumber } });
    } else {
      console.error('customerNumber is not available');
    }
  };

  return (
    <div>

      <br />
      <center>
        <img
          className="myaccountimage"
          src="https://www.cnhcapital.com/en_us/PublishingImages/Pages/Restyling/PageBanner_MyAccount_1400x400_F.jpg"
          alt="My Account Banner"
        />
        <a className="myaccountlink" onClick={mobilen}>
          My Account
        </a>
      </center>

      <div className="image-links">
        <div className="image-item">
          <img onClick={naveg} src={property} alt="Property" />
          <p>Property</p>
        </div>
        <div className="image-item">
          <img src={health} alt="Health" />
          <p>Health</p>
        </div>
        <div className="image-item">
          <img src={vehicle} alt="Vehicle" />
          <p>Vehicle</p>
        </div>
      </div>
    </div>
  );
}

export default Customerlogin;
