import { StaticImageData } from 'next/image';
import swiftplaysImg from '@/app/assets/img/swiftplays.png';
import opticoachImg from '@/app/assets/img/opticoach.png';

export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image?: StaticImageData;
    link?: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: 'swiftplays',
        title: 'Swiftplays',
        category: 'Plateforme SaaS',
        description: 'Plateforme de compétition de jeux vidéos. Organisez et participez à des tournois en ligne.',
        image: swiftplaysImg,
        link: 'https://swiftplays.fr/',
        tags: ['Gaming', 'Compétition', 'Esport'],
    },
    {
        id: 'opticoach',
        title: 'Opticoach',
        category: 'Outil SaaS',
        description: 'Outil tout-en-un pour les entraîneurs de football. Gestion d\'équipe, tactiques et suivi de performance.',
        image: opticoachImg,
        link: 'https://opticoach.eu/',
        tags: ['Football', 'Coaching', 'Gestion'],
    },
    {
        id: 'flipit',
        title: 'Flipit',
        category: 'Jeu Web',
        description: 'Jeu web de paris et quizz sportifs. Testez vos connaissances et défiez vos amis.',
        tags: ['Quiz', 'Sport', 'Divertissement'],
    },
];
