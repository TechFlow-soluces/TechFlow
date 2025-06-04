'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '@/app/styles/page.module.css'

import img_accueil from '@/app/assets/img/img_accueil.png'
import dev_web from '@/app/assets/img/dev_web.svg'
import logiciel_metier from '@/app/assets/img/logiciel_metier.svg'
import social_media from '@/app/assets/img/social_media.svg'
import definition_besoin from '@/app/assets/img/definition_besoin.svg'
import developpement from '@/app/assets/img/developpement.svg'
import livraison_projet from '@/app/assets/img/livraison_projet.svg'
import SEO from '@/app/assets/img/SEO.svg'
import maintenance from '@/app/assets/img/maintenance.svg'

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
        } catch {
            setError('Erreur réseau, veuillez réessayer plus tard.')
        }
    }

    return (
        <>
            <section id="home" className={styles.home}>
                <div className={styles.header}>
                    <hr className={styles.line} />
                    <h2 className={styles.techflow}>TECHFLOW</h2>
                    <hr className={styles.line} />
                </div>
                <h1 className={styles.title}>AGENCE DIGITALE & CRÉATEUR DE SOLUTIONS</h1>
                <p className={styles.subtitle}>
                    Développement de sites web, applications personnalisées, logiciels & gestion des réseaux sociaux
                    pour booster votre présence en ligne.
                </p>
                <Image
                    src={img_accueil}
                    alt="Accueil"
                    className={styles.imgAccueil}
                    width={800}
                    height={500}
                    priority
                />
            </section>

            <section id="services" className={styles.servicesSection}>
                <div className={styles.servicesContainer}>
                    <h2 className={styles.servicesTitle}>Nos services</h2>
                    <div className={styles.servicesGrid}>
                        <div className={styles.card}>
                            <Image src={dev_web} alt="Web" className={styles.cardImg} width={400} height={300} />
                            <h3>Développement Web & Mobile</h3>
                            <p>Sites vitrines, e-commerce ou applications web/mobile modernes, responsives et optimisées SEO.</p>
                        </div>
                        <div className={styles.card}>
                            <Image src={logiciel_metier} alt="Logiciel métier" className={styles.cardImg} width={400} height={300} />
                            <h3>Développement de logiciels métiers</h3>
                            <p>CRM, ERP, outils de gestion ou automatisation… des logiciels conçus sur mesure pour votre activité.</p>
                        </div>
                        <div className={styles.card}>
                            <Image src={social_media} alt="Réseaux sociaux" className={styles.cardImg} width={400} height={300} />
                            <h3>Stratégie digitale & réseaux sociaux</h3>
                            <p>Gestion de contenu, animation de vos réseaux, croissance organique et planification stratégique.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="process" className={styles.sectionProcess}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Déroulement d’un projet</h2>
                    {[
                        { img: definition_besoin, alt: 'Définir vos besoins', title: 'Définir vos besoins', reverse: false, text: `Avant de commencer tout développement, nous organisons un rendez-vous pour échanger sur votre activité, vos objectifs, vos attentes et vos contraintes.

Cette étape est essentielle pour bien cerner votre projet. Elle nous permet de poser les bases d’une solution pertinente et sur-mesure.

À l’issue de cet échange, nous rédigeons un cahier des charges clair et structuré, qui servira de fil conducteur tout au long du projet.` },
                        { img: developpement, alt: 'Développement', title: 'Développement', reverse: true, text: `Une fois le périmètre du projet bien défini, nous lançons la phase de développement afin de traduire votre cahier des charges en une solution fonctionnelle : site web, application ou logiciel.

Selon vos besoins, nous utilisons des technologies modernes, adaptées, performantes et évolutives.

Le développement se fait de manière itérative, avec plusieurs versions livrées au fil de l’avancement.

Les maquettes validées sont intégrées au fur et à mesure, et vous restez en contact permanent avec notre équipe.` },
                        { img: livraison_projet, alt: 'Livraison', title: 'Livraison du projet', reverse: false, text: `Une fois le développement terminé, nous procédons à la livraison complète de votre projet, prêt à être mis en ligne.

Deux possibilités :
– Vous gérez l’hébergement vous-même : nous vous fournissons les fichiers + base de données.
– Nous nous en chargeons : nous assurons la mise en ligne et la configuration.

Dans tous les cas, nous vérifions que tout fonctionne avant validation finale.` },
                        { img: SEO, alt: 'SEO', title: 'Référencement SEO', reverse: true, text: `Le référencement naturel est un levier indispensable pour améliorer la visibilité de votre site.

SEO on-site : technique, responsive, accessibilité
SEO off-site : netlinking

Nous vous accompagnons avec une stratégie sur mesure pour un trafic qualifié.` },
                        { img: maintenance, alt: 'Maintenance', title: 'Maintenance & évolution', reverse: false, text: `Une fois le projet en ligne, notre équipe reste à votre disposition pour toute évolution, mise à jour ou correctif.

Nous concevons votre site de manière évolutive pour s’adapter à vos besoins futurs sans tout reconstruire.` },
                    ].map(({ img, alt, title, text, reverse }, index) => (
                        <div key={index} className={`${styles.step} ${reverse ? styles.reverse : ''}`}>
                            <div className={styles.imageWrapper}>
                                <Image src={img} alt={alt} className={styles.projectImage} width={500} height={400} />
                            </div>
                            <div className={styles.textBlock}>
                                <h3 className={styles.subtitle}>{title}</h3>
                                <p>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projects" className={styles.projects}>
                <div className={styles.projectInner}>
                    <h2>Nos réalisations</h2>
                    <div className={styles.projectBox}>
                        <p>Nos premières réalisations arrivent très bientôt.</p>
                    </div>
                </div>
            </section>

            <section id="contact" className={styles.contact}>
                <div className={styles.contactBox}>
                    <h2>Contactez-nous</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            type="text"
                            placeholder="Votre nom"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Votre adresse e-mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            placeholder="Votre message"
                            rows={6}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit">Envoyer</button>
                        {success && <p className={styles.success}>Votre message a été envoyé avec succès.</p>}
                        {error && <p className={styles.error}>{error}</p>}
                    </form>
                </div>
            </section>
        </>
    )
}
