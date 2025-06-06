'use client';

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { yoga_sutra_terminology } from '@/services/yoga_terms';
import { yoga_sutras } from '@/services/yoga_sutras'; // import all pada as needed
import SutraCard from "@/components/SutraCard";

export default function TermDetailPage() {
  const params = useParams();
  const term = params.term;
  const { language } = useTheme();

  const searchParams = useSearchParams();
  const chapter = searchParams.get('chapter');
  const backtoChapter = (chapter && typeof chapter === 'string') ? parseInt(chapter, 10) : 0;
  const verse = searchParams.get('verse');

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
      {
        backtoChapter > 0 && (
          <Link href={`/chapter/${backtoChapter}?verse=${verse}#sutra-${backtoChapter}-${verse}`} className="text-blue-600 hover:underline inline-block mb-4 cursor-pointer"
          >
            {language === 'jp' ? `＜スートラ${backtoChapter}.${verse}に戻る` : `< Back to Sutra${backtoChapter}.${verse}`}
          </Link>
        )
      }
      {backtoChapter === 0 && (
        <Link href="/terminology" className="text-blue-600 hover:underline inline-block mb-4 cursor-pointer"
        >
          {language === 'jp' ? '＜一覧へ戻る' : '< Back to List'}
        </Link>
      )}
      <div className="block p-4 rounded-lg text-[var(--card-fg)] shadow-xl bg-gray-100 dark:bg-gray-800 max-w-4xl mx-auto">
        <h1 className={`${language === 'en' ? 'title' : 'title_jp'} text-3xl font-bold mb-2 flex items-center justify-center gap-4`}>
          <img src="/wave.png" alt="wave" className="h-8 w-8 inline-block" />
          <span>{language === 'jp' ? entry.term_jp : entry.term}</span>
          <img src="/wave.png" alt="wave" className="h-8 w-8 inline-block" />
        </h1>
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