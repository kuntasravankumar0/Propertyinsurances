import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomerGet from '../ServiceComponent/CustomerGet';
import contact from '../images/contact.png';
import ramana from '../images/ramanasoft.png';

export function Adminpagemobileno() {
  const location = useLocation();
  const { customerNumber } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [customersdata, setcustomersdata] = useState(null);
  const [payment, setpayment] = useState(null);
  const [Address, setAddress] = useState(null);
  const [structure, setstructure] = useState(null);

  useEffect(() => {
    if (customerNumber) {
      setLoading(true);
      CustomerGet.getcustomerdata(customerNumber)
        .then((response) => {
          setcustomersdata(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [customerNumber]);

  useEffect(() => {
    if (customersdata && customersdata.customerId) {
      setLoading(true);
      CustomerGet.getpaymentdata(customersdata.customerId)
        .then((response) => {
          setpayment(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [customersdata]);

  useEffect(() => {
    if (customersdata && customersdata.customerId) {
      setLoading(true);
      CustomerGet.GetdataAdress(customersdata.customerId)
        .then((response) => {
          setAddress(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [customersdata]);

  useEffect(() => {
    if (customersdata && customersdata.customerId) {
      setLoading(true);
      CustomerGet.getstructuredata(customersdata.customerId)
        .then((response) => {
          setstructure(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [customersdata]);

  const generatePaymentReceipt = () => {
    console.log('Generating Payment Receipt PDF...');
    // Add logic to generate a PDF (e.g., using jsPDF or another library)
  };

  return (
    <div>
     {/* <div className='continer'>
        <img className='imageramana' src={ramana} alt="not found" />
        <a href="">
          <img className="imagecontact" src={contact} alt="no found" />
        </a>
      </div> */}

      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>Customer Details</h1>
      </div>

      <center>{loading && <span style={styles.loader}></span>}</center>
      {error && <div style={styles.error}>Error: {error}</div>}

      {customersdata && (
        <div style={styles.section}>
          <h3 style={styles.subheading}>Customer</h3>
          <p><span style={styles.label}>Customer ID: </span>{customersdata.customerId}</p>
          <p><span style={styles.label}>Name: </span>{customersdata.name}</p>
          <p><span style={styles.label}>Mobile No: </span>{customersdata.mobileNo}</p>
          <p><span style={styles.label}>Email: </span>{customersdata.email}</p>
        </div>
      )}

      {structure && (
        <div style={styles.section}>
          <h3 style={styles.subheading}>Structure Data</h3>
          <p><span style={styles.label}>Market Value: </span>{structure.marketValue}</p>
          <p><span style={styles.label}>Square Feet: </span>{structure.squareFeet}</p>
          <p><span style={styles.label}>Pincode: </span>{structure.pincode}</p>
          <p><span style={styles.label}>Building Age: </span>{structure.buildingAge}</p>
          <p><span style={styles.label}>Security: </span>{structure.security}</p>
        </div>
      )}

{Array.isArray(payment) && payment.length > 0 ? (
        payment.map((item, index) => (
          <div key={index} style={styles.section}>
            <h3 style={styles.subheading}>Payment Data</h3>
            <p><span style={styles.label}>Number of years: </span>{item.year}</p>
            <p><span style={styles.label}>Amount: </span>{item.premium}</p>
            <p><span style={styles.label}>Payment ID: </span>{item.paymentId}</p>
            <p><span style={styles.label}>Customer ID: </span>{item.customerId}</p>
            <p><span style={styles.label}>buildingAge: </span>{item.buildingAge}</p>
            <p><span style={styles.label}>pincode : </span>{item.pincode}</p>
            <p><span style={styles.label}>squareFeet : </span>{item.squareFeet}</p>
            <p><span style={styles.label}>marketValue : </span>{item.marketValue}</p>
           
          </div>
        ))
      ) : (
        <p>No payment data available.</p>
      )}

      {Address && (
        <div style={styles.section}>
          <h3 style={styles.subheading}>Address Data</h3>
          <p><span style={styles.label}>Pan Card: </span>{Address.panCard}</p>
          <p><span style={styles.label}>House No: </span>{Address.houseno}</p>
          <p><span style={styles.label}>Street: </span>{Address.street}</p>
          <p><span style={styles.label}>City: </span>{Address.city}</p>
          <p><span style={styles.label}>State: </span>{Address.state}</p>
          <div style={styles.subsection}>
            <h4 style={styles.subheading}>Second Address</h4>
            <p><span style={styles.label}>Street2: </span>{Address.street2}</p>
            <p><span style={styles.label}>City2: </span>{Address.city2}</p>
            <p><span style={styles.label}>State2: </span>{Address.state2}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    color: '#333',
  },
  headingContainer: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
  },
  loader: {
    fontSize: '24px',
    color: '#666',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: '10px',
  },
  section: {
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  subheading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
  },
  subsection: {
    marginTop: '20px',
    paddingLeft: '20px',
  },
  imagecontact: {
    width: '50px',
    height: '50px',
    marginTop: '10px',
  },
  imageramana: {
    width: '200px',
    height: 'auto',
    display: 'block',
    margin: '20px auto',
  },
};
