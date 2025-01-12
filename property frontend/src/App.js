import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Propertyfile from './propertys/Propertyfile';
import Getquotes from './getquat/Getquotes';
import Fill from '../src/getquat/Fill';
import Payment from './getquat/Payment';
import Home from '../src/homepage/Homepage';
import Array from './ArrayMapping/Array';
import Help from './homepage/Help';
import Customerlogin from './homepage/Customerlogin';
import Adminpay from './ArrayMapping/AdminPayment';
import Mobile from './ArrayMapping/mobile';
import { MyAccount } from './homepage/MyAccount';
import Adminpage from './homepage/Adminpage';
import { Adminpagemobileno } from './homepage/Adminpagemobileno';
import Customerpropertyedit from './homepage/Customerpropertyedit'; // Corrected capitalization
// import ContactInfo from './homepage/ContactInfo'; // Corrected path
import Customerinfo from '../src/homepage/ContactInfo '
import Header from './homepage/Hedder';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      
      <Route path="/array" element={<Array />} />
      <Route path="/Property" element={<Propertyfile />} />
      <Route path="/getquote" element={<Getquotes />} />
      <Route path="/fill" element={<Fill />} />
      <Route path="/pay" element={<Payment />} />
      <Route path="/" element={<Home />} />
      <Route path="/customerlogin" element={<Customerlogin />} />
      <Route path="/help" element={<Help />} />
      <Route path="/AdminPay" element={<Adminpay />} />
      <Route path="/Mobile" element={<Mobile />} />
      <Route path="/myAccount" element={<MyAccount />} />
      <Route path="/info" element={<Customerinfo />} />
      <Route path="/Adminpage" element={<Adminpage />} />
      <Route path="/Adminpagemobileno" element={<Adminpagemobileno />} />
      <Route path="/customerpropertyedit" element={<Customerpropertyedit />} /> {/* Corrected capitalization */}
      
    </Routes>
    </div>
  );
}

export default App;
