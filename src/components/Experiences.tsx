import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { Experience } from '../types/portfolio';

interface ExperiencesProps {
  experiences: Experience[];
}

export const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  return (
    <section id="experiences" className="border-t border-slate-800/80 bg-slate-900/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/30">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Expériences Professionnelles</h2>
            <p className="mt-1 text-slate-400">Projets web, API et architectures livrés en entreprise</p>
          </div>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-slate-700 before:to-transparent">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-slate-950 bg-sky-500 text-slate-950 shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase className="h-4 w-4" />
              </div>

              <div className="w-[calc(100%-4rem)] rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-sm transition hover:border-sky-500/40 md:w-[calc(50%-2.5rem)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-300">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">{exp.role}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-sm font-medium text-slate-400">
                  <Building2 className="h-4 w-4 text-sky-400" />
                  <span>{exp.company}</span>
                </div>

                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-300">
                  {exp.missions.map((mission, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
