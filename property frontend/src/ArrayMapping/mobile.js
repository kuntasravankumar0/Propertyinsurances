import React, { useState, useEffect } from 'react';
import Customer from '../ServiceComponent/Customer';  // Assuming Customer is imported from a file
import DataTable from 'react-data-table-component';
import { TextField,Typography } from '@mui/material';

function Mobile() {
  
const [array,setarray]=useState([]);
const [filterText, setFilterText] = useState('');
const[preminumDetails,setpreminumDetails]=useState([]);
  useEffect(() => {
    Customer.getCustomer()
      .then((res) => {
        setarray(res.data); // Set the array state with the data fetched
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error fetching payment data:', error);
      });




      
  Customer.getPaymentData()
  .then((res) => {
    setpreminumDetails(res.data); // Set the array state with the data fetched
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


  const count = Array.isArray(preminumDetails) 
    ? preminumDetails.filter(pd => pd.customerId === preminumDetails.customerId).length 
    : 0;
  

  const  columns = [
    
    {
      name: 'Sl.No',
      selector: (row) => row.id,
      sortable: true,
    
      width: '110px',
    },
    {
      name: 'User Name',
      selector: (row) => row.name,
      sortable: true,
      width: '200px',
    },
    {
      name: 'User Mobile No',
      selector: (row) => "+91 "+row.mobileno,
      sortable: true,
      width: '201px',
    },
    
    {
      name: 'User Email',
      selector: (row) => row.email,
      sortable: true,
      width: '271px',
    },
    {
      name: 'Customer ID',
      selector: (row) => row.customerId,
      sortable: true,
      width: '170px',
    },

    
    {
      name: 'No. Of Policies Taken',
      selector: (row) =>count,
      sortable: true,
      width: '200px',
    }
  
  ];
  

  const filteredFiles = array.filter((file) => {
    const idString = file.id ? String(file.id).toLowerCase() : '';
    const zipFileNameString = file.customerId? String(file.customerId).toLowerCase() : '';
    const paymentIdText = file.mobileno? String(file.mobileno).toLowerCase() : '';
    return idString.includes(filterText.toLowerCase()) || zipFileNameString.includes(filterText.toLowerCase()) || paymentIdText.includes(filterText.toLowerCase());
  });


  return (
    <div>
  <center>    <h1>Customer Management </h1></center>

<div className='' style={{ width: '75%', height: '900px',  marginLeft: '170px' }}>
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
              Customer Management
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Search files"
                onChange={(e) => setFilterText(e.target.value)}
                style={{ marginBottom: '10px', width: '300px' }}
              />
            
            </div>
          }
        /></div>





        

    
    </div>
  );
}

export default Mobile;
