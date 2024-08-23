import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../public/assets/css/icons.css";
import "../../public/assets/css/icons.min.css";
import "../../public/assets/css/print-styles.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/tailwind.css";
import "../../public/assets/css/tailwind.min.css";
import "./globals.css";
import { Footer } from "@/components/Home/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varnitech",
  description: "Varnitech PVT. LTD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
