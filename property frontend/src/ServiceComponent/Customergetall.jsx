import axios from "axios";

class CustomerGetall{


    static getAddress(customerid) {
        const getaddress = "http://localhost:9090/Address/get/";
       const getdata =getaddress+customerid;
       return axios.get(getdata);
      }
    

  static getCustomerAll() {
    const url = "http://localhost:9090/customer/getall";
    return axios.get(url)
  }

  

  static getMobile(mobile) {
    const url1 = "http://localhost:9090/customer/mobile/";
    const mobileNumber = mobile;
    const url = url1 + mobileNumber;
    return axios.get(url);
  }
      
}
export default CustomerGetall;