'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

export default function Header() {
  const { theme, language, toggleTheme, setLanguage } = useTheme();

  return (
    <header className="py-2 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center text-2xl font-bold gap-2">
            <Image
              src={'/scroll_icon.png'}
              alt="Scroll Icon"
              width={48}
              height={48}
              style={{ minWidth: 32, minHeight: 32 }}
            />
            Sutra Insights
          </Link>
          <Link href="/" className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 gap-2">
            {language === 'jp' ? 'ホーム' : 'Home'}
          </Link>
          <Link href="/terminology" className="flex items-center text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
            {language === 'jp' ? '用語集' : 'Terminology'}
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              language === 'en'
                ? 'bg-[#008080E6] hover:bg-[#00a2a2] text-white'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            aria-label={`Switch to ${language === 'en' ? 'Japanese' : 'English'}`}
          >
            ENG
          </button>
          <button
            onClick={() => setLanguage('jp')}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              language === 'jp'
                ? 'bg-[#008080E6] hover:bg-[#00a2a2] text-white'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            aria-label={`Switch to ${language === 'en' ? 'Japanese' : 'English'}`}
          >
            JPN
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full"
            style={{ backgroundColor: 'var(--button)', visibility: 'hidden' }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}