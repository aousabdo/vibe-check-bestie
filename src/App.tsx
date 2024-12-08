import { useState } from 'react';
import { Choice, Result, ResultType } from './types/quiz';
import { questions, results } from './data/quiz-data';
import { QuizCard } from './components/QuizCard';
import { ResultCard } from './components/ResultCard';
import { Layout } from './components/Layout';
import { calculateResult } from './lib/quiz-utils';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState<Record<ResultType, number>>({
    minimalist: 0,
    glamorous: 0,
    artsy: 0,
    wanderlust: 0,
  });
  const [result, setResult] = useState<Result | null>(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(() => {
    return parseInt(localStorage.getItem('bestStreak') || '0');
  });
  const [resultDistribution, setResultDistribution] = useState(() => {
    const saved = localStorage.getItem('resultDistribution');
    return saved ? JSON.parse(saved) : {
      glamorous: 0,
      minimalist: 0,
      artsy: 0,
      wanderlust: 0
    };
  });

  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

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

    setStreak(prev => {
      const newStreak = prev + 1;
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
        localStorage.setItem('bestStreak', newStreak.toString());
      }
      return newStreak;
    });
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

  const handleResult = (resultType: ResultType) => {
    const newDistribution = {
      ...resultDistribution,
      [resultType]: resultDistribution[resultType] + 1
    };
    setResultDistribution(newDistribution);
    localStorage.setItem('resultDistribution', JSON.stringify(newDistribution));
    
    // Use distribution to influence next result
    const total = Object.values(newDistribution).reduce((a, b) => a + b, 0);
    const threshold = total / 4; // Ideal average
    
    if (newDistribution[resultType] > threshold * 1.5) {
      // If this result is overrepresented, adjust points calculation
      // in future quiz sessions
    }
  };

  return (
    <Layout showHeader={!result && currentQuestion === 0}>
      <AnimatePresence mode="wait">
        {!result ? (
          <>
            <div className="w-full mb-8">
              <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-pink-400 to-rose-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-center mt-2 text-sm text-gray-500">
                Question {currentQuestion + 1} of {totalQuestions}
              </p>
            </div>
            <QuizCard
              key={`question-${currentQuestion}`}
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
            />
          </>
        ) : (
          <ResultCard key="result" result={result} onReset={resetQuiz} />
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;