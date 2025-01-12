import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'; // Import the DataTable component
import { useNavigate } from 'react-router-dom';
import { TextField, Typography } from '@mui/material';
import CustomerGetall from '../ServiceComponent/Customergetall';
import contact from '../images/contact.png';
import ramana from '../images/ramanasoft.png';

function Adminpage() {
  const [array, setArray] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate();
  const [customerNumber, setCustomerNumber] = useState('');

  const handleChange = (event) => {
    setCustomerNumber(event.target.value);
  };

  useEffect(() => {
    CustomerGetall.getCustomerAll()
      .then((res) => {
        setArray(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching payment data');
        setLoading(false); // Set loading to false in case of error
        console.error('Error fetching customer data:', error);
      });
  }, []);

  const basedonmobilenoserchdata = (event) => {
    event.preventDefault(); // Prevent form from submitting
    if (customerNumber) {
      navigate('/Adminpagemobileno', { state: { customerNumber } });
    } else {
      alert('Please enter a valid customer number.');
    }
  };

  const filteredFiles = array.filter((file) => {
    const idString = file.id ? String(file.id).toLowerCase() : '';
    const zipFileNameString = file.customerId ? String(file.customerId).toLowerCase() : '';
    const mobileNo = file.mobileNo ? String(file.mobileNo).toLowerCase() : '';
    return (
      idString.includes(filterText.toLowerCase()) ||
      zipFileNameString.includes(filterText.toLowerCase()) ||
      mobileNo.includes(filterText.toLowerCase())
    );
  });

  // Define columns and custom styles
  const columns = [
    {
      name: 'Sl.No',
      selector: (row) => row.id,
      sortable: true,
      width: '50px',
    },
    {
      name: 'CustomerId',
      selector: (row) => row.customerId,
      sortable: true,
      width: '250px',
    },
    {
      name: 'PaymentId',
      selector: (row) => row.paymentId,
      sortable: true,
      width: '170px',
    },
    {
      name: 'person',
      selector: (row) => row.name,
      sortable: true,
      width: '190px',
    },
    {
      name: 'email',
      selector: (row) => row.email,
      sortable: true,
      width: '250px',
    },
    {
      name: 'mobileNo',
      selector: (row) => row.mobileNo,
      sortable: true,
      width: '170px',
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#24a0ed',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    },
    headCells: {
      style: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        fontSize: '13px',
      },
    },
    cells: {
      style: {
        color: '',
      },
    },
    pagination: {
      style: {
        color: 'black',
        fontSize: '13px',
        fontWeight: 'bold',
      },
      pageButtonsStyle: {
        color: 'black',
        fill: 'black',
        '&:hover': {
          color: '#ccc',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  if (loading) return<center> <div class="loader"></div></center>; // Show loading message
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div>
      <center> <h1>Customer Details</h1></center>
      <form className="form-container" onSubmit={basedonmobilenoserchdata}>
      <div className="container">
        <div style={{ width: '100%', height: '400px', margin: '0px 150px 0px 0px' }}>
          <DataTable
            columns={columns}
            data={filteredFiles}
            customStyles={customStyles}
            pagination
            highlightOnHover
            subHeader
            className="react-data-table rounded"
            subHeaderComponent={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" style={{  color: 'green' }}>
                  
                </Typography>
                <input
    className="input-number"
    placeholder="Based on mobile no search "
    type="number"
    id="customerNumber"
    name="customerNumber"
    value={customerNumber}
    onChange={handleChange}
  />
      
             {customerNumber && (
                 <div>
              <button type="submit">Search</button>
            
                    </div>
                        )}
                <TextField
                  variant="outlined"
                  placeholder="Search files"
                  onChange={(e) => setFilterText(e.target.value)}
                  style={{ marginBottom: '10px', width: '300px' }}
                />
              </div>
            }
          />
           
        </div>
      </div>
      </form>
    </div>
  );
}

export default Adminpage;
