'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const { theme, language, toggleTheme, setLanguage } = useTheme();

  return (
    <header className="py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Sutra Insights
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'jp' : 'en')}
            className="px-3 py-1 rounded-md"
            style={{ backgroundColor: 'var(--button)' }}
            aria-label={`Switch to ${language === 'en' ? 'Japanese' : 'English'}`}
          >
            {language === 'en' ? '日本語' : 'English'}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full"
            style={{ backgroundColor: 'var(--button)' }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}