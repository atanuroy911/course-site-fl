'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from '../providers';
import "../globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="container mx-auto">
                <Header></Header>
            </div>
            <Providers>
                {children}
            </Providers>
            <Footer></Footer>
        </>

    );
}
