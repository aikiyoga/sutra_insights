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
      <p className="mb-4 text-md text-gray-500 dark:text-gray-400">
        {language === 'jp' ? 'この用語集は、ヨーガの基本的な用語を網羅しています。' : 'This terminology page includes the basic terms used in yoga.'}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {terms.map((term) => (
          <div
            key={term.term}
            className="p-4 rounded shadow hover:shadow-lg hover:bg-gray-100 transition cursor-pointer"
            style={{ backgroundColor: 'var(--card-bg)', color: 'var(--card-fg)' }}
          >
            <Link href={`/terminology/${encodeURIComponent(term.term)}`} 
            className="block font-semibold">
              {language === 'jp' ? term.term_jp || term.term : term.term}
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-4 text-md text-gray-500 dark:text-gray-400">
        {language === 'jp' ? '不備や誤りを見つけたら、ぜひご連絡ください。' : 'Please let me knonw if you find any errors or have any suggestions.'}
      </p>
    </div>
  );
}
