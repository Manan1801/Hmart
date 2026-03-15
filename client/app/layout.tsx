import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hmart",
  description: "Different Needs. One Solution."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">

        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}