'use client';

import { useTheme } from '@/context/ThemeContext';
import { yoga_sutra_terminology } from '@/services/yoga_terms';
import Link from 'next/link';

export default function TerminologyPage() {
  const { language } = useTheme();

  // Alphabetically sorted terms
  const terms = [...yoga_sutra_terminology].sort((a, b) =>
    a.term.localeCompare(b.term)
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {language === 'jp' ? 'ヨーガ用語集' : 'Yoga Sutra Terminology'}
      </h1>
      <ul className="space-y-2">
        {terms.map(({ term }) => (
          <li key={term}>
            <Link
              href={`/terminology/${encodeURIComponent(term)}`}
              className="text-blue-600 hover:underline"
            >
              {term}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}