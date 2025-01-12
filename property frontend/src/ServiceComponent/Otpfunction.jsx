import axios from "axios";

class Otpfunction{

static getOtp(mobileno,j)
{
const urll="https://login4.spearuc.com/MOBILE_APPS_API/sms_api.php?type=smsquicksend&user=qtnextotp&pass=987654&sender=QTTINF%20&t_id=1707170494921610008&to_mobileno=";
const url1=urll+mobileno+"&sms_text=Dear%20customer,%20use%20this%20OTP%20";
const url2=url1+j+"%20to%20signup%20in%20to%20your%20Quality%20Thought%20Next%20account.%20This%20OTP%20will%20be%20valid%20for%20the%20next%2015%20mins";
return axios.get(url2);
}

}
export default Otpfunction;