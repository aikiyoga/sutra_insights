'use client';

import Link from 'next/link';
import { Chapter } from '@/services/yoga_sutras';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

export default function ChapterList({ chapters }: { chapters: Chapter[] }) {
  const { language } = useTheme();

  const chapterTitle = (chapter: Chapter) => {
    return language === 'en' ? `Chapter ${chapter.id}: ${chapter.title}` : `第${chapter.id}章: ${chapter.title_jp}`;
  };

  const chapterDescription = (chapter: Chapter) => {
    return language === 'en' ? chapter.description : chapter.description_jp;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
      {chapters.map((chapter) => (
        <Link
          key={chapter.id}
          href={`/chapter/${chapter.id}`}
          className="block p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          style={{ backgroundColor: 'var(--card-bg)', color: 'var(--card-fg)' }}
        >
          <div className="flex items-center">
            <Image
              src="/chapter_roll.png"
              alt="chapter roll"
              width={32}
              height={32}
              className="inline-block h-12 w-12 -my-8"
            />
            <h2 className={`${language === 'en' ? 'title' : 'title_jp'} text-xl font-bold mb-2 my-2`}>
              {chapterTitle(chapter)}
            </h2>
          </div>
          <p className="inline-block text-lg mx-12">{chapterDescription(chapter)}</p>
        </Link>

      ))}
    </div>
  );
}