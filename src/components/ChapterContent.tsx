'use client';

import { useState } from 'react';
import { Chapter, YogaSutra } from '@/services/yoga_sutras';
import SutraList from '@/components/SutraList';
import { useTheme } from '@/context/ThemeContext';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function ChapterContent({ chapterId, chapter, sutras }: { chapterId: number; chapter: Chapter; sutras: YogaSutra[] }) {
  const { language } = useTheme();
  const [showDeepDive, setShowDeepDive] = useState(false);

    
  const searchParams = useSearchParams();
  const verseParam = searchParams.get('verse');
  const verseNum = (verseParam && typeof verseParam === 'string') ? parseInt(verseParam, 10) : 0;

  return (
    <div className="max-w-4xl mx-auto">
      
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
        {language === 'en' ? `Chapter ${chapterId}: ${chapter?.title}`: `第${chapterId}章: ${chapter?.title_jp}`}
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

      <div className='mb-4 text-[var(--foreground)] text-justify whitespace-pre-line break-words text-lg bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer'
      onClick={() => setShowDeepDive(!showDeepDive)}>
        {!showDeepDive && (
          <>
          <ReactMarkdown>{language === 'en' ? chapter?.summary : chapter?.summary_jp}</ReactMarkdown>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{language === 'en' ? 'Click to read more...' : 'クリックして詳細を読む...'}</p>
          </>
          )}
        {showDeepDive && <ReactMarkdown>{language === 'en' ? chapter?.deep_dive : chapter?.deep_dive_jp}</ReactMarkdown>}
      </div>
      <SutraList sutras={sutras} showWho={verseNum} />
    </div>
  );
}
