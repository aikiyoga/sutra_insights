'use client';

import Link from 'next/link';
import { Chapter, yoga_sutra_chapters } from '@/services/yoga_sutras';
import { yoga_sutra_title, yoga_sutra_title_jp } from '@/services/yoga_sutras';
import ChapterList from '@/components/ChapterList';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const { language } = useTheme();

  const title = language === 'en' ? yoga_sutra_title : yoga_sutra_title_jp;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>
      <ChapterList chapters={yoga_sutra_chapters} />
    </div>
  );
}
