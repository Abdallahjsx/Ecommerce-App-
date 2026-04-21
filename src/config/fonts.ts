import { Poppins, Inter, Cinzel_Decorative, Lato, Roboto, Manrope, Plus_Jakarta_Sans } from "next/font/google";
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

export const manropeFont = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const plusJakartaSansFont = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});
