import img_accueil from "@/app/assets/img/img_accueil.png";
import Image from "next/image";
import styles from "@/app/styles/page.module.css";

export default function Home() {
    return (
        <>
            <section id="home" style={{textAlign: 'center', padding: '6rem 2rem'}}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5rem',
                    marginBottom: '1rem',
                }}>
                    <hr style={{
                        width: '50px',
                        border: 'none',
                        borderTop: '1px solid #ccc',
                        margin: 0,
                    }}/>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 400,
                        letterSpacing: '0.3rem',
                        color: '#aaa',
                        margin: 0,
                    }}>
                        TECHFLOW
                    </h2>
                    <hr style={{
                        width: '50px',
                        border: 'none',
                        borderTop: '1px solid #ccc',
                        margin: 0,
                    }}/>
                </div>

                <h1 style={{
                    fontSize: '5rem',
                    fontWeight: 600,
                    marginTop: '0.5rem',
                    marginBottom: '1rem',
                }}>
                    AGENCE DIGITALE & CRÉATEUR DE SOLUTIONS
                </h1>

                <p style={{
                    fontSize: '1.5rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    color: '#444',
                }}>
                    Développement de sites web, applications personnalisées, logiciels & gestion des réseaux sociaux
                    pour booster votre présence en ligne.
                </p>

                <Image src={img_accueil} alt="Logo TechFlow" width={716} height={409} className={styles.img_accueil}/>
            </section>
            <section id="services" style={{padding: '6rem 2rem', textAlign: 'center'}}>
                <h2 className={styles.sous_titre} style={{
                    fontSize: '3rem',
                    fontWeight: 600,
                    marginBottom: '2rem',
                    float: 'left',
                }}>
                    Nos services
                </h2>
            </section>
        </>




);
}
