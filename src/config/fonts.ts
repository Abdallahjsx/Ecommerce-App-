import { Poppins,Inter,Cinzel_Decorative } from "next/font/google";
export const poppinsFont=Poppins({
  weight:["500","600","700"],
  subsets:['latin'],
  variable: "--font-poppins",
})
export const interFont=Inter({
  weight:["500","600","700"],
  subsets:['latin'],
  variable: "--font-inter",
})
export const cinzelDecorativeFont=Cinzel_Decorative({
  weight:["400","700",],
  variable: "--font-cinzel", 
})