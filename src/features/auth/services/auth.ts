import { AxiosError } from "axios";
import { apiCall } from "../../../services/apiClient";
import { loginData,registerData,verigicationData } from "../types";
//Login function
export async function login(data:loginData) {
    const res = await apiCall.post("/api/Auth/Login",data)
    return res.data
}
//Register function
export async function register(data:registerData) { 
  console.log("called")
  const form = new FormData();
  form.append("FirstName", data.FirstName);
  form.append("LastName", data.LastName);
  form.append("Email", data.Email);
  form.append("PhoneNumber", `+20${data.PhoneNumber}`);
  form.append("Password", data.Password);
  form.append("DateOfBirth", data.DateOfBirth);
  form.append("Gender", data.Gender);
  form.append("ProfileImage", data.ProfileImage!);
    // NOTE : we had to use fetch instead of axios because axios has some problems and limitations with form data in react native (will be updated in the web version )
   const resp = await fetch("https://alluvo-api-stating.runasp.net/api/Auth/Register", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      body: form,
    })
  return await resp.text()
}
//Verify Account function
export async function verification(data:verigicationData) {
  console.log("all my friends &&&")
  console.log(data)
  const res = await apiCall.post("/api/Otp/VerifyOtp",data)
  console.log(res.data)
  return res.data
}
// Resend OTP function
export async function resendOtp(email:string) {
  const res = await apiCall.post(`/api/Otp/ResendOtp?email=${email}`)
  return res.data
}
// forget password 