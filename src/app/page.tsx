'use client';

import Link from 'next/link';
import { Chapter, yoga_sutra_chapters } from '@/services/yoga_sutras';
import { yoga_sutra_title, yoga_sutra_title_jp } from '@/services/yoga_sutras';
import ChapterList from '@/components/ChapterList';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

export default function Home() {
  const { language } = useTheme();

  const title = language === 'en' ? yoga_sutra_title : yoga_sutra_title_jp;

  return (
    <div className="flex flex-col items-center">

<h1 className="mb-6 flex items-center justify-center">
        <Image
          src="/term_left.png"
          alt="Left scroll"
          width={48}
          height={48}
          className="inline-block w-12 h-12 mx-2"
          priority
        />
        <span className={`${language === 'en' ? 'title' : 'title_jp'} text-3xl font-bold text-center`}>
        {title}
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

      <ChapterList chapters={yoga_sutra_chapters} />
    </div>
  );
}
