'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/img/logo.png';
import styles from '../styles/header.module.css';

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>('home');

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'services', 'projects', 'contact'];

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Appel initial
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/#home" scroll={false} className={styles.logoLink}>
                    <Image src={logo} alt="Logo TechFlow" width={32} height={32} />
                    <span className={styles.logoText}>TECHFLOW</span>
                </Link>
            </div>
            <div className={styles.separator}>|</div>
            <nav className={styles.nav}>
                <button
                    onClick={() => scrollToSection('home')}
                    className={activeSection === 'home' ? styles.active : ''}
                >
                    Accueil
                </button>
                <button
                    onClick={() => scrollToSection('services')}
                    className={activeSection === 'services' ? styles.active : ''}
                >
                    Nos services
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className={activeSection === 'projects' ? styles.active : ''}
                >
                    Nos réalisations
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className={activeSection === 'contact' ? styles.active : ''}
                >
                    Nous contacter
                </button>
            </nav>
        </header>
    );
}
