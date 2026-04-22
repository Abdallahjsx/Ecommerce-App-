import { Poppins, Inter, Cinzel_Decorative, Lato, Roboto } from "next/font/google";
export const poppinsFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin'],
  variable: "--font-poppins",
})
export const interFont = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
  variable: "--font-inter",
})
export const cinzelDecorativeFont = Cinzel_Decorative({
  weight: ["400", "700",],
  subsets: ['latin'],
  variable: "--font-cinzel",
})
export const latoFont = Lato({
  weight: ["400", "700"],
  subsets: ['latin'],
  variable: "--font-lato",
})
export const robotoFont = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
