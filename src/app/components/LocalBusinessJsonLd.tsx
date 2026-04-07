import React from 'react';

export default function LocalBusinessJsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'TechFlow',
        image: 'https://techflowsoluces.fr/og-image.jpg',
        '@id': 'https://techflowsoluces.fr',
        url: 'https://techflowsoluces.fr',
        description: "TechFlow, éditeur de solutions numériques : plateformes SaaS, jeux web et outils innovants pour le sport et le divertissement.",
        sameAs: []
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
