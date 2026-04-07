'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '@/app/styles/page.module.css'
import { projects } from '@/app/data/projects'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Gamepad2, Target, Dices } from 'lucide-react'

import img_accueil from '@/app/assets/img/img_accueil.png'

const productIcons = [
    <Gamepad2 key="gamepad" size={48} />,
    <Target key="target" size={48} />,
    <Dices key="dices" size={48} />,
]

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
                <h1 className={styles.title}>ÉDITEUR DE SOLUTIONS NUMÉRIQUES</h1>
                <p className={styles.subtitle}>
                    Solutions SaaS, jeux web et outils innovants conçus pour le sport et le divertissement.
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

            <section id="products" className={styles.servicesSection}>
                <div className={styles.servicesContainer}>
                    <h2 className={styles.servicesTitle}>Nos produits</h2>
                    <div className={styles.servicesGrid}>
                        {projects.map((project, index) => (
                            <div key={project.id} className={styles.card}>
                                <div className={styles.cardIcon}>
                                    {productIcons[index]}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.cardTags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.cardTag}>{tag}</span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                                        Découvrir <ArrowUpRight size={16} />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className={styles.projects}>
                <div className={styles.projectInner}>
                    <h2>Nos produits en détail</h2>
                    <p className={styles.projectSubtitle}>Découvrez nos solutions numériques.</p>

                    <div className={styles.projectGrid}>
                        {projects.slice(0, 3).map((project) => (
                            <article key={project.id} className={styles.projectCard}>
                                {project.image && (
                                    <div className={styles.cardImageWrapper}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className={styles.cardImage}
                                        />
                                    </div>
                                )}
                                <div className={styles.cardContent}>
                                    <span className={styles.cardCategory}>{project.category}</span>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <p className={styles.cardDescription}>{project.description}</p>
                                    <div className={styles.viewProjectLink}>
                                        {project.link ? (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                Voir le projet <ArrowUpRight size={16} />
                                            </a>
                                        ) : (
                                            <span>Bientôt disponible</span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className={styles.seeAllContainer}>
                        <Link href="/realisations" className={styles.seeAllButton}>
                            Voir tous nos produits <ArrowRight size={20} />
                        </Link>
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
