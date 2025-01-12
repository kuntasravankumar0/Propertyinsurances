import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomerGet from '../ServiceComponent/CustomerGet';
import { jsPDF } from 'jspdf'; // Import jsPDF

export function CustomerPropertyEdit() {
  const location = useLocation();
  const { customerNumber } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [customersdata, setcustomersdata] = useState(null);
  const [payment, setpayment] = useState([]); // Already initialized as an empty array
  const [Address, setAddress] = useState(null);
  const [structure, setstructure] = useState(null);

  // For toggling input fields
  const [isEditing, setIsEditing] = useState(false); 

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
    if (customersdata?.customerId) {
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
    if (customersdata?.customerId) {
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
    if (customersdata?.customerId) {
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

  // Initialize address inputs based on fetched Address data
  const [addressInputs, setAddressInputs] = useState({
    street: Address?.street || '',
    city: Address?.city || '',
    state: Address?.state || '',
    street2: Address?.street2 || '',
    city2: Address?.city2 || '',
    state2: Address?.state2 || '',
    houseno: Address?.houseno || '' // Fixed missing comma here
  });

  useEffect(() => {
    if (Address) {
      setAddressInputs({
        street: Address.street || '',
        city: Address.city || '',
        state: Address.state || '',
        street2: Address.street2 || '',
        city2: Address.city2 || '',
        state2: Address.state2 || '',
        houseno: Address?.houseno || ''  // Fixed missing comma here
      });
    }
  }, [Address]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const datafetch = addressInputs;

  const update = () => {
    if (!customersdata?.customerId) {
      setError("Customer data is missing!");
      return;
    }

    if (Object.keys(datafetch).length === 0) {
      setError("Address data is missing!");
      return;
    }

    setLoading(true);
    CustomerGet.addressupdate(customersdata.customerId, datafetch)
      .then((response) => {
        setLoading(false);
        alert("Address updated successfully!");
        setIsEditing(false); // After updating, toggle back to non-editable mode
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
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

      {payment.length > 0 ? (
        payment.map((item, index) => (
          <div key={index} style={styles.section}>
            <h3 style={styles.subheading}>Payment Data</h3>
            <p><span style={styles.label}>Number of years: </span>{item.year}</p>
            <p><span style={styles.label}>Amount: </span>{item.premium}</p>
            <p><span style={styles.label}>Payment ID: </span>{item.paymentId}</p>
            <p><span style={styles.label}>Customer ID: </span>{item.customerId}</p>
            <p><span style={styles.label}>Building Age: </span>{item.buildingAge}</p>
            <p><span style={styles.label}>Pincode : </span>{item.pincode}</p>
            <p><span style={styles.label}>Square Feet : </span>{item.squareFeet}</p>
            <p><span style={styles.label}>Market Value : </span>{item.marketValue}</p>
          </div>
        ))
      ) : (
        <p>No payment data available.</p>
      )}

      {Address && (
        <div style={styles.section}>
          <h3 style={styles.subheading}>Address Data</h3>
          {isEditing ? (
            <div>
              <div style={styles.inputGroup}>
                <label>House No:</label>
                <input
                  type="text"
                  name="houseno"
                  value={addressInputs.houseno}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label>Street:</label>
                <input
                  type="text"
                  name="street"
                  value={addressInputs.street}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  value={addressInputs.city}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label>State:</label>
                <input
                  type="text"
                  name="state"
                  value={addressInputs.state}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label>Street2:</label>
                <input
                  type="text"
                  name="street2"
                  value={addressInputs.street2}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label>City2:</label>
                <input
                  type="text"
                  name="city2"
                  value={addressInputs.city2}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label>State2:</label>
                <input
                  type="text"
                  name="state2"
                  value={addressInputs.state2}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
            </div>
          ) : (
            <div>
              <p><span style={styles.label}>Pan Card: </span>{Address.panCard}</p>
              <p><span style={styles.label}>House No: </span>{Address.houseno}</p>
              <p><span style={styles.label}>Street: </span>{Address.street}</p>
              <p><span style={styles.label}>City: </span>{Address.city}</p>
              <p><span style={styles.label}>State: </span>{Address.state}</p>
              <p><span style={styles.label}>Street2: </span>{Address.street2}</p>
              <p><span style={styles.label}>City2: </span>{Address.city2}</p>
              <p><span style={styles.label}>State2: </span>{Address.state2}</p>
            </div>
          )}
        </div>
      )}

      <button onClick={() => setIsEditing(!isEditing)} style={styles.button}>
        {isEditing ? 'Cancel' : 'Update Address'}
      </button>

      {isEditing && (
        <button onClick={update} style={styles.button}>
          Save Changes
        </button>
      )}
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
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
};

export default CustomerPropertyEdit;
