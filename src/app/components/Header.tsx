'use client';
import Link from 'next/link';

import Image from 'next/image';
import logo from '../assets/img/logo.png';
import styles from '../styles/header.module.css';

export default function Header() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });

};

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
                <button onClick={() => scrollToSection('home')}>Accueil</button>
                <button onClick={() => scrollToSection('services')}>Nos services</button>
                <button onClick={() => scrollToSection('projects')}>Nos réalisations</button>
                <button onClick={() => scrollToSection('contact')}>Nous contacter</button>
            </nav>
        </header>
    );
}