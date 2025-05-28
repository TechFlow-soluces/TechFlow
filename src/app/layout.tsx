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
            {/* ✅ Script CookieYes - chargé AVANT l'interactivité */}
            <Script
                id="cookieyes"
                strategy="beforeInteractive"
                src="https://cdn-cookieyes.com/client_data/b26c5644420039c3c7666f6f/banner.js"
            />
        </head>
        <body>
        <Header />
        {children}
        <Footer />

        {/* ✅ Google Analytics 4 conditionnel selon consentement */}
        <Script id="ga4-conditional" strategy="afterInteractive">
            {`
                        (function() {
                            function loadGA() {
                                if (
                                    window.CookieConsent &&
                                    typeof CookieConsent.getUserPreferences === 'function'
                                ) {
                                    const consent = CookieConsent.getUserPreferences();
                                    console.log("Consent :", consent);

                                    if (
                                        consent &&
                                        consent.categories &&
                                        consent.categories.includes('analytics')
                                    ) {
                                        console.log("✅ Consentement Analytics OK");
                                        var gaScript = document.createElement('script');
                                        gaScript.setAttribute('async', '');
                                        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-V9V21NN065';
                                        document.head.appendChild(gaScript);

                                        gaScript.onload = function () {
                                            window.dataLayer = window.dataLayer || [];
                                            function gtag(){dataLayer.push(arguments);}
                                            gtag('js', new Date());
                                            gtag('config', 'G-V9V21NN065');
                                            console.log("✅ Google Analytics chargé");
                                        };
                                    } else {
                                        console.log("❌ Pas de consentement pour Analytics");
                                    }
                                }
                            }

                            if (window.CookieConsent) {
                                loadGA();
                            } else {
                                window.addEventListener('CookieConsentReady', loadGA);
                            }
                        })();
                    `}
        </Script>
        </body>
        </html>
    );
}
