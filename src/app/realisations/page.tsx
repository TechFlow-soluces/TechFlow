'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { projects } from '@/app/data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Realisations() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Nos Réalisations</h1>
                <p className={styles.subtitle}>
                    Découvrez une sélection de nos projets récents. Nous transformons vos idées en solutions numériques performantes et esthétiques.
                </p>
            </header>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <article key={project.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className={styles.projectImage}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.category}>{project.category}</span>
                            <h2 className={styles.cardTitle}>{project.title}</h2>
                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>

                            {project.link ? (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                                    Visiter le site <ArrowUpRight size={18} style={{ marginLeft: '8px' }} />
                                </a>
                            ) : (
                                <span className={styles.linkButton} style={{ opacity: 0.7, cursor: 'not-allowed' }}>
                                    Bientôt disponible
                                </span>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
