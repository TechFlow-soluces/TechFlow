export const metadata = {
    title: "Mentions légales - TechFlow",
    description: "Mentions légales du site TechFlow, agence web spécialisée en solutions digitales.",
};

export default function MentionsLegalesPage() {
    return (
        <main style={{ padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
            <h1>Mentions légales</h1>
            <p><strong>Nom de l’entreprise :</strong> TechFlow</p>
            <p><strong>Forme juridique :</strong> Micro-entreprise</p>
            <p><strong>Responsable de la publication :</strong> Jonathan Bous</p>
            <p><strong>SIRET :</strong> 94256541700014</p>
            <p><strong>Email :</strong> techflow.soluces@gmail.com</p>

            <h2>Hébergement</h2>
            <p><strong>Hébergeur :</strong> OVH</p>
            <p>2 rue Kellermann, 59100 Roubaix, France</p>
            <p><a href="https://www.ovh.com" target="_blank">www.ovh.com</a></p>

            <h2>Propriété intellectuelle</h2>
            <p>Le contenu du site TechFlow (textes, images, logos, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle.</p>

            <h2>Données personnelles</h2>
            <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos messages. Vous pouvez demander leur suppression en nous contactant à techflow.soluces@gmail.com.</p>

            <h2>Cookies</h2>
            <p>Ce site utilise des cookies pour des fins de mesure d’audience (Google Analytics). Ces cookies ne sont déposés qu’avec votre consentement.</p>

            <h2>Responsabilité</h2>
            <p>Les informations présentes sur ce site sont données à titre indicatif. TechFlow ne saurait être tenue responsable des erreurs ou omissions.</p>
        </main>
    );
}
