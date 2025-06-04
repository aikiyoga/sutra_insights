'use client';

import Link from 'next/link';
import { Chapter } from '@/services/yoga_sutras';
import { useTheme } from '@/context/ThemeContext';

export default function ChapterList({ chapters }: { chapters: Chapter[] }) {
  const { language } = useTheme();

  const chapterTitle = (chapter: Chapter) => {
    return language === 'en' ? `Chapter ${chapter.id}: ${chapter.title}` : `第${chapter.id}章: ${chapter.title_jp}`;
  };

  const chapterDescription = (chapter: Chapter) => {
    return language === 'en' ? chapter.description : chapter.description_jp;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {chapters.map((chapter) => (
        <Link 
          key={chapter.id} 
          href={`/chapter/${chapter.id}`}
          className="block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          style={{ backgroundColor: 'var(--card-bg)', color: 'var(--card-fg)' }}
        >
          <h2 className="text-xl font-bold mb-2">{chapterTitle(chapter)}</h2>
          <p>{chapterDescription(chapter)}</p>
        </Link>
      ))}
    </div>
  );
}