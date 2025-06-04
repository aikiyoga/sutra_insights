'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { yoga_sutra_terminology } from '@/services/yoga_terms';
import { yoga_sutras } from '@/services/yoga_sutras'; // import all pada as needed
import SutraCard from "@/components/SutraCard";

export default function TermDetailPage() {
  const { term } = useParams();
  const { language } = useTheme();

  // Find the terminology entry
  const entry = yoga_sutra_terminology.find(
    (t) => t.term.toLowerCase() === decodeURIComponent(term as string).toLowerCase()
  );

  // Find related sutras by matching chapter & verse
  const relatedSutras: typeof yoga_sutras = [];
  if (entry) {

    relatedSutras.push(
      ...yoga_sutras.filter(
        (sutra) =>
          entry.refs.some(ref => sutra.chapter === ref.chapter && sutra.verse === ref.verse)
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
      <Link href="/terminology" className="text-blue-600 hover:underline inline-block mb-4"
        >
        {language === 'jp' ? '＜一覧へ戻る' : '< Back to List'}
      </Link>
      <div className="block p-4 rounded-lg shadow-xl"
      >
      <h1 className="text-2xl font-bold mb-2">{entry.term}</h1>
      <p className="mb-2 text-lg">
        <strong>{language === 'jp' ? '定義：' : 'Definition: '}</strong>
        {language === 'jp' ? entry.definition_jp : entry.definition}
      </p>
      <p className="mb-4 text-lg">
        <strong>{language === 'jp' ? '洞察：' : 'Insights: '}</strong>
        {language === 'jp' ? entry.insights_jp : entry.insights}
      </p>

      {relatedSutras.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            {language === 'jp' ? '関連するスートラ' : 'Related Sutras'}
          </h2>
          <div className="space-y-4">
            {relatedSutras.map((sutra) => (
              <SutraCard sutra={sutra} key={`sutra-${sutra.chapter}-${sutra.verse}`} />
            ))}
          </div>
        </div>
      )}
      {relatedSutras.length === 0 && (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            {language === 'jp' ? '関連するスートラはありません' : 'No Related Sutras'}
          </h2>
        </div> 
      )}
      </div>
    </div>
  );
}