import React, { useEffect, useState } from 'react';
import Customer from '../ServiceComponent/Customer';
import DataTable from 'react-data-table-component'; // Import the DataTable component
import { useNavigate } from 'react-router-dom';
import { TextField,Typography } from '@mui/material';


function Adminpay() {
  const [array, setArray] = useState([]);

  const [filterText, setFilterText] = useState('');
  const navigate = useNavigate();



  useEffect(() => {
    Customer.getPaymentData()
      .then((res) => {
        setArray(res.data); // Set the array state with the data fetched
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error fetching payment data:', error);
      });
  }, []);







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
        // color: '#24a0ed', 
        color: 'white',
        fontWeight: 'bold',
      },
    },


    rows: {
      style: {
        // border:'2px solid black',
        fontSize: '13px',
        backgroundColor: '',
      },
    },

    cells: {
      style: {
        color: '',
      },
    },

    pagination: {
      style: {
        backgroundColor: '',
        color: 'black',
        fontSize: '13px',
        fontWeight: 'bold',
      },


      pageButtonsStyle: {
        color: 'black',          // Set color of page numbers and arrows
        fill: 'black',           // Ensures arrow icons are also white
        '&:hover': {
          color: '#ccc',         // Optional: lighter color on hover
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional hover effect
        },
      },

    },
  };



  const columns = [
    {
      name: 'Sl.No',
      selector: (row) => row.id,
      sortable: true,
      width: '101px',
    },
   
    {
      name: 'CustomerId',
      selector: (row) => row.customerId,
      sortable: true,
      width: '200px',
    },
    {
      name: 'PaymentId',
      selector: (row) => row.paymentId,
      sortable: true,
      width: '250px',
    },
    {
      name: 'StartingDate',
      selector: (row) => row.startingDate,
      sortable: true,
      width: '151px',
    },
    {
      name: 'ExpiryDate',
      selector: (row) => row.expiryDate,
      sortable: true,
      width: '151px',
    },
    {
      name: 'Premium',
      selector: (row) => "₹ "+row.premium+" /-",
      sortable: true,
      width: '120px',
    },
    {
      name: 'Year',
      selector: (row) => row.year,
      sortable: true,
      width: '101px',
    },
    {
      name: 'PolicyId',
      selector: (row) =>"RS404PI"+row.id,
      sortable: true,
      width: '151px',
    },

  ];




   const filteredFiles = array.filter((file) => {
    const idString = file.id ? String(file.id).toLowerCase() : '';
    const zipFileNameString = file.customerId? String(file.customerId).toLowerCase() : '';
    const paymentIdText = file.paymentId? String(file.paymentId).toLowerCase() : '';
    return idString.includes(filterText.toLowerCase()) || zipFileNameString.includes(filterText.toLowerCase()) || paymentIdText.includes(filterText.toLowerCase());
  });




  return (
    <div className='container'>
  
      <div className='' style={{ width: '83%', height: '900px', padding: '', marginLeft: '100px' }}>

        <DataTable
          columns={columns}
          data={filteredFiles}
          customStyles={customStyles}
          pagination
          highlightOnHover
          subHeader
          className='react-data-table rounded'
          subHeaderComponent={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" style={{ marginRight: '480px', color: 'green' }}>
              Payment Management System
              </Typography>
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
  );
}

export default Adminpay;
