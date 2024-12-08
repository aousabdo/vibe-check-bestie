import { ResultType } from '@/types/quiz';

export function calculateResult(points: Record<ResultType, number>): ResultType {
  // Add some randomization when scores are close
  const entries = Object.entries(points);
  const maxScore = Math.max(...entries.map(([_, score]) => score));
  
  // Get all results within 2 points of max score
  const topResults = entries.filter(([_, score]) => maxScore - score <= 2);
  
  if (topResults.length > 1) {
    // If scores are close, randomly pick from top results with weighted probability
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
  
  // Otherwise return the highest score
  return entries.reduce((a, b) => a[1] > b[1] ? a : b)[0] as ResultType;
}

export function generateShareText(title: string): string {
  return `I got ${title} in the Influencer Aesthetic Quiz! ✨ Find out your style!`;
}