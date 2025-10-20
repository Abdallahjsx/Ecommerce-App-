export type loginData={
    email:string;
    password:string;
}
export type registerData ={
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Password: string;
  DateOfBirth: string;
  Gender: string;
  ProfileImage: File | undefined;
}
export type verigicationData={
  email:string;
  otp:string;
}
