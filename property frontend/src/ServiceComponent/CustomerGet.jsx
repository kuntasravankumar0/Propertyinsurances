import axios from "axios";

class CustomerGet{


    static GetdataAdress(customerid) {
        const getcustomer = "http://localhost:9090/Address/get/";
        const getid = getcustomer + customerid;  
        return axios.get(getid);  
      }

      static getcustomerdata(customerNumber) {
         const getmobile = "http://localhost:9090/customer/mobile/";
         const getno = getmobile + customerNumber; 
         return axios.get(getno); 
      }


      static addressupdate(customerNumber, datafetch) {
         const update = "http://localhost:9090/Address/update/";
         const idcustomer = update + customerNumber; 
         return axios.put(idcustomer, datafetch);
      }
      
      
      
      static getstructuredata(customerNumber) {
        const getstructuredata= "http://localhost:9090/structure/get/";
        const getnumber = getstructuredata + customerNumber; 
        return axios.get(getnumber); 
     }
     static getpaymentdata(customerNumber) {
        const getpaymentdata= "http://localhost:9090/Payment/getbycustomer/";
        const getnumber = getpaymentdata + customerNumber; 
        return axios.get(getnumber,customerNumber); 
     }

     static getpaymentmobile(customerNumber) {
      const getpaymentdata= "http://localhost:9090/Payment/getbycustomer/";
      const getnumber = getpaymentdata +customerNumber ; 
      return axios.get(getnumber,customerNumber); 
   }
      
}
export default CustomerGet;