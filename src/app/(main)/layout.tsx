import type { Metadata } from "next";


import NavBar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";
export const metadata: Metadata = {
  title: "Alluvo ",
  description: "All of your favorite brands in one place. Alluvo has everything you need for your everyday lifestyle. Explore top brands and discover new products.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
