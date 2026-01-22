import React from 'react';

export default function LocalBusinessJsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'TechFlow',
        image: 'https://techflowsoluces.fr/og-image.jpg', // Adaptez si nécessaire
        '@id': 'https://techflowsoluces.fr',
        url: 'https://techflowsoluces.fr',
        telephone: '', // Ajoutez le téléphone si disponible
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Castres',
            addressRegion: 'Tarn',
            addressCountry: 'FR'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '43.604', // Coordonnées approximatives de Castres, à préciser si adresse exacte
            longitude: '2.242'
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'Castres'
            },
            {
                '@type': 'City',
                name: 'Mazamet'
            },
            {
                '@type': 'AdministrativeArea',
                name: 'Tarn'
            }
        ],
        priceRange: '€€',
        description: "Agence web spécialisée dans la création de sites internet modernes et performants à Castres, Mazamet et dans le Tarn. Solutions digitales sur mesure pour entreprises.",
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday'
                ],
                opens: '09:00',
                closes: '18:00'
            }
        ],
        sameAs: [
            // Ajoutez vos réseaux sociaux ici si disponibles
            // 'https://www.facebook.com/techflow',
            // 'https://www.linkedin.com/company/techflow'
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
