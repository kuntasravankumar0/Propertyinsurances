import { useLocation, useNavigate } from 'react-router-dom'; 
import { jsPDF } from "jspdf";
import React, { useState, useEffect } from "react";
import Customer from '../ServiceComponent/Customer';
import contact from '../images/contact.png';
import ramana from '../images/ramanasoft.png';



function Payment() {
    const [paymentId, setPaymentId] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();  
    const { customerId, finalAmount, selectyear, marketValue, squareFeet, pincode, buildingAge, floods, security, salaried, email, mobile, person, panCard, houseno, houseno2, street, street2, city, city2, state, state2 } = location.state || {};

    // Consolidate all data into one object to send in requests
    const allNames = {
              customerId,
              premium: finalAmount,
              year: selectyear, 
              paymentId, marketValue, squareFeet, pincode, buildingAge, floods, security, salaried, email,
              mobileno: mobile,
              person,
              security,
             
    };
    const handleClick = () => {
        const var4 = 'https://api.razorpay.com/v1/payments/qr_codes/qr_FuZIYx6rMbP6gs';
        const options = {
            key: 'rzp_test_Su4WV4zdBIGTmZ',
            entity: var4,
            amount: 50000, // Amount in paise (50000 paise = 500 INR)
            name: 'Sravan Kumar Company',
            description: 'IS AN INSURANCE COMPANY',
            image: "",
            handler: function (response) {
                // Capture payment ID from response
                const paymentID = response.razorpay_payment_id;
                alert("Payment successful! Payment ID: " + paymentID);

                // Set the payment ID in state to display
                setPaymentId(paymentID);
            },
            prefill: {
                name: "Kunta Sravankumar",
                email: "kunta.sravankumar0@gmail.com",
                contact: 9390054740,
            },
            notes: {
                address: "Ameerpet, Hyderabad",
            },
            theme: {
                color: '#20c997',
            },
        };

        var pay = new window.Razorpay(options);
        pay.open();
    }

    const paymentdataall = {
        marketValue,
         squareFeet,
          pincode,
           buildingAge,
        customerId,
        premium: finalAmount,
        year: selectyear, 
        paymentId, 
        mobileNo: mobile,
        person, 
        }; 


    useEffect(() => {
        if (paymentId) {
            Customer.postpayment(paymentdataall)
                .then((res) => {
                    console.log('Response from server (postpayment):', res.data);
                })
                .catch((error) => {
                    console.error('Error posting payment:', error);
                });

               

                const customernames = {
                    paymentId,
                      customerId,
                      email,
                      mobileNo: mobile, 
                      name:person,
                    };
                    Customer.createCustomer(customernames)
                      .then(response => {
                        console.log('Customer created:', response.data);
                      })
                      .catch(error => {
                        console.error('Error creating customer:', error);
                      });





            Customer.Structurpost(allNames)
                .then(response => {
                    console.log('Structurepost created:', response.data);
                })
                .catch(error => {
                    console.error('Error Structurepost:', error);
                });





                //over

                const address={ panCard,customerId, houseno, houseno2, street, street2, city, city2, state, state2}
            Customer.postAddress(address)
                .then((res) => {
                    console.log('Response from server (postAddress):', res.data);
                })
                .catch((error) => {
                    console.error('Error posting address:', error);
                });
        }
    }, [paymentId]);  

    // Generate PDF Receipt
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US');
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(10);
        doc.text(`Date: ${formattedDate}`, 20, 30);
        doc.setFontSize(10);
        doc.text("Payment Receipt", 20, 20);
        doc.text(`Dear [Ramanasoft],`, 20, 40);
        doc.text(`We are writing to acknowledge the payment you made. Below are the details of your transaction: ${paymentId}`, 20, 50);
        doc.text(`Customer ID: ${customerId}`, 20, 60);
        doc.text(`Number of Years: ${selectyear}`, 20, 70);
        doc.text(`Final Amount: ${finalAmount}`, 20, 80);
        doc.text("Your payment has been successfully processed,", 20, 90);
        doc.text("and the corresponding services or subscriptions will be valid for the stated duration.", 20, 100);
        doc.text("We appreciate your business and look forward to continuing to serve you.", 20, 110);
        doc.text("If you have any questions or require further assistance, feel free to contact us.", 20, 120);
        doc.text("Thank you for choosing our services.", 20, 130);

        if (paymentId) {
            doc.text(`Payment ID: ${paymentId}`, 20, 190);
        }
        const pdfOutput = doc.output('datauristring');
        window.open(pdfOutput, '_blank');
    };

    // Navigate to homepage after successful payment
    const navigateToHomepage = () => {
        navigate('/');  
    };

    return (
        <div>
             
            <div className="content">
                <div className="box-container">
                    <div className="box payment-details">
                        <h3>Payment Details</h3>
                        <p><strong>Final Amount:</strong> {finalAmount}</p>
                        <p><strong>Number of Years:</strong> {selectyear}</p>
                        <p><strong>Customer ID:</strong> {customerId}</p>
                        <p><strong>Your payment ID is: </strong>{paymentId}</p>
                    </div>
{/* 
                    {squareFeet}<br/> {pincode}<br/>{buildingAge}<br/>{floods}<br/>{security}<br/>  {salaried}<br/> {email}<br/>{mobile}<br/>{person} <br/>{customerId}<br/>   {panCard}<br/>     {houseno}<br/>{houseno2}<br/>     {street}<br/>{street2}<br/>     {city}<br/> {city2}<br/>    {state}<br/    {state2} */}

                    <div className="box payment-action">
                        <center>
                            <h1>Make Payment</h1>
                            <button onClick={handleClick} className="pay-button">Pay Now</button>

                            {paymentId && (
                                <div className="payment-success">
                                    <h2>Payment Successful!</h2>
                                    <button onClick={navigateToHomepage} className="home-button">Go to Homepage</button>
                                </div>
                            )}
                        </center>
                    </div>
                </div>
            </div>

            <center>
                <button onClick={generatePDF} className="download-pdf-button">Open Payment Receipt (PDF)</button>
            </center>
        </div>
    );
}

export default Payment;
