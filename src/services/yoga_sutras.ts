import { yoga_sutras_samadhi_pada } from "./sutra_ch01";
import { yoga_sutras_sadhana_pada } from "./sutra_ch02";
import { yoga_sutras_vibhuti_pada } from "./sutra_ch03";
import { yoga_sutras_kaivalya_pada } from "./sutra_ch04";
import { chapters } from "./sutra_chapter_titles";

export interface Term {
  term: string;
  ref?: string;
}

export interface NoteRow {
  key: Term;
  note: string;
}

// Define a type for the verse structure (optional, but good practice)
export interface YogaSutra {
  chapter: number;
  verse: number;
  text: string; // Original Sanskrit text
  importance: number; // Subjective importance out of 10
  translation: string; // English translation
  translation_jp: string; // Japanese translation
  insights: string; // Philosophical insights in English
  insights_jp: string; // Philosophical insights in Japanese
  notes?: NoteRow[]; // Optional array of notes
  notes_jp?: NoteRow[]; // Optional array of notes in Japanese
}

export interface Chapter {
  id: number;
  title: string;
  title_jp: string;
  description: string;
  description_jp: string;
  summary: string;
  summary_jp: string;
  deep_dive: string;
  deep_dive_jp: string;
}

const sutrasArray = [
  ...yoga_sutras_samadhi_pada,
  ...yoga_sutras_sadhana_pada,
  ...yoga_sutras_vibhuti_pada,
  ...yoga_sutras_kaivalya_pada
];

export const yoga_sutras : YogaSutra[] = sutrasArray.flat();
export const yoga_sutra_chapters : Chapter[] = chapters;

export const yoga_sutra_title: string = "Yoga Sutras of Patanjali";
export const yoga_sutra_title_jp: string = "パタンジャリのヨーガ・スートラ";