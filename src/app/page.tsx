'use client'

import { useState } from 'react'
import Image from 'next/image'
import img_accueil from '@/app/assets/img/img_accueil.png'
import dev_web from '@/app/assets/img/dev_web.svg'
import logiciel_metier from '@/app/assets/img/logiciel_metier.svg'
import social_media from '@/app/assets/img/social_media.svg'
import definition_besoin from '@/app/assets/img/definition_besoin.svg'
import developpement from '@/app/assets/img/developpement.svg'
import livraison_projet from '@/app/assets/img/livraison_projet.svg'
import SEO from '@/app/assets/img/SEO.svg'
import maintenance from '@/app/assets/img/maintenance.svg'
import styles from '@/app/styles/page.module.css'

export default function Home() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSuccess(false)
        setError('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            })

            if (res.ok) {
                setSuccess(true)
                setName('')
                setEmail('')
                setMessage('')
            } else {
                const data = await res.json()
                setError(data?.error || 'Une erreur est survenue.')
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setError('Erreur réseau, veuillez réessayer plus tard.')
        }
    }

    return (
        <>
            {/* Accueil */}
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
                    color: '#013818',
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
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    backgroundColor: '#013818',
                    padding: '4rem 2rem',
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75)',
                }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        color: '#fff',
                        marginBottom: '4rem',
                    }}>
                        Nos services
                    </h2>

                    <div
                        className="servicesGridResponsive"
                        style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        justifyItems: 'center',
                    }}>
                        {/* Bloc Service 1 */}
                        <div style={{
                            backgroundColor: 'rgba(120,154,140,0.55)',
                            padding: '2rem',
                            borderRadius: '16px',
                            textAlign: 'center',
                            color: '#f0f0f0',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        }}>
                            <Image src={dev_web} alt="Développement Web & Mobile" width={200} height={200} style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff' }}>Développement Web & Mobile</h3>
                            <p>
                                Sites vitrines, e-commerce ou applications web/mobile modernes, responsives et optimisées SEO.
                            </p>
                        </div>

                        {/* Bloc Service 2 */}
                        <div style={{
                            backgroundColor: 'rgba(120,154,140,0.55)',
                            padding: '2rem',
                            borderRadius: '16px',
                            textAlign: 'center',
                            color: '#f0f0f0',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        }}>
                            <Image src={logiciel_metier} alt="Logiciels métiers" width={200} height={200} style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff' }}>Développement de logiciels métiers</h3>
                            <p>
                                CRM, ERP, outils de gestion ou automatisation… des logiciels conçus sur mesure pour votre activité.
                            </p>
                        </div>

                        {/* Bloc Service 3 */}
                        <div style={{
                            backgroundColor: 'rgba(120,154,140,0.55)',
                            padding: '2rem',
                            borderRadius: '16px',
                            textAlign: 'center',
                            color: '#f0f0f0',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        }}>
                            <Image src={social_media} alt="Stratégie digitale" width={200} height={200} style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff' }}>Stratégie digitale & réseaux sociaux</h3>
                            <p>
                                Gestion de contenu, animation de vos réseaux, croissance organique et planification stratégique.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="process" className={styles.sectionProcess}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Déroulement d’un projet</h2>

                    {/* Étapes */}
                    <div className={styles.step}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={definition_besoin}
                                alt="Définir vos besoins"
                                className={styles.projectImage}
                            />
                        </div>
                        <div className={styles.textBlock}>
                            <h3 className={styles.subtitle}>Définir vos besoins</h3>
                            <p>
                                Avant de commencer tout développement, nous organisons un rendez-vous pour
                                échanger sur votre activité, vos objectifs, vos attentes et vos contraintes.<br /><br />
                                Cette étape est essentielle pour bien cerner votre projet. Elle nous permet de poser les bases d’une solution pertinente et sur-mesure.<br /><br />
                                À l’issue de cet échange, nous rédigeons un cahier des charges clair et structuré, qui servira de fil conducteur tout au long du projet.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.step} ${styles.reverse}`}>
                        <div className={styles.imageWrapper}>
                            <Image src={developpement} alt="Développement" className={styles.projectImage} />
                        </div>
                        <div className={styles.textBlock}>
                            <h3 className={styles.subtitle}>Développement</h3>
                            <p>
                                Une fois le périmètre du projet bien défini, nous lançons la phase de développement afin de traduire votre cahier des charges en une solution fonctionnelle : site web, application ou logiciel.<br /><br />
                                Selon vos besoins, nous utilisons des technologies modernes, adaptées, performantes et évolutives.<br />
                                Le développement se fait de manière itérative, avec plusieurs versions livrées au fil de l’avancement.<br /><br />
                                Cette méthode permet de tester régulièrement les fonctionnalités, d’ajuster les détails en cours de route, et d’éviter toute mauvaise surprise à la fin.<br /><br />
                                Les maquettes validées sont intégrées au fur et à mesure, et vous restez en contact permanent avec notre équipe.
                            </p>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.imageWrapper}>
                            <Image src={livraison_projet} alt="Livraison" className={styles.projectImage} />
                        </div>
                        <div className={styles.textBlock}>
                            <h3 className={styles.subtitle}>Livraison du projet</h3>
                            <p>
                                Une fois le développement terminé, nous procédons à la livraison complète de votre projet, prêt à être mis en ligne.<br /><br />
                                Deux possibilités s’offrent à vous :<br />
                                – Vous souhaitez gérer l’hébergement vous-même : nous vous fournissons l’ensemble des fichiers du projet et la base de données, accompagnés d’instructions de mise en ligne.<br />
                                – Vous préférez que nous nous en chargions : nous assurons la mise en ligne et la configuration sur une plateforme d’hébergement choisie ensemble.<br /><br />
                                Dans les deux cas, nous nous assurons que tout fonctionne correctement avant validation finale.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.step} ${styles.reverse}`}>
                        <div className={styles.imageWrapper}>
                            <Image src={SEO} alt="SEO" className={styles.projectImage} />
                        </div>
                        <div className={styles.textBlock}>
                            <h3 className={styles.subtitle}>Référencement SEO</h3>
                            <p>
                                Le référencement naturel est un levier indispensable pour améliorer la visibilité de votre site.<br /><br />
                                SEO on-site : optimisation technique et structurelle (responsive, accessibilité…)<br />
                                SEO off-site : acquisition de liens entrants de qualité (netlinking)<br /><br />
                                Nous vous accompagnons dans une stratégie sur-mesure pour un trafic qualifié.
                            </p>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.imageWrapper}>
                            <Image src={maintenance} alt="Maintenance" className={styles.projectImage} />
                        </div>
                        <div className={styles.textBlock}>
                            <h3 className={styles.subtitle}>Maintenance & évolution</h3>
                            <p>
                                Une fois le projet en ligne, notre équipe reste à votre disposition pour toute évolution, mise à jour ou correctif.<br /><br />
                                Nous conçevons votre site de manière évolutive pour s’adapter à vos besoins futurs sans tout reconstruire.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" style={{ padding: "6rem 2rem", backgroundColor: "#efefef" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "3rem", fontWeight: 600, marginBottom: "2rem", color: "#013818" }}>
                        Nos réalisations
                    </h2>

                    <div
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "12px",
                            padding: "3rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            maxWidth: "600px",
                            margin: "0 auto",
                        }}
                    >
                        <p style={{ fontSize: "1.2rem", color: "#333" }}>
                            Nos premières réalisations arrivent très bientôt.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    backgroundColor: '#013818',
                    padding: '4rem 2rem',
                    borderRadius: '24px',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75)',
                }}>
                    <h2 style={{ fontSize: '2.8rem', fontWeight: 600, color: '#fff', marginBottom: '2rem', textAlign: 'center' }}>
                        Contactez-nous
                    </h2>
                    <form onSubmit={handleSubmit} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        backgroundColor: '#f9f9f9',
                        padding: '2rem',
                        borderRadius: '16px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                padding: '1rem',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                fontSize: '1rem',
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Votre adresse e-mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                padding: '1rem',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                fontSize: '1rem',
                            }}
                        />
                        <textarea
                            placeholder="Votre message"
                            rows={6}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{
                                padding: '1rem',
                                borderRadius: '8px',
                                border: '1px solid #ccc',
                                fontSize: '1rem',
                                resize: 'vertical',
                            }}
                        />
                        <button type="submit" style={{
                            backgroundColor: '#013818',
                            color: '#fff',
                            padding: '1rem 2rem',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                        }}>
                            Envoyer
                        </button>

                        {success && <p style={{ color: 'green' }}>Votre message a été envoyé avec succès.</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
            </section>
        </>
    )
}
