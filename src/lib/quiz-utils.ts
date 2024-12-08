import { ResultType } from '@/types/quiz';

export function calculateResult(points: Record<ResultType, number>): ResultType {
  return Object.entries(points).reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0] as ResultType;
}

export function generateShareText(title: string): string {
  return `I got ${title} in the Influencer Aesthetic Quiz! ✨ Find out your style!`;
}