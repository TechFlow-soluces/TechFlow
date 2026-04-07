import "./styles/globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocalBusinessJsonLd from "./components/LocalBusinessJsonLd";
import { Agdasima } from 'next/font/google';
import Script from 'next/script';

const agdasima = Agdasima({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-agdasima',
});

export const metadata = {
    title: "TechFlow - Éditeur de solutions numériques",
    description: "TechFlow, éditeur de solutions numériques : plateformes SaaS, jeux web et outils innovants pour le sport et le divertissement.",
    metadataBase: new URL("https://techflowsoluces.fr"),
    openGraph: {
        title: "TechFlow - Éditeur de solutions numériques",
        description: "TechFlow, éditeur de solutions numériques : plateformes SaaS, jeux web et outils innovants pour le sport et le divertissement.",
        url: "https://techflowsoluces.fr",
        siteName: "TechFlow",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "TechFlow - Éditeur de solutions numériques",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
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
            <body className={agdasima.className}>
                <LocalBusinessJsonLd />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
