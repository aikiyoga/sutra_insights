'use client';

import { useTheme } from '@/context/ThemeContext';
import { yoga_sutra_terminology } from '@/services/yoga_terms';
import Link from 'next/link';
import Image from 'next/image';

export default function TerminologyPage() {
  const { language } = useTheme();

  // Alphabetically sorted terms
  const terms = [...yoga_sutra_terminology].sort((a, b) =>
    a.term.localeCompare(b.term)
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 flex items-center justify-center">
        <Image
          src="/term_left.png"
          alt="Left scroll"
          width={48}
          height={48}
          className="inline-block w-12 h-12 mx-2"
          priority
        />
        <span className={`${language === 'en' ? 'title' : 'title_jp'} text-3xl font-bold text-center`}>
          {language === 'jp' ? 'ヨーガ用語集' : 'Yoga Sutra Terminology'}
        </span>
        <Image
          src="/term_right.png"
          alt="Right scroll"
          width={48}
          height={48}
          className="inline-block w-12 h-12 mx-2"
          priority
        />
      </h1>
      <p className="mb-6 text-md text-gray-500 dark:text-gray-400 text-center">
        {language === 'jp' ? 'この用語集は、ヨーガの基本的な用語を網羅しています。' : 'This terminology page includes the basic terms used in yoga.'}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {terms.map((term) => (
          <div
            key={term.term}
            className="p-4 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition cursor-pointer"
            style={{ backgroundColor: 'var(--card-bg)', color: 'var(--card-fg)' }}
          >
            <Link
              href={`/terminology/${encodeURIComponent(term.term)}`}
              className={`${language === 'en' ? 'title' : 'title_jp'} inline-flex items-center font-semibold text-lg align-middle`}
            >
              <Image
                src="/om_bullet.png"
                alt="Om bullet"
                width={20}
                height={20}
                className="inline-block mr-2"
                style={{ verticalAlign: 'middle' }}
              />
              <span className={`${language === 'en' ? 'title' : 'title_jp'} font-semibold text-lg align-middle`}>
                {language === 'jp' ? term.term_jp || term.term : term.term}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-4 text-md text-center text-gray-500 dark:text-gray-400">
        {language === 'jp' ? '不備や誤りを見つけたら、ぜひご連絡ください。' : 'Please let me knonw if you find any errors or have any suggestions.'}
      </p>
    </div>
  );
}
