import { yoga_sutras_samadhi_pada } from "./sutra_ch01";
import { yoga_sutras_sadhana_pada } from "./sutra_ch02";
import { yoga_sutras_vibhuti_pada } from "./sutra_ch03";
import { yoga_sutras_kaivalya_pada } from "./sutra_ch04";

// Define a type for the verse structure (optional, but good practice)
export interface YogaSutra {
  chapter: number;
  verse: number;
  text: string; // Original Sanskrit text
  importance: number; // Subjective importance out of 10
  translation: string; // English translation
  translation_jp: string; // Japanese translation
  insights?: string; // Philosophical insights in English
  insights_jp?: string; // Philosophical insights in Japanese
}

const sutrasArray = [
  ...yoga_sutras_samadhi_pada,
  ...yoga_sutras_sadhana_pada,
  ...yoga_sutras_vibhuti_pada,
  ...yoga_sutras_kaivalya_pada
];

export const yoga_sutras : YogaSutra[] = sutrasArray.flat();
