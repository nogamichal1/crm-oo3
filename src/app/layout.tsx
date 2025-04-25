import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "HOGS CRM",
  description: "Zarządzaj sprzedażą w HOGS CRM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={poppins.variable}>
      <body className="bg-brand-light text-brand-dark">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
