import { Dayjs } from "dayjs";

export type loginData = {
  email: string;
  password: string;
};
export type registerData = {
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Password: string;
  DateOfBirth: Dayjs | null;
  Gender: string | "Male" | "Female" | "";
  ProfileImage: File | null;
};
export type verigicationData = {
  email: string;
  otp: string;
};
