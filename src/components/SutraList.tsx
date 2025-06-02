'use client';

import { YogaSutra } from '@/services/yoga_sutras';
import { useTheme } from '@/context/ThemeContext';

export default function SutraList({ sutras }: { sutras: YogaSutra[] }) {
  const { language } = useTheme();

  return (
    <div className="space-y-8 mt-6">
      {sutras.map((sutra) => (
        <div 
          key={`${sutra.chapter}-${sutra.verse}`}
          className="p-6 rounded-lg shadow-md"
          style={{ backgroundColor: 'rgba(var(--button-rgb), 0.1)' }}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">Verse {sutra.verse}</h3>
            <span className="text-sm px-2 py-1 rounded-full" style={{ backgroundColor: 'var(--button)' }}>
              Importance: {sutra.importance}/10
            </span>
          </div>
          
          <div className="mb-4">
            <h4 className="font-mono text-lg mb-1">Sanskrit</h4>
            <p className="italic">{sutra.text}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-bold mb-1">Translation</h4>
            <p>{language === 'en' ? sutra.translation : sutra.translation_jp}</p>
          </div>
          
          {((language === 'en' && sutra.insights) || 
            (language === 'jp' && sutra.insights_jp)) && (
            <div>
              <h4 className="font-bold mb-1">Insights</h4>
              <p>{language === 'en' ? sutra.insights : sutra.insights_jp}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}