'use client';

export default function Header() {
    return (
        <footer style={{
    backgroundColor: '#013818',
    color: '#f0f0f0',
    padding: '3rem 2rem',
    marginTop: '4rem',
    fontSize: '0.95rem',
}}>
    <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: '2rem',
    }}>
        {/* Bloc gauche : contact */}
        <div style={{ flex: '1 1 200px' }}>
            <p>techflow.soluces@gmail.com</p>
        </div>

        {/* Bloc centre : navigation */}
        <div style={{ flex: '1 1 200px' }}>
            <ul style={{ listStyle: 'none', textAlign: 'center', padding: 0, margin: 0 }}>
                <li><a href="#home" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Accueil</a></li>
                <li><a href="#services" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Nos services</a></li>
                <li><a href="#projects" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Nos réalisations</a></li>
                <li><a href="#contact" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Contact</a></li>
            </ul>
        </div>

        {/* Bloc droit : mentions légales */}
        <div style={{ flex: '1 1 200px', textAlign: 'right' }}>
            <a href="/mentions-legales/page" style={{ color: '#f0f0f0', textDecoration: 'none' }}>Mentions légales</a>
        </div>
    </div>

    <hr style={{ margin: '2rem 0', borderColor: '#446e5e' }} />

    <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        fontSize: '0.85rem',
    }}>
        <p style={{ margin: 0}}>© {new Date().getFullYear()} TechFlow – Tous droits réservés</p>
    </div>
</footer>
    );
}

