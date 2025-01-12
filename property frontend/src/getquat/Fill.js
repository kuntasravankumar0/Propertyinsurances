import './get.css';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { regexPanCard, regexCity, regexState, regexStreet } from '../Regular Expression';
import CustomerGet from '../ServiceComponent/CustomerGet';

function Fill() {
  const navigate = useNavigate();
  const location = useLocation();

  const [Address, setAddress] = useState(null);
  const { customerId, marketValue, squareFeet, pincode, buildingAge, floods, security, salaried, mobile, finalAmount, selectyear, person, email } = location.state || {};

  console.log(customerId, marketValue, squareFeet, pincode, buildingAge, floods, security, salaried, mobile, finalAmount, selectyear, person, email);

  const storedFormValues = JSON.parse(sessionStorage.getItem("formValues")) || {};
  const [formValues, setFormValues] = useState({
    houseno: storedFormValues.houseno || (Address ? Address.houseno : ''),
    city: storedFormValues.city || (Address ? Address.city : ''),
    street: storedFormValues.street || (Address ? Address.street : ''),
    panCard: storedFormValues.panCard || '',
    isCurrentAddress: storedFormValues.isCurrentAddress || '',
    state: storedFormValues.state || (Address ? Address.state : ''),
    houseno2: storedFormValues.houseno2 || '',
    city2: storedFormValues.city2 || '',
    street2: storedFormValues.street2 || '',
    isCurrentAddress2: storedFormValues.isCurrentAddress2 || '',
    state2: storedFormValues.state2 || '',
  });

  const [errors, setErrors] = useState({});

  const handleEdit = (e) => {
    e.preventDefault();
    navigate('/Property');
  };

  const pay = (e) => {
    e.preventDefault();

    const navidata = {
      customerId,
      selectyear,
      finalAmount,
      marketValue,
      squareFeet,
      pincode,
      buildingAge,
      floods,
      security,
      salaried,
      email,
      mobile,
      person,
      panCard: formValues.panCard,
      houseno: formValues.houseno,
      houseno2: formValues.houseno2,
      street: formValues.street,
      street2: formValues.street2,
      city: formValues.city,
      city2: formValues.city2,
      state: formValues.state,
      state2: formValues.state2,
    };

    navigate('/pay', { state: navidata });
  };

  const validateField = (name, value) => {
    switch (name) {
      case "houseno":
      case "houseno2":
        return value ? "" : "House number is required.";
      case "city":
      case "city2":
        return regexCity.test(value) ? "" : "Please enter a valid city name.";
      case "street":
      case "street2":
        return regexStreet.test(value) ? "" : "Street is required.";
      case "panCard":
        return regexPanCard.test(value) ? "" : "Please enter a valid PAN Card number.";
      case "state":
      case "state2":
        return regexState.test(value) ? "" : "Please enter a valid state name.";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => {
      const updatedValues = { ...prevValues, [name]: value };
      sessionStorage.setItem("formValues", JSON.stringify(updatedValues));
      return updatedValues;
    });

    const errorMessage = validateField(name, value);
    setErrors(prevErrors => ({ ...prevErrors, [name]: errorMessage }));
  };

  useEffect(() => {
    if (customerId) {
      CustomerGet.GetdataAdress(customerId)
        .then((response) => {
          setAddress(response.data);
          setFormValues(prevValues => ({
            ...prevValues,
            houseno: response.data.houseno || prevValues.houseno,
            city: response.data.city || prevValues.city,
            street: response.data.street || prevValues.street,
            state: response.data.state || prevValues.state,
            panCard: response.data.panCard || prevValues.panCard,
          }));
        })
        .catch((err) => {
          console.error("Error fetching address", err);
        });
    }
  }, [customerId]);

  return (
    <div>
      <div>
        <form>
          <div className="inline">
            {/* Property Details */}
            <h1>Property Details</h1>
            <p>Current Market Value : {marketValue}</p>
            <p>Carpet Area (sqft) : {squareFeet}</p>
            <p>Age of Building : {buildingAge}</p>
            <p>Security : {security}</p>
            <p>Floods : {floods}</p>
            <p>Salaried : {salaried}</p>
            <p>Customer ID : {customerId || "N/A"}</p>

            {/* Premium Details */}
            <h1>Premium Details</h1>
            <p>Premium Amount: {finalAmount}</p>
            <p>Selected Year: {selectyear} years</p>
            <button onClick={handleEdit}>Edit</button>
          </div>

          <div className="inline">
            <h1>Customer Details</h1>
            <div>
              <select required className="input" name="title">
                <option value="">Salutation</option>
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Ms">Ms.</option>
              </select>
              &nbsp;
              <span className="input">{person || "N/A"}</span>
              <br /><br />
              <input
                className="input"
                name="panCard"
                required
                placeholder="PAN CARD*"
                type="text"
                value={formValues.panCard}
                onChange={handleInputChange}
              /> &nbsp;
              <input className="input" required type="date" />
              <br /><br />
              <span className="input">{email || "N/A"}</span> &nbsp;
              <span className="input">{mobile || "N/A"}</span>
            </div>

            {/* Property Address Details */}
            <div>
              <center>
                <h1>Property Address Details</h1>
              </center>
              <h3>Address</h3>
              <input
                name="houseno"
                className="input"
                placeholder="House Number"
                required
                type="text"
                value={formValues.houseno}
                onChange={handleInputChange}
              />
              <input
                name="street"
                className="input"
                placeholder="Street"
                required
                type="text"
                value={formValues.street}
                onChange={handleInputChange}
              />
              <input
                name="city"
                className="input"
                placeholder="City"
                required
                type="text"
                value={formValues.city}
                onChange={handleInputChange}
              /><br />
              <span className="error">{errors.houseno}</span>
              <span className="error">{errors.street}</span>
              <span className="error">{errors.city}</span>
              <br />
              <input
                name="state"
                className="input"
                placeholder="State"
                required
                type="text"
                value={formValues.state}
                onChange={handleInputChange}
              />
              <span className="input">{pincode}</span><br />
              <span className="error">{errors.state}</span> <br /><br />

              <div>
                Is this your Current Address?
                <select
                  required
                  name="isCurrentAddress"
                  value={formValues.isCurrentAddress}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Show these fields only if 'No' is selected */}
              {formValues.isCurrentAddress === "no" && (
                <div>
                  <h3>Enter Your Current Address:</h3>
                  <input
                    name="houseno2"
                    className="input"
                    placeholder="House Number"
                    required
                    type="text"
                    value={formValues.houseno2}
                    onChange={handleInputChange}
                  />
                  <input
                    name="street2"
                    className="input"
                    placeholder="Street"
                    required
                    type="text"
                    value={formValues.street2}
                    onChange={handleInputChange}
                  />
                  <input
                    name="city2"
                    className="input"
                    placeholder="City"
                    required
                    type="text"
                    value={formValues.city2}
                    onChange={handleInputChange}
                  /><br />
                  <span className="error">{errors.houseno2}</span>
                  <span className="error">{errors.street2}</span>
                  <span className="error">{errors.city2}</span>
                  <br />
                  <input
                    name="state2"
                    className="input"
                    placeholder="State"
                    required
                    type="text"
                    value={formValues.state2}
                    onChange={handleInputChange}
                  />
                  <br />
                  <span className="error">{errors.state2}</span>
                </div>
              )}
            </div>
          </div>

          <center>
            <button onClick={pay} type="submit">Payment</button>
          </center>
        </form>
        <center>Ramanasoft &#x40; 2024</center>
      </div>
    </div>
  );
}

export default Fill;
