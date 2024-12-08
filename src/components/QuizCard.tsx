import { cn } from '@/lib/utils';
import { Choice, Question } from '@/types/quiz';
import { motion } from 'framer-motion';

type QuizCardProps = {
  question: Question;
  onAnswer: (choice: Choice) => void;
  className?: string;
};

export function QuizCard({ question, onAnswer, className }: QuizCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={cn('w-full p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl', className)}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        {question.text}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.choices.map((choice) => {
          const Icon = choice.icon;
          return (
            <motion.button
              key={choice.id}
              onClick={() => onAnswer(choice)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon className="w-10 h-10 mb-4 text-gray-600 group-hover:text-pink-500 transition-colors" />
              <span className="text-base md:text-lg font-medium text-center text-gray-700 group-hover:text-gray-900">
                {choice.text}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}