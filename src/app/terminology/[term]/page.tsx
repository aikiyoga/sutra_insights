'use client';

import { useParams } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { yoga_sutra_terminology } from '@/services/yoga_terms';
import { yoga_sutras } from '@/services/yoga_sutras'; // import all pada as needed

export default function TermDetailPage() {
  const { term } = useParams();
  const { language } = useTheme();

  // Find the terminology entry
  const entry = yoga_sutra_terminology.find(
    (t) => t.term.toLowerCase() === decodeURIComponent(term as string).toLowerCase()
  );

  // Find related sutras by matching chapter & verse
  const relatedSutras = [];
  if (entry) {

    relatedSutras.push(
      ...yoga_sutras.filter(
        (sutra) =>
          entry.chapter &&
          entry.verse &&
          sutra.chapter === entry.chapter &&
          sutra.verse === entry.verse
      )
    );
  }

  if (!entry) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold">Term Not Found</h1>
        <p>The requested term does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{entry.term}</h1>
      <p className="mb-2">
        <strong>{language === 'jp' ? '定義：' : 'Definition: '}</strong>
        {language === 'jp' ? entry.definition_jp : entry.definition}
      </p>
      <p className="mb-4">
        <strong>{language === 'jp' ? '洞察：' : 'Insights: '}</strong>
        {language === 'jp' ? entry.insights_jp : entry.insights}
      </p>

      {relatedSutras.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            {language === 'jp' ? '関連するスートラ' : 'Related Sutras'}
          </h2>
          <ul className="space-y-2">
            {relatedSutras.map((sutra) => (
              <li key={`sutra-${sutra.chapter}-${sutra.verse}`} className="border rounded p-2">
                <div>
                  <strong>
                    {language === 'jp'
                      ? `第${sutra.chapter}章 ${sutra.verse}節`
                      : `Chapter ${sutra.chapter}, Verse ${sutra.verse}`}
                  </strong>
                </div>
                <div>
                  {language === 'jp' ? sutra.translation_jp : sutra.translation}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}