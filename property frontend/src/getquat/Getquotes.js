import React, { useState, useEffect } from 'react';
import './get.css';
import { useLocation, useNavigate } from 'react-router-dom';
import arrow from './left-arrow.png';
import ramana from '../images/ramanasoft.png';
import contact from '../images/contact.png';
import Popup from './Popup'; // Import the Popup component




function Getquotes() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve data from sessionStorage or location state
  const { marketValue, squareFeet, pincode, buildingAge, floods, security, salaried } = 
    JSON.parse(sessionStorage.getItem('quoteData')) || location.state || {};
  
  const [mobileno, setMobileno] = useState('');
  const [finalAmount, setFinalAmount] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectyear, setSelectyear] = useState('1'); // Changed to a simple state

  useEffect(() => {
    const dataToStore = { marketValue, squareFeet, pincode, buildingAge, floods, security, salaried };
    sessionStorage.setItem('quoteData', JSON.stringify(dataToStore));
  }, [marketValue, squareFeet, pincode, buildingAge, floods, security, salaried]);

  // Handle the back button click
  const handleBack = () => {
    navigate('/Property');
  };

  // Logic for building age
  const newBuildingAge = (age) => {
    if (age === "0to5years") return 0;
    if (age === "6to10years") return 0.15;
    if (age === "11to15years") return 0.2;
    if (age === "16to20years") return 0.25;
    return 0;
  };

  // Logic for calculating values based on year selection
  const calculateValues = (year) => {
    switch (year) {
      case "1": return 0;
      case "2": return 0.15;
      case "3": return 0.2;
      case "4": return 0.25;
      case "5": return 0.3;
      default: return 0;
    }
  };

  // Recalculate the insurance amount
  const recalculateAmount = () => {
    const marketValueNum = Number(marketValue);
    const securit = security === "yes" ? 0.0002 : 0;
    const input = 0.0005;
    const ageFactor = newBuildingAge(buildingAge);
    const yearFactor = calculateValues(selectyear);

    let amount = (securit * marketValueNum) + (input * marketValueNum);
    amount += ageFactor * amount;
    amount -= yearFactor * amount;

    return amount.toFixed(2);
  };

  // Handle the calculate button click
  const handleCalculateClick = () => {
    const calculatedAmount = recalculateAmount();
    setFinalAmount(calculatedAmount);
    setPopupVisible(true); // Show the popup after calculating the amount
  };

  // Handle changes in year selection
  const handleChange = (e) => {
    const { value } = e.target;
    setSelectyear(value); // Set selectyear directly
  };

  // Pass data to the next page
  const closePopupAndNavigate = () => {
    setPopupVisible(false);
    navigate('/fill', {
      state: { 
        finalAmount, 
        selectyear,  
        marketValue,
        squareFeet,
        pincode,
        buildingAge,
        floods,
        security,
        salaried,
      }
    });
  };

  return (
    <div>
      {/* <div className='continer'>
        <img className='imageramana' src={ramana} alt="not found" />
        <a href="">
          <img className="imagecontact" src={contact} alt="no found" />
        </a>
      </div> */}

      <div className="inlineboxinget">
        <div className="widthin">
          <div className="boxall">
            <h3><center>Secure your home rightfully!</center></h3>
            <div className="width">
              You have the right to buy home insurance from RamanaSoft<br />
              Banks accept all online bought policies<br />
              Instant policy with zero documentation<br />
              Buy without unwanted addons!<br />
              Standard terms & conditions apply.
            </div>
          </div>
          <br /><br />

          <div className="boxall">
            <div className="width">
              <h3><center>Entire Housing Society</center></h3>
              Secure your entire housing society against
              <li>Fire</li>
              <li>Theft</li>
              <li>Natural disasters</li>
            </div>
          </div>
          <br /><br />

          <div className="boxall">
            <div className="width">
              <h3><center>Talk to Expert</center></h3>
              Our agent can help you to buy the best home insurance!<br />
              (1800-143-123)
            </div>
          </div>
        </div>
      </div>

      <div className="inlineboxinget">
        <div className="widthin">
          <div className="boxright">
            <form onSubmit={(e) => e.preventDefault()}>
              <span>
                <img onClick={handleBack} className="arrow" src={arrow} alt="back" />
                <center>Select years
                  <select
                    name="selectyear"
                    value={selectyear}
                    onChange={handleChange}
                    required>
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    <option value="4">4 years</option>
                    <option value="5">5 years</option>
                  </select>
                  <span className="width">All premiums are inclusive of GST</span>
                </center>
              </span>
              <br /><br />

              <div>
                <span className="color1">
                  <span className="width">RamanaSecure Living</span>&nbsp; &nbsp; &nbsp; &nbsp;
                  <span className="width">Policy Term</span>&nbsp; &nbsp;
                  <span>
                    {recalculateAmount()}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <button className="animated" onClick={handleCalculateClick}>buy</button>
                  </span>
                </span>
              </div><br />

              <div>
                <span className="width">
                  Market Value: <strong>{marketValue}</strong>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span className="width">
                  Age of Building: <strong>{buildingAge}</strong>
                </span>
                <span>
                  Square Feet: <strong>{squareFeet}</strong>
                </span>
              </div><br />
            </form>
          </div>
        </div>
      </div>

      {/* Pass the necessary props to the Popup component */}
      {isPopupVisible && (
        <Popup 
          selectyear={selectyear}
          finalAmount={finalAmount}
          setPopupVisible={setPopupVisible}
          closePopupAndNavigate={closePopupAndNavigate} 
        />
      )}

      <center>Ramanasoft &#x40; 2024</center>
    </div>
  );
}

export default Getquotes;
