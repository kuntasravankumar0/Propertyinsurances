import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import otpfunction from '../ServiceComponent/Otpfunction';
import ramana from '../images/ramanasoft.png';
import property from '../images/property.png';
import vehicle from '../images/vechile.png';
import health from '../images/health.png';
import information from '../images/information.png';
import family from '../images/family.png';
import { regexMobileNo } from '../Regular Expression';

function Home() {
    const navigate = useNavigate();


    const tohelp=()=>
    {
        navigate('/help');
    }
    const Adminpage=()=>
    {
        navigate('/Adminpage')
    }


    const [time, setTime] = useState(new Date());

    // Update the time every second
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);
  
    // Calculate the angles for the clock hands
    const getRotationDegrees = (unit, maxUnit) => {
      return (unit / maxUnit) * 360;
    };
  
    // Get the current time values
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  
    const hourDeg = getRotationDegrees(hours, 12) + (minutes / 60) * 30; // Hour hand with minute influence
    const minuteDeg = getRotationDegrees(minutes, 60);
    const secondDeg = getRotationDegrees(seconds, 60);
   
  






    const [customerNumber, setCustomerNumber] = useState('');
    const [Otp, setOtp] = useState(null);
    const [otpInput, setOtpInput] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [otpSent, setOtpSent] = useState(false);  

    const handleCustomerNumberChange = (event) => {
        setCustomerNumber(event.target.value);
    };

    const handleOtpInputChange = (event) => {
        setOtpInput(event.target.value);
    };

    const sendOtp = (event) => {
        event.preventDefault();
        if (customerNumber) {
            const randomOtp = Math.floor(10000 + Math.random() * 90000);
            setOtp(randomOtp);  
            setOtpSent(true);    
            console.log(`Generated OTP: ${randomOtp}`);
            otpfunction.getOtp(customerNumber, randomOtp)
                .then(response => console.log(response))
                .catch(error => console.error('Error:', error));
        }
    };

    const handleOtpVerification = (event) => {
        event.preventDefault();
        if (otpInput === String(Otp)) {
            const mobilenoofcustomer = { customerNumber,};
            console.log("OTP Verified Successfully");
            navigate('/customerlogin', { state: mobilenoofcustomer });
        } else {
            console.log("Invalid OTP");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (customerNumber) {
            setSubmitted(true);
        } else {
            setSubmitted(false);
        }
    };

    return (
        <div >
           

                    
                
   
                  
                  <div className="clock-container">
      <div className="clock">
        <div className="hand hour-hand" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
        <div className="hand minute-hand" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
        <div className="hand second-hand" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
      </div>
    </div>




    <div className='inlinehomepage'>
                <div className='text-section'>
                    <p className='lineinadmin'><u>Choose</u> Confidence: Choose Ramanasoft Insurance.</p><p  className='lineinadmin' > <button  className='button123'  onClick={Adminpage}>adminpage</button></p>
                    <p>Life is unpredictable,</p>
                  <span>  <p>Insurance makes it manageable.</p></span>

                    <img className="family-image" src={family} alt="Family" />
                </div>
                <div className='boxhomepage'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1>Customer Login</h1>
                            Number:
                            <input
                                type='number'
                                value={customerNumber}
                                onChange={handleCustomerNumberChange}
                                required
                                placeholder='Enter your number'
                            />
                            <center>
                                <button onClick={sendOtp} type="button">Send OTP</button>
                            </center>

                            {otpSent && (
                                <div>
                                    <p>OTP Sent: {Otp}</p>
                                    <input
                                        type='text'
                                        value={otpInput}
                                        onChange={handleOtpInputChange}
                                        required
                                        placeholder='Enter OTP'
                                    />
                                    <center>
                                        <button onClick={handleOtpVerification} type="button">Verify OTP</button>
                                    </center>
                                </div>
                            )}
                        </div>
                    </form>
                    {submitted && customerNumber && (
                        <p className="success-message">Form submitted successfully!</p>
                    )}
                    {!customerNumber && submitted && (
                        <p className="error-message">Please enter a valid customer number.</p>
                    )}
                </div>
            </div>

            <p className="intro-text">Ramanasoft Insurance: Where Protection Extends Across <u>Multiple Domains</u></p>
            <div className="image-links">
                <div className="image-item" onClick={() => navigate('/property')}>
                    <img src={property} alt="Property" />
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

            <div className='inlinehomepage'>
                <div className='text-section'>
                    <h3>Have a Question?</h3>
                    <h3>Here <u onClick={tohelp}>to Help</u></h3>
                    <p>Get quick assistance from Ramanasoft Insurance via phone or email.</p>
                </div>
                <div>
                    <img className="information-image" src={information} alt="Information" />
                </div>
            </div>

            <div className="about-text">
                <p>RamanaSoft Insurance Company is a trusted name in insurance, known for its tailored solutions and customer-centric approach.</p>
                <p>With a focus on technology and personalized service, RamanaSoft offers a range of insurance products for individuals and businesses.</p>
                <p>Committed to excellence and social responsibility, RamanaSoft is a reliable partner for protecting what matters most.</p>
            </div>

            <center>
                <img className='ramanasoftimage' src={ramana} alt="RamanaSoft Logo" />
            </center>
            <footer className="footer">
                <p>Ramanasoft &#x40; 2024</p>
            </footer>
        </div>
    );
}

export default Home;
