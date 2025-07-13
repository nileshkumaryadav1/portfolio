import "./globals.css";
import {
  Ubuntu,
  Open_Sans,
  Montserrat_Alternates,
  Montserrat,
} from "next/font/google";
import UniversalNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});
const montserrat_alternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat-alternates",
});
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-open-sans",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Nilesh Kumar | Portfolio",
  description: "A Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={montserrat.className}>
          <nav>
            <UniversalNavbar
              bgColor={"var(--border)"}
              textColor={"var(--foreground)"}
            />
          </nav>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
