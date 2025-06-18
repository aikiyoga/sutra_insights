'use client';

import { useState } from 'react';
import { NoteRow, Term, YogaSutra } from '@/services/yoga_sutras';
import { useTheme } from '@/context/ThemeContext';
import ReactMarkdown from 'react-markdown';

export default function SutraCard({ sutra, showThis = false }: { sutra: YogaSutra; showThis?: boolean }) {
  const { language } = useTheme();
  const [showInsights, setShowInsights] = useState(showThis);

  const importanceColor = (importance: number) => {
    const r = Math.min(255, importance * 25);
    const g = Math.min(255, (10 - importance) * 25);
    return `rgba(${r}, ${g}, 0, 0.8)`;
  };

  const verseLabel = (chapter: number, verse: number) => {
    return `${chapter}.${verse}`;
  };

  const importanceText = (importance: number) => {
    return language === 'en' ? `Importance: ${importance}/10` : `重要度: ${importance}/10`;
  };

  const term = (term: Term) => {
    return term.ref ? (
      <a href={`/terminology/${term.ref}?chapter=${sutra.chapter}&verse=${sutra.verse}`} className="text-blue-500 hover:underline">
        {term.term}
      </a>
    ) : (
      term.term
    );
  }
  const notes = (notes: NoteRow[]) => {
    return notes.map((note, index) => (
      <li key={index}>
        <strong>{term(note.key)}</strong>: {note.note}
      </li>
    ));
  };

  return (
      <div 
        className="p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
        style={{ backgroundColor: 'var(--card-bg)' }}
        onClick={() => setShowInsights(!showInsights)}
        id={`sutra-${sutra.chapter}-${sutra.verse}`}
      >
        <div className="flex items-center mb-3">
          <h3 className="text-2xl font-bold mr-4 title" style={{ color: 'var(--card-fg)' }}>{verseLabel(sutra.chapter, sutra.verse)}</h3>
            <p className="sanskrit-term text-lg italic" style={{ color: 'var(--card-fg)' }}>{sutra.text}</p>
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center ml-auto mr-2">
              <span className="inline-block w-2 h-2 rounded-full mr-1" 
                style={{ 
                  backgroundColor: importanceColor(sutra.importance) 
                }}
              />
              {importanceText(sutra.importance)}
              
            </div>
        </div>
          
          <div style={{ color: 'var(--card-fg)' }}>
            <ReactMarkdown>{language === 'en' ? sutra.translation : sutra.translation_jp}</ReactMarkdown>
          </div>
          
          {!showInsights && (
            <p className="text-sm text-gray-400 dark:text-gray-400 mt-2">
              {language === 'en' ? 'Click to read insights...' : 'クリックして洞察を読む...'}
            </p>
          )}
          {showInsights && (
            ((language === 'en' && sutra.insights) || 
              (language === 'jp' && sutra.insights_jp)) && (
              <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg" style={{ color: 'var(--foreground)' }}>
                <h4 className="font-bold mb-1">{language === 'en' ? 'Insights' : '洞察'}</h4>
                <ReactMarkdown>{language === 'en' ? sutra.insights : sutra.insights_jp}</ReactMarkdown>
              </div>
            )
          )}
          {showInsights && (
            ((language === 'en' && sutra.notes) || 
              (language === 'jp' && sutra.notes_jp)) && (
              <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg" style={{ color: 'var(--foreground)' }}>
                <h4 className="font-bold mb-1">{language === 'en' ? 'Notes' : 'ノート'}</h4>
                <ul>
                  {language === 'en' && sutra.notes ? (
                    notes(sutra.notes)
                  ) : (sutra.notes_jp && (
                    notes(sutra.notes_jp)
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
  );
}
