import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Education } from '../types/portfolio';

interface EducationProps {
  educations: Education[];
}

export const EducationSection: React.FC<EducationProps> = ({ educations }) => {
  return (
    <section id="education" className="border-t border-slate-800/80 bg-slate-900/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/30">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Formations et Diplômes</h2>
            <p className="mt-1 text-slate-400">Parcours universitaire et académique</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 transition hover:border-sky-500/40"
            >
              <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-300">
                <Calendar className="h-3.5 w-3.5" />
                {edu.period}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">{edu.degree}</h3>
              {edu.field && <p className="mt-1 text-sm font-medium text-sky-400">{edu.field}</p>}
              <p className="mt-2 text-sm text-slate-400">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
