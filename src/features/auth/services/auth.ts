import { AxiosError } from "axios";
import { apiCall } from "../../../services/apiClient";
import { loginData, registerData, verigicationData } from "../types";
//Login function
export async function login(data: loginData) {
  const res = await apiCall.post("/api/Auth/Login", data);
  console.log(res.data);

  return res.data;
}
//Register function
export async function register(data: registerData) {
  console.log("called");
  const form = new FormData();
  form.append("FirstName", data.FirstName);
  form.append("LastName", data.LastName);
  form.append("Email", data.Email);
  form.append("PhoneNumber", `+20${data.PhoneNumber}`);
  form.append("Password", data.Password);
  form.append("DateOfBirth", data.DateOfBirth?.toISOString() ?? "");
  form.append("Gender", data.Gender!);
  form.append("ProfileImage", data.ProfileImage!);
  const resp = await apiCall.post("/api/Auth/Register", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return resp.data;
}
// log out function
export async function logout() {
  const res = await apiCall.post("/api/Auth/Signout");
  return res.data;
}
//Verify Account function
export async function verification(data: verigicationData) {
  console.log("all my friends &&&");
  console.log(data);
  const res = await apiCall.post("/api/Otp/VerifyOtp", data);
  console.log(res.data);
  return res.data;
}
// Resend OTP function
export async function resendOtp(email: string) {
  const res = await apiCall.post(`/api/Otp/ResendOtp?email=${email}`);
  return res.data;
}
// forget password email
export async function forgetPasswordEmail(email: string) {
  const res = await apiCall.post(`/api/Auth/ForgetPassword`, { email });
  return res.data;
}
// Reset new password
export async function resetNewPassword(newPassword: string) {
  const res = await apiCall.post(`/api/Auth/ResetPassword`, { newPassword });
  return res.data;
}
// get interests
export async function getInterests() {
  const res = await apiCall.get(`/api/Interest/Interests`);
  return res.data;
}
// set interests
export async function setInterests(interestIds: number[]) {
  const res = await apiCall.post(`/api/Interest/UserInterests`, {
    interestIds,
  });
  return res.data;
}
