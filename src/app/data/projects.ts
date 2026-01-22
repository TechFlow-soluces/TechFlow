import { StaticImageData } from 'next/image';
import rspcImg from '@/app/assets/img/rspc.png';

export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image: StaticImageData;
    link?: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: 'rspc81',
        title: 'RSPC81',
        category: 'Site web',
        description: 'Site moderne pour une entreprise de réparation d\'appareils electroniques sur Mazamet.',
        image: rspcImg,
        link: 'https://rspc81.fr',
        tags: ['WordPress', 'Design Premium', 'SEO Local'],
    },
];
