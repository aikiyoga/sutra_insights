'use client';

import { YogaSutra } from '@/services/yoga_sutras';
import SutraCard from './SutraCard';

export default function SutraList({ sutras }: { sutras: YogaSutra[] }) {

  return (
    <div className="space-y-4 mt-6">
      {sutras.map((sutra) => (
        <SutraCard key={`${sutra.chapter}-${sutra.verse}`} sutra={sutra} />
      ))}
    </div>
  );
}