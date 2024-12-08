import { ResultType } from '@/types/quiz';

export function calculateResult(points: Record<ResultType, number>): ResultType {
  const entries = Object.entries(points);
  const maxScore = Math.max(...entries.map(([_, score]) => score));
  
  // Make threshold smaller for more distinct results
  const topResults = entries.filter(([_, score]) => maxScore - score <= 1);
  
  if (topResults.length > 1) {
    // Add slight randomization for very close scores
    const total = topResults.reduce((sum, [_, score]) => sum + score, 0);
    const random = Math.random() * total;
    
    let sum = 0;
    for (const [type, score] of topResults) {
      sum += score;
      if (random <= sum) {
        return type as ResultType;
      }
    }
  }
  
  return entries.reduce((a, b) => a[1] > b[1] ? a : b)[0] as ResultType;
}

export function generateShareText(title: string): string {
  return `I got ${title} in the Influencer Aesthetic Quiz! ✨ Find out your style!`;
}