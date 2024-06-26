import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { ThemeProvider } from "@/context/themeContext";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "HexaAgancy",
  description: "Your Best Way To build modern Websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <div className="main_container">
            <Navigation />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
