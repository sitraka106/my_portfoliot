import { ProfileData } from '../types/portfolio';

export const profileData: ProfileData = {
  fullName: 'RASOLOHERY Sitraka Evariste',
  title: 'Développeur Web Full Stack',
  summary:
    "Je suis un développeur web FULL STACK, j'ai la compétence de développer ou mener des projets informatiques de la conception jusqu'au déploiement.",
  phone: '+261 38 45 622 51',
  email: 'sitrakarasolohery6@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sitraka-evariste-rasolohery-a3694b206',
  location: 'Madagascar',
  experiences: [
    {
      id: 'numherit',
      role: 'Développeur Laravel & Full Stack',
      company: 'NUMHERIT MADAGASCAR',
      period: 'Juin 2025 - Octobre 2026',
      current: true,
      missions: [
        'Développement, maintenance et refonte des API pour les plateformes de transfert PosteFinance Sénégal (module comptabilité), Paositra Money Malagasy et la boutique pharmacie en ligne sénégalaise SEN PNA en Laravel.',
        'Contribution au développement d’une plateforme de formation en ligne interne pour la microfinance SMMEC Madagascar avec Next.js (React.js) et Laravel.',
      ],
      technologies: ['Laravel', 'Next.js', 'React.js', 'API REST', 'Comptabilité & FinTech'],
    },
    {
      id: 'relia-consulting',
      role: 'Développeur Full-Stack',
      company: 'Société Relia-consulting',
      period: 'Juillet 2024 - Juillet 2025',
      missions: [
        'Développement du site de recherche de travail JobPrivé avec Laravel et React.js.',
        'Mission en régie pour une migration de données au sein de la banque SIPEM Madagascar avec Python.',
        'Développement d’une application de génération des états réglementaires de la banque SIPEM Madagascar avec PHP natif.',
      ],
      technologies: ['Laravel', 'React.js', 'Python', 'PHP Natif', 'Migration de données'],
    },
    {
      id: 'contractus-consulting',
      role: 'Développeur Full Stack Laravel',
      company: 'Société Contractus-consulting',
      period: 'Janvier 2023 - Juin 2024',
      missions: [
        'Développement et maintenance d’une application web de contrôle fiscal en Laravel et React.js pour la société Contractus-consulting.',
      ],
      technologies: ['Laravel', 'React.js', 'SGBD'],
    },
    {
      id: 'etech-consulting',
      role: 'Développeur Full Stack Symfony / JavaScript',
      company: 'Société e-Tech consulting',
      period: 'Janvier 2022 - Janvier 2023',
      missions: [
        'Maintenance et développement du module de prise de rendez-vous (Agenda) d’une application web de prise de rendez-vous médicale en ligne (GPS Santé) en Symfony et JavaScript.',
        'Développement d’API dans une application web (Nanoé Madagascar) permettant de gérer la distribution des matériaux électriques dans les zones nord de Madagascar en Node.js.',
      ],
      technologies: ['Symfony', 'JavaScript', 'Node.js', 'API REST'],
    },
    {
      id: 'manao',
      role: 'Développeur PHP Laravel',
      company: 'Société MANAO',
      period: 'Février 2021 - Novembre 2021',
      missions: [
        'Développement et mise en place d’une API d’envoi de SMS mobile.',
        'Création d’une interface permettant de gérer les utilisateurs et les services en Laravel.',
      ],
      technologies: ['PHP', 'Laravel', 'API SMS', 'Gestion des utilisateurs'],
    },
  ],
  educations: [
    {
      id: 'master-2',
      degree: 'Diplôme de Master en Informatique',
      field: 'Parcours : Système d’Information Géomatique et Décision (SIGD)',
      institution: 'Université Nationale de Fianarantsoa — École de Management et Innovation Technologique (EMIT)',
      period: '2020 - 2021',
    },
    {
      id: 'master-1',
      degree: 'Première année en Master (M1)',
      field: 'Parcours : Système d’Information Géomatique et Décision (SIGD)',
      institution: 'École de Management et Innovation Technologique (EMIT)',
      period: '2018 - 2019',
    },
    {
      id: 'licence-3',
      degree: 'Diplôme de Licence en Informatique',
      institution: 'Université Nationale de Fianarantsoa — EMIT',
      period: '2017 - 2018',
    },
    {
      id: 'licence-2',
      degree: 'Deuxième année de Licence en Informatique',
      institution: 'Université Nationale de Fianarantsoa — EMIT',
      period: '2016 - 2017',
    },
    {
      id: 'licence-1',
      degree: 'Première année de Licence en Informatique',
      institution: 'Université Nationale de Fianarantsoa — EMIT',
      period: '2015 - 2016',
    },
    {
      id: 'bac',
      degree: 'Diplôme de Baccalauréat Série C',
      field: 'Enseignement général',
      institution: 'Lycée LRR Fianarantsoa',
      period: '2014 - 2015',
    },
  ],
  skillCategories: [
    {
      title: 'Back-End & API',
      skills: ['PHP / Laravel', 'Symfony', 'Node.js', 'Python', 'Architecture API REST'],
    },
    {
      title: 'Front-End & Technologies Web',
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3'],
    },
    {
      title: 'Bases de Données & Systèmes',
      skills: ['Maîtrise SGBD', 'Migration de données', 'Système d’exploitation', 'Réseau informatique'],
    },
    {
      title: 'Compétences Transversales',
      skills: ['Conception de projets', 'Déploiement applicatif', 'Créativité', 'Bureautique'],
    },
  ],
  languages: [
    { name: 'Malagasy', level: 'Langue maternelle' },
    { name: 'Français', level: 'Courant / Professionnel' },
    { name: 'Anglais', level: 'Technique / Professionnel' },
  ],
};
