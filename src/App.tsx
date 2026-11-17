//import React from 'react';
import { profileData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experiences } from './components/Experiences';
import { Skills } from './components/Skills';
import { EducationSection } from './components/Education';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar fullName={profileData.fullName} />
      <main className="flex-grow">
        <Hero profile={profileData} />
        <Experiences experiences={profileData.experiences} />
        <Skills categories={profileData.skillCategories} languages={profileData.languages} />
        <EducationSection educations={profileData.educations} />
        <Contact profile={profileData} />
      </main>
      <footer className="border-t border-slate-800/80 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} {profileData.fullName}. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
