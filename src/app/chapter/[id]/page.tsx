import { yoga_sutras, yoga_sutra_chapters } from '@/services/yoga_sutras';
import ChapterContent from '@/components/ChapterContent';
import { Suspense } from 'react';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default async function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapterId = parseInt(id);
  const chapterSutras = yoga_sutras.filter(sutra => sutra.chapter === chapterId);
  const chapter = yoga_sutra_chapters.find(chapter => chapter.id === chapterId);

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChapterContent chapterId={chapterId} chapter={chapter} sutras={chapterSutras} />
    </Suspense>
  );
}
