import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  fullName: string;
}

const navItems = [
  { label: 'À propos', href: '#about' },
  { label: 'Expériences', href: '#experiences' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Formations', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ fullName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/30">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">{fullName}</span>
          <span className="sm:hidden">Sitraka R.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Me contacter
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-expanded={isOpen}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900 px-4 py-4 md:hidden">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
