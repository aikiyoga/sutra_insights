'use client';

import { Chapter, YogaSutra } from '@/services/yoga_sutras';
import SutraList from '@/components/SutraList';
import { useTheme } from '@/context/ThemeContext';

export default function ChapterContent({ chapterId, chapter, sutras }: { chapterId: number; chapter: Chapter; sutras: YogaSutra[] }) {
  const { language } = useTheme();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">
        {language === 'en' ? `Chapter ${chapterId}: ${chapter?.title}`: `第${chapterId}章: ${chapter?.title_jp}`}
      </h1>
      <SutraList sutras={sutras} />
    </div>
  );
}