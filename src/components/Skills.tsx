import React from 'react';
import { Cpu, Globe2 } from 'lucide-react';
import { SkillCategory, Language } from '../types/portfolio';

interface SkillsProps {
  categories: SkillCategory[];
  languages: Language[];
}

export const Skills: React.FC<SkillsProps> = ({ categories, languages }) => {
  return (
    <section id="skills" className="border-t border-slate-800/80 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/30">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Compétences & Langues</h2>
            <p className="mt-1 text-slate-400">Technologies maîtrisées et environnement technique</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-sky-500/40"
            >
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex items-center gap-2.5 text-lg font-semibold text-white">
            <Globe2 className="h-5 w-5 text-sky-400" />
            <h3>Langues</h3>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3"
              >
                <span className="font-medium text-white">{lang.name}</span>
                <span className="text-xs font-medium text-sky-400">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
