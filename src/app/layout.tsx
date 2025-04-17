
import "./styles/globals.css";
import React from "react";
import Header from "./components/Header";
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
        <body>
        <Header />
        {children}
        </body>
        </html>
    );
}
