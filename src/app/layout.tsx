import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ayoub Bensalah",
  description: "Ayoub bensalah portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
