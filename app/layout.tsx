import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Providers } from './theme.providers';
import "./globals.css";
import ToastProvider from "./toast.providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Education Live",
  description: "Learn through online courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <Providers> */}
          <ToastProvider>
            {children}
          </ToastProvider>
        {/* </Providers> */}
      </body>

    </html>
  );
}
