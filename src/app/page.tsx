import Link from 'next/link';
import { Chapter, yoga_sutra_chapters } from '@/services/yoga_sutras';
import ChapterList from '@/components/ChapterList';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">Yoga Sutras of Patanjali</h1>
      <ChapterList chapters={yoga_sutra_chapters} />
    </div>
  );
}
