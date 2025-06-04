'use client';

import { useState } from 'react';
import { Chapter, YogaSutra } from '@/services/yoga_sutras';
import SutraList from '@/components/SutraList';
import { useTheme } from '@/context/ThemeContext';
import ReactMarkdown from 'react-markdown';

export default function ChapterContent({ chapterId, chapter, sutras }: { chapterId: number; chapter: Chapter; sutras: YogaSutra[] }) {
  const { language } = useTheme();
  const [showDeepDive, setShowDeepDive] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">
        {language === 'en' ? `Chapter ${chapterId}: ${chapter?.title}`: `第${chapterId}章: ${chapter?.title_jp}`}
      </h1>
      <div className='mb-4 text-[var(--card-fg)] text-justify whitespace-pre-line break-words text-lg bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer'
      onClick={() => setShowDeepDive(!showDeepDive)}>
        {!showDeepDive && (
          <>
          <ReactMarkdown>{language === 'en' ? chapter?.summary : chapter?.summary_jp}</ReactMarkdown>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{language === 'en' ? 'Click to read more...' : 'クリックして詳細を読む...'}</p>
          </>
          )}
        {showDeepDive && <ReactMarkdown>{language === 'en' ? chapter?.deep_dive : chapter?.deep_dive_jp}</ReactMarkdown>}
      </div>
      <SutraList sutras={sutras} />
    </div>
  );
}
