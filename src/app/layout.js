import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'tailwindcss/tailwind.css';

const opensans = Open_Sans({ subsets: ["latin"] });


export const metadata = {
  title: "Shirt.",
  description: "A camiseta que você precisa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/x-icon" href="/img/favicon.svg"/>
      </head>
      <body className={opensans.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
