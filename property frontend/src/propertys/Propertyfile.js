import React, { useState,useEffect } from 'react';
import './propert.css';
import { useNavigate } from 'react-router-dom';
import regular, { pincodeRegex, regexmarketValue, regexpropertyValues } from '../Regular Expression';
import home from '../images/home.jpg'
import logo from '../images/logo.png';
import contact from '../images/contact.png';
import ramana from '../images/ramanasoft.png';
import Customer from '../ServiceComponent/Customer';


function Propertyfile() {
  const navigate = useNavigate();
  const [get, setget] = useState([]);

  const [value, setValues] = useState({
    marketValue: "",
    squareFeet: "",
    pincode: "",
    buildingAge: "",
    floods: "",
    security: "",
    salaried: ""
  });

  const [error, setError] = useState({
    marketValue: "",
    squareFeet: "",
    pincode: "",
    buildingAge: "",
    floods: "",
    security: "",
    salaried: ""
  });

  // Load form data from sessionStorage when the component mounts
  useEffect(() => {
    const savedData = sessionStorage.getItem("propertyFormData");
    if (savedData) {
      setValues(JSON.parse(savedData)); // Populate the form with saved data
    }
  }, []); 

  const validateField = (name, value) => {
    let errorMessage = "";
    switch (name) {
      case "marketValue":
        if (!regexmarketValue.test(value)) {
          errorMessage = "Please enter a valid market value.";
        }
        break;
      case "squareFeet":
        if (!regexpropertyValues.test(value)) {
          errorMessage = "Please enter a valid area.";
        }
        break;
      case "pincode":
        if (!pincodeRegex.test(value)) {
          errorMessage = "Please enter a valid 6-digit pincode.";
        }
        break;
      case "salaried":
        if (value === "no") {
          errorMessage = "As per the Terms and Conditions, your Property Insurance is rejected.";
          alert(errorMessage);
        }
        break;
      case "floods":
        if (value === "yes") {
          errorMessage = "As per the Terms and Conditions, your Property Insurance is rejected.";
          alert(errorMessage);
        }
        break;
      case "buildingAge":
        if (value === "") {
          errorMessage = "Please select the age of the building.";
        }
        break;
    }
    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear the error message when user modifies input
    setError(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));

    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));

    const errorMessage = validateField(name, value);
    setError(prevErrors => ({
      ...prevErrors,
      [name]: errorMessage
    }));
  };





  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate all fields before submission
    Object.keys(value).forEach(key => {
      const errorMessage = validateField(key, value[key]);
      if (errorMessage) {
        setError(prevErrors => ({
          ...prevErrors,
          [key]: errorMessage
        }));
        isValid = false;
      }
    });

    if (isValid) {
      const dataToSend = {
        marketValue: value.marketValue,
        squareFeet: value.squareFeet,
        pincode: value.pincode,
        buildingAge: value.buildingAge,
        floods: value.floods,
        security: value.security,
        salaried: value.salaried,
        
      };
      sessionStorage.setItem("propertyFormData", JSON.stringify(value));




      navigate("/getquote", { state: dataToSend });
    }
  };



  return (



    <div>


      <h1>
        <center>PROPERTY DETAILS<img className="logo" src={logo} /></center>
      </h1>

      <br/>

      <div>
        <form onSubmit={handleSubmit}>
          {/* box1 */}
          <div className="box1">
            <h3 className="headingstylebox1">Structure And Details</h3>

            <input className="input2"
              type="text"
              name="marketValue"
              placeholder='Current market value'
              value={value.marketValue}
              onChange={handleChange}
              required
            />
            <div className="error">.{error.marketValue}</div>

            <input className="input2"
              type="text"
              name="squareFeet"
              value={value.squareFeet}
              onChange={handleChange}
              placeholder='Carpet area (sqft)'
              required
            />
            <div className="error">.{error.squareFeet}</div>

            <input className="input2"
              type="text"
              name="pincode"
              value={value.pincode}
              onChange={handleChange}
              placeholder='Pincode'
              required />
            <div className="error">.{error.pincode}</div>

            <label htmlFor="buildingAge">Age Of The Building</label>
            <select
              name="buildingAge"
              value={value.buildingAge}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="0to5years">0 to 5 years</option>
              <option value="6to10years">6 to 10 years</option>
              <option value="11to15years">11 to 15 years</option>
              <option value="16to20years">16 to 20 years</option>
            </select>
            <div className="error">{error.buildingAge}</div>
            <br />

            <label htmlFor="floods">Has Your Property Been Affected By Floods in Last 5 Years</label>
            <select
              name="floods"
              value={value.floods}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <div className="error">{error.floods}</div>
            <br />
          </div>

          <div className="box2">
            <h3 className="headingstylebox2">Security Measurement Details</h3>
            <div className="Security">
              <label htmlFor="security">24/7 Security</label>
              <select
                name="security"
                value={value.security}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              
            </div>
        <br/>
            <div className="Security">
              <label htmlFor="salaried">Salaried Person</label>
              <select
                name="salaried"
                value={value.salaried}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <div className="error">.{error.salaried}</div>
            </div>
            <br />

            <img className="home" src={home} alt="Home" />
          </div>

          <center>
            <button type="submit" className="animated-button">View Quotes</button>
          </center>
        </form>
      </div>
      <br/>
      <center>Ramanasoft &#x40; 2024</center>
    </div>
  );
}

export default Propertyfile;