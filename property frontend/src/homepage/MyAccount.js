import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomerGet from '../ServiceComponent/CustomerGet';
import contact from '../images/contact.png';
import ramana from '../images/ramanasoft.png';
import { jsPDF } from 'jspdf'; // Import jsPDF

export function MyAccount() {
  const location = useLocation();
  const { customerNumber } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [customersdata, setcustomersdata] = useState(null);
  const [payment, setpayment] = useState([]); // Already initialized as an empty array
  const [Address, setAddress] = useState(null);
  const [structure, setstructure] = useState(null);

  useEffect(() => {
    if (customerNumber) {
      setLoading(true);
      CustomerGet.getcustomerdata(customerNumber)
        .then((response) => {
          const setcustomersdataall = response.data;
          setcustomersdata(setcustomersdataall);
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
      const customerno = customersdata.customerId;
      setLoading(true);
      CustomerGet.getpaymentdata(customerno)
        .then((response) => {
          const paymentdata = response.data;
          setpayment(paymentdata);
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
          const setstructuredata = response.data;
          setstructure(setstructuredata);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [customersdata]);

  const generatePaymentReceipt = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB');

    let endDate = new Date(today);
    endDate.setFullYear(endDate.getFullYear() + 1);
    
    const marginLeft = 20;
    let marginTop = 20; // Dynamic marginTop for content spacing
    
    // Title Section
    doc.setFontSize(18);
    doc.setFont('times', 'bold');
    doc.text("                                     Payment Receipt", marginLeft, marginTop);
    marginTop += 10; // Increase Y position dynamically
    
    // Date Section
    doc.setFontSize(12);
    doc.setFont('times', 'normal');
    doc.text(`Date: ${formattedDate}`, marginLeft, marginTop);
    marginTop += 10;

    doc.setFontSize(12);
    doc.setFont('times', 'italic');
    doc.text("To", marginLeft, marginTop);
    marginTop += 10;
    
    doc.text(`Dear ${customersdata.name}`, marginLeft, marginTop);
    marginTop += 10;
    
    doc.text(`Mobile No: ${customersdata.mobileNo}`, marginLeft, marginTop);
    marginTop += 10;

    doc.text(`City: ${Address.city}`, marginLeft, marginTop);
    marginTop += 10;

    doc.text("Subject: Payment Receipt for Property Insurance", marginLeft, marginTop);
    marginTop += 10;

    doc.text(`Dear ${customersdata.name},`, marginLeft, marginTop);
    marginTop += 10;

    doc.text("We are pleased to confirm the payment of your property insurance.", marginLeft, marginTop);
    marginTop += 10;

    doc.text("Below are the details of the transaction and the insurance coverage you have chosen:", marginLeft, marginTop);
    marginTop += 10;

    doc.text(`Property Insurance Market Value: ${structure.marketValue}`, marginLeft, marginTop);
    marginTop += 10;

    doc.text(`Square Feet: ${structure.squareFeet}`, marginLeft, marginTop);
    marginTop += 10;

    doc.text(`Insurance Amount: ${payment.premium}`, marginLeft, marginTop);
    marginTop += 10;

    doc.text(`Payment ID: ${payment.paymentId}`, marginLeft, marginTop);
    marginTop += 10;

    doc.text("Coverage: Full Property Coverage", marginLeft, marginTop);
    marginTop += 10;

    doc.text("Insurance Type: Comprehensive Home Insurance", marginLeft, marginTop);
    marginTop += 10;

    doc.text("Thank you for choosing our services. If you have any questions,", marginLeft, marginTop);
    marginTop += 10;

    doc.setFontSize(9);
    doc.text("This is an automated receipt. Please do not reply.", marginLeft, marginTop + 100);

    // Open PDF in a new window
    const pdfDataUri = doc.output('datauristring');
    window.open(pdfDataUri, '_blank');
  };

  return (
    <div style={styles.container}>
      

      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>Customer Details</h1>
      </div>
      
      <center>{loading && <span style={styles.loader}>Loading...</span>}</center>
      {error && <div style={styles.error}>Error: {error}</div>}
      
      {customersdata && (
        <div style={styles.section}>
          <h3 style={styles.subheading}>Customer</h3>
          <p><span style={styles.label}>Customer ID : </span>{customersdata.customerId}</p>
          <p><span style={styles.label}>Name : </span>{customersdata.name}</p>
          <p><span style={styles.label}>Mobile No : </span>{customersdata.mobileNo}</p>
          <p><span style={styles.label}>Email : </span>{customersdata.email}</p>
        </div>
      )}

      {structure && (
        <div style={styles.section}>
          <h3 style={styles.subheading}>Structure Data</h3>
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

      <button onClick={generatePaymentReceipt} style={styles.button} aria-label="Generate Payment Receipt">
        Generate Payment Receipt PDF
      </button>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  headingContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ddd',
    width: '90%',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subheading: {
    fontSize: '22px',
    color: '#333',
    borderBottom: '2px solid #4CAF50',
    paddingBottom: '5px',
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
  },
  subsection: {
    backgroundColor: '#f1f1f1',
    padding: '15px',
    marginTop: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  loader: {
    fontSize: '30px',
    color: '#333',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default MyAccount;
