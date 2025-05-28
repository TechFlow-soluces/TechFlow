import "./styles/globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Agdasima } from 'next/font/google';

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
            {/* Script CookieYes */}
            {/* Start cookieyes banner */}
            <script
                id="cookieyes"
                type="text/javascript"
                src="https://cdn-cookieyes.com/client_data/b26c5644420039c3c7666f6f/script.js"
            ></script>
            {/* End cookieyes banner */}
        </head>
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}
