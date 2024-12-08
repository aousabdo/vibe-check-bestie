import { useState } from 'react';
import { Choice, Result, ResultType } from './types/quiz';
import { questions, results } from './data/quiz-data';
import { QuizCard } from './components/QuizCard';
import { ResultCard } from './components/ResultCard';
import { Layout } from './components/Layout';
import { calculateResult } from './lib/quiz-utils';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState<Record<ResultType, number>>({
    minimalist: 0,
    glamorous: 0,
    artsy: 0,
    wanderlust: 0,
  });
  const [result, setResult] = useState<Result | null>(null);

  const handleAnswer = (choice: Choice) => {
    const newPoints = { ...points };
    Object.entries(choice.points).forEach(([type, value]) => {
      newPoints[type as ResultType] += value;
    });
    setPoints(newPoints);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const resultType = calculateResult(newPoints);
      setResult(results[resultType]);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setPoints({
      minimalist: 0,
      glamorous: 0,
      artsy: 0,
      wanderlust: 0,
    });
    setResult(null);
  };

  return (
    <Layout showHeader={!result && currentQuestion === 0}>
      <AnimatePresence mode="wait">
        {!result ? (
          <QuizCard
            key={`question-${currentQuestion}`}
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        ) : (
          <ResultCard key="result" result={result} onReset={resetQuiz} />
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;