'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-opacity-80 transition-all duration-300"
      style={{
        backgroundColor: 'var(--header-bg)',
        borderColor: 'var(--header-border)',
      }}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gpu-accelerated">
        <h1 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 whitespace-nowrap">
          DevOps Portfolio
        </h1>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-6 text-sm font-semibold">
            <Link
              href="#skills"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Skills
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-md border border-neutral-300 dark:border-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-500 transition"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t overflow-hidden"
            style={{ borderColor: 'var(--header-border)' }}
          >
            <div className="px-4 py-4 space-y-3 font-semibold">
              <Link
                href="#skills"
                onClick={closeMenu}
                className="block py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                onClick={closeMenu}
                className="block py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                onClick={closeMenu}
                className="block py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="block py-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
