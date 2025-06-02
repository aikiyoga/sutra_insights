import { yoga_sutras } from '@/services/yoga_sutras';
import SutraList from '@/components/SutraList';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

const chapterNames = {
  1: 'Samadhi Pada',
  2: 'Sadhana Pada',
  3: 'Vibhuti Pada',
  4: 'Kaivalya Pada',
};

export default async function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapterId = parseInt(id);
  const chapterSutras = yoga_sutras.filter(sutra => sutra.chapter === chapterId);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Chapter {chapterId}: {chapterNames[chapterId as keyof typeof chapterNames]}
      </h1>
      <SutraList sutras={chapterSutras} />
    </div>
  );
}
