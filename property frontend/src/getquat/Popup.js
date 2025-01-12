import React, { useState } from 'react';
import { regexFullName, regexEmail, regexMobileNo } from '../Regular Expression';
import { useNavigate, useLocation } from 'react-router-dom';
import otpfunction from '../ServiceComponent/Otpfunction';
import Customer from '../ServiceComponent/Customer';

function Popup({ finalAmount, setPopupVisible, closePopupAndNavigate, selectyear }) {
  const [otp, setOtp] = useState(null); 
  const [person, setPerson] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false); 
  const [otpInput, setOtpInput] = useState(''); 
  const [customerdata, setcustomerdata] = useState(''); 
  const [isOtpSectionVisible, setIsOtpSectionVisible] = useState(false); 
  const navigate = useNavigate(); 
  const location = useLocation();

  const { marketValue, squareFeet, pincode, buildingAge, floods, security, salaried } = location.state || {};

  // Generate a unique customerId
  const generateCustomerId = () => {
    const timestamp = Date.now(); 
    const shortDate = new Date().toISOString().slice(0, 10).replace(/-/g, ''); 
    return `CUST-${shortDate}-${timestamp}`;
  };

  // Validate input fields
  const validateField = (name, value) => {
    switch (name) {
      case 'person':
        return regexFullName.test(value) ? '' : 'Name is required.';
      case 'email':
        return regexEmail.test(value) ? '' : 'Enter a valid email address.';
      case 'mobile':
        return regexMobileNo.test(value) ? '' : 'Enter a valid 10-digit mobile number.';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'person':
        setPerson(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      case 'otp':
        setOtpInput(value);  
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validateField(name, value) }));
  };

  // Handle form submit (sign up)
  const handlePopupSubmit = (e) => {
    e.preventDefault();
    
    const checkdatamoboleandmail = {
      mobileNo: mobile,
      email,
    };
    
    Customer.checkdata(checkdatamoboleandmail)
      .then(response => {
        if (response.data === "Data is valid") {
          console.log("Data is valid.");
          
          const dataToSend = {
            customerId: generateCustomerId(), 
            marketValue,
            squareFeet,
            pincode,
            buildingAge,
            floods,
            security,
            salaried,
            mobile,
            finalAmount,
            selectyear,
            person,
            email,
          };  
          navigate("/fill", { state: dataToSend });
        } else {
          console.log(response.data);
          alert("Mobile or email data already present");
          alert("Proceed with mobile OTP");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const sendOtp = (event) => {
    event.preventDefault();
    if (mobile) {
      const randomOtp = Math.floor(10000 + Math.random() * 90000);
      setOtp(randomOtp); 
      setOtpSent(true);   
      console.log(`Generated OTP: ${randomOtp}`);

      otpfunction.getOtp(mobile, randomOtp)
        .then(response => console.log(response))
        .catch(error => console.error('Error:', error));
    }
  };

  const handleOtpVerification = () => {
    console.log(`Entered OTP: ${otpInput}`);
    console.log(`Generated OTP: ${otp}`);
    
 
      // Fetch customer data based on mobile
      Customer.getmobileto(mobile)
        .then(response => {
          setcustomerdata(response.data);
          
          const dataToSend = {
            customerId: response.data.customerId, 
            marketValue,
            squareFeet,
            pincode,
            buildingAge,
            floods,
            security,
            salaried,
            mobile: response.data.mobileNo,
            finalAmount,
            selectyear,
            person: response.data.name,
            email: response.data.email,
          };
          navigate("/fill", { state: dataToSend }); // Pass data to /fill page
          setPopupVisible(false); // Close the popup after successful OTP verification
        })
        .catch(error => {
          console.error('Error fetching mobile:', error);
          alert('There was an error while fetching data!');
        });
    
  };

  const handleAlreadySignedUp = () => {
    setIsOtpSectionVisible(true);  // Show OTP section
  };

  const closePopupoff = () => {
    setPopupVisible(false); // Close popup
  };

  return (
    <div>
      <div className="popup">
        <div className="popup-content">
          <h2>Enter your details</h2>

          {/* OTP Section or Sign Up Form */}
          {!isOtpSectionVisible ? (
            <form onSubmit={handlePopupSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={person}
                  name="person"
                  onChange={handleInputChange}
                  required
                />
                {errors.person && <span className="error">{errors.person}</span>}
              </div>

              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  name="email"
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div>
                <label>Mobile:</label>
                <input
                  type="tel"
                  value={mobile}
                  placeholder="Mobile"
                  name="mobile"
                  onChange={handleInputChange}
                  required
                />
                {errors.mobile && <span className="error">{errors.mobile}</span>}
              </div>
              <button type="submit">Sign Up</button>
            </form>
          ) : (
            <div>
              <form>
                <div>
                  <label>Mobile:</label>
                  <input
                    type="tel"
                    value={mobile}
                    placeholder="Mobile"
                    name="mobile"
                    onChange={handleInputChange}
                    required
                  />
                  {errors.mobile && <span className="error">{errors.mobile}</span>}
                </div>

                <div>
                  <button type="button" onClick={sendOtp}>Send OTP</button>
                </div>
                {otpSent && <p>Your OTP is: <strong>{otp}</strong></p>} {/* This can be removed in production */}
                <div>
                  <input
                    type="number"
                    placeholder="Enter OTP"
                    value={otpInput}
                    name="otp"
                    onChange={handleInputChange}
                    maxLength={5}
                    pattern="\d{5}"
                  />
                </div>
                <div>
                  <button type="button" onClick={handleOtpVerification}>Verify OTP and Login</button>
                </div>
              </form>
            </div>
          )}

          {!isOtpSectionVisible && (
            <button type="button" onClick={handleAlreadySignedUp}>Already signed up?</button>
          )}

          <br />
          <button type="button" onClick={closePopupoff}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
