import React from 'react';
import { Mail, Phone, Linkedin, ArrowRight, Terminal } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeroProps {
  profile: ProfileData;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/25 via-slate-950 to-slate-950" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-sm font-medium text-sky-300">
            <Terminal className="h-4 w-4" />
            <span>Disponible pour de nouvelles opportunités</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.fullName}
          </h1>

          <p className="mt-3 text-xl font-semibold text-sky-400 sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experiences"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              Découvrir mon parcours
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
            >
              <Linkedin className="h-4 w-4 text-sky-400" />
              LinkedIn
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-slate-800/80 pt-6 text-sm text-slate-400">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-sky-400">
              <Mail className="h-4 w-4 text-sky-400" />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-sky-400">
              <Phone className="h-4 w-4 text-sky-400" />
              {profile.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
