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
      className={cn('w-full p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl', className)}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          {question.text}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {question.choices.map((choice, index) => {
          const Icon = choice.icon;
          return (
            <motion.button
              key={choice.id}
              onClick={() => onAnswer(choice)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-pink-100/50"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Sparkle effects */}
              <div className="absolute top-2 right-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                ✨
              </div>
              <div className="absolute bottom-2 left-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                ✨
              </div>

              {/* Icon container with gradient background */}
              <div className="relative mb-4 p-4 rounded-xl bg-gradient-to-br from-pink-100/50 to-purple-100/50 group-hover:from-pink-200/50 group-hover:to-purple-200/50 transition-colors">
                <Icon className="w-10 h-10 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Choice text with gradient on hover */}
              <span className="relative text-lg md:text-xl font-medium text-center text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-300">
                {choice.text}
              </span>

              {/* Subtle label */}
              <span className="absolute bottom-3 text-xs text-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity">
                tap to choose
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}