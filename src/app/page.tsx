import img_accueil from "@/app/assets/img/img_accueil.png";
import dev_web from "@/app/assets/img/dev_web.svg";
import logiciel_metier from "@/app/assets/img/logiciel_metier.svg";
import social_media from "@/app/assets/img/social_media.svg";
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
            <section id="services" style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    marginBottom: '4rem',
                }}>
                    Nos services
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}>
                    {/* Bloc 1 */}
                    <div style={{ textAlign: 'center' }}>
                        <Image
                            src={dev_web}
                            alt="Développement Web & Mobile"
                            width={200}
                            height={200}
                            style={{ marginBottom: '1rem' }}
                        />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Développement Web & Mobile</h3>
                        <p>
                            Création de sites vitrines, e-commerce ou applications web/mobile personnalisées,
                            performantes et modernes. Adaptées à vos besoins, optimisées SEO et responsives.
                        </p>
                    </div>

                    {/* Bloc 2 */}
                    <div style={{ textAlign: 'center' }}>
                        <Image
                            src={logiciel_metier}
                            alt="Logiciels métiers"
                            width={200}
                            height={200}
                            style={{ marginBottom: '1rem' }}
                        />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Développement de logiciels métiers</h3>
                        <p>
                            Outils internes, gestion, automatisation, CRM, ERP… des solutions conçues sur mesure
                            pour simplifier votre quotidien professionnel.
                        </p>
                    </div>

                    {/* Bloc 3 */}
                    <div style={{ textAlign: 'center' }}>
                        <Image
                            src={social_media}
                            alt="Réseaux sociaux & stratégie digitale"
                            width={200}
                            height={200}
                            style={{ marginBottom: '1rem' }}
                        />
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Stratégie digitale & réseaux sociaux</h3>
                        <p>
                            Développement de votre présence en ligne : création de contenu, animation de comptes,
                            gestion de communauté, planification stratégique.
                        </p>
                    </div>
                </div>
            </section>


        </>


    );
}
