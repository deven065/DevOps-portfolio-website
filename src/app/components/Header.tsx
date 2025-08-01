'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: 'var(--header-bg)',
        borderColor: 'var(--header-border)',
      }}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 whitespace-nowrap">
          DevOps Portfolio
        </h1>

        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex gap-6 text-sm font-semibold">
            <Link
              href="#about"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-md border border-neutral-300 dark:border-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-500 transition"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
