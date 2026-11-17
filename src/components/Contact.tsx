import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ContactProps {
  profile: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Recruteur - ${name}`);
    const body = encodeURIComponent(`Nom : ${name}
Email : ${email}

Message :
${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-slate-800/80 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Prenons Contact</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Vous êtes recruteur ou porteur de projet ? N’hésitez pas à me contacter directement par e-mail, téléphone ou via LinkedIn pour discuter d’une opportunité.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">E-mail</p>
                  <p className="font-medium text-white">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Téléphone</p>
                  <p className="font-medium text-white">{profile.phone}</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-500/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">LinkedIn</p>
                  <p className="font-medium text-white">sitraka-evariste-rasolohery</p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-white">Envoyer un message rapide</h3>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                  Votre nom ou entreprise
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex. Jean Dupont - RH Tech"
                  className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Votre adresse e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="recruteur@entreprise.com"
                  className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Bonjour Sitraka, nous avons une opportunité Full Stack..."
                  className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                <Send className="h-4 w-4" />
                Ouvrir dans ma messagerie
              </button>

              {submitted && (
                <p className="flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle className="h-4 w-4" />
                  Votre client mail a été ouvert avec le message pré-rempli.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
