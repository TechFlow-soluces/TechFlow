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
        <body>
        <Header />
        {children}
        <Footer />

        {/* TarteAuCitron loader */}
        <Script
            src="https://tarteaucitron.io/load.js?domain=techflowsoluces.fr&uuid=2343bbf5741c55fb9d50f968674e4112009dd854"
            strategy="afterInteractive"
        />

        {/* Initialisation de TarteAuCitron */}
        <Script id="tarteaucitron-init" strategy="afterInteractive">
            {`
                        tarteaucitron.init({
                            privacyUrl: "/mentions-legales",
                            hashtag: "#tarteaucitron",
                            cookieName: "tarteaucitron",
                            orientation: "bottom",
                            showAlertSmall: true,
                            cookieslist: true,
                            adblocker: false,
                            AcceptAllCta: true,
                            highPrivacy: true,
                            handleBrowserDNTRequest: false,
                            removeCredit: true,
                            moreInfoLink: true,
                            useExternalCss: false,
                            readmoreLink: "/mentions-legales"
                        });
                    `}
        </Script>

        {/* Bouton flottant "Gérer mes cookies" */}
        <Script id="tarteaucitron-openpanel" strategy="afterInteractive">
            {`
                        window.addEventListener('DOMContentLoaded', function() {
                            const manageCookiesBtn = document.createElement('button');
                            manageCookiesBtn.innerText = 'Gérer mes cookies';
                            manageCookiesBtn.style.position = 'fixed';
                            manageCookiesBtn.style.bottom = '20px';
                            manageCookiesBtn.style.right = '20px';
                            manageCookiesBtn.style.zIndex = '9999';
                            manageCookiesBtn.style.padding = '10px';
                            manageCookiesBtn.style.backgroundColor = '#333';
                            manageCookiesBtn.style.color = '#fff';
                            manageCookiesBtn.style.border = 'none';
                            manageCookiesBtn.style.borderRadius = '5px';
                            manageCookiesBtn.style.cursor = 'pointer';
                            manageCookiesBtn.onclick = () => {
                                window.tarteaucitron.userInterface.openPanel();
                            };
                            document.body.appendChild(manageCookiesBtn);
                        });
                    `}
        </Script>
        </body>
        </html>
    );
}
