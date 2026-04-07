'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/img/logo.png';
import styles from '../styles/header.module.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'products', 'projects', 'contact'];
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
        handleScroll();
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

            <button
                className={styles.burger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Ouvrir ou fermer le menu"
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
                <button
                    onClick={() => scrollToSection('home')}
                    className={activeSection === 'home' ? styles.active : ''}
                >
                    Accueil
                </button>
                <button
                    onClick={() => scrollToSection('products')}
                    className={activeSection === 'products' ? styles.active : ''}
                >
                    Nos produits
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
