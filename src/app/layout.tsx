import "./styles/globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Agdasima } from 'next/font/google';
import Script from 'next/script';

const agdasima = Agdasima({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-agdasima',
});

export const metadata = {
    title: "TechFlow - Agence web",
    description: "Solutions digitales sur mesure, création de sites web modernes et performants.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={agdasima.variable}>
        <head>
            {/* ✅ CookieYes Script */}
            <Script
                id="cookieyes"
                strategy="beforeInteractive"
                src="https://cdn-cookieyes.com/client_data/b26c5644420039c3c7666f6f/script.js"
            />

            {/* ✅ Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}
