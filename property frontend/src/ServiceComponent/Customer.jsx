import axios from "axios";

class Customer {




  static Structurpost(data) {
    const url1 = "http://localhost:9090/structure/post"; // API endpoint
    return axios.post(url1, data) // Send data in the POST request
      .then(response => response.data) // Handle response data
      .catch(error => {
        throw new Error(error); // Handle any errors
      });}

    
  static createCustomer(customerdata) {
    const url = "http://localhost:9090/customer/add";
    return axios.post(url, customerdata)
  }


  static getCustomer() {
    const url1 = "http://183.82.106.55:9092/api/v1/getCustomer"
    return axios.get(url1);
  }


  static getPaymentData() {
    const INSURANCE_API_BASE_URL = "http://183.82.106.55:9092/api/v1/getPaymentData";
    return axios.get(INSURANCE_API_BASE_URL);
  }


  static postAddress(dataofaddress) {
      const postaddress = "http://localhost:9090/Address/post";
     return axios.post( postaddress,dataofaddress);
  }
  

  static postpayment(paymentdata) {
     const getaddress = "http://localhost:9090/Payment/post";
     return axios.post(getaddress,paymentdata);
  }
  

  static checkdata(check) {
    const getcustomer = "http://localhost:9090/customer/check";
    return axios.post(getcustomer,check);
 }

 static getmobileto(mobile) {
  const getaddress = "http://localhost:9090/customer/mobile/";
  const mobileno = getaddress+mobile;
  return axios.get(mobileno);
}
  

}
export default Customer;