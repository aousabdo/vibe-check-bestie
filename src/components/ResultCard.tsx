import { cn } from '@/lib/utils';
import { Result } from '@/types/quiz';
import { Download, Share2 } from 'lucide-react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { generateShareText } from '@/lib/quiz-utils';
import { motion } from 'framer-motion';

type ResultCardProps = {
  result: Result;
  onReset: () => void;
  className?: string;
};

export function ResultCard({ result, onReset, className }: ResultCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadResult = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement('a');
    link.download = `my-influencer-aesthetic.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const Icon = result.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn('w-full', className)}
    >
      <div
        ref={cardRef}
        className={cn(
          'relative overflow-hidden rounded-2xl shadow-xl p-8 text-white bg-gradient-to-br',
          result.gradient
        )}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-[1px]" />
        <div className="relative space-y-6">
          <Icon className="w-16 h-16 mx-auto mb-6" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            You're a {result.title}!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-center mb-8 opacity-90"
          >
            {result.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-4 items-center"
          >
            <div className="flex gap-3">
              <button
                onClick={downloadResult}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Save Result</span>
              </button>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'My Influencer Aesthetic',
                      text: generateShareText(result.title),
                      url: window.location.href,
                    });
                  }
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all hover:scale-105"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
            <p className="text-sm opacity-75 text-center">
              {generateShareText(result.title)}
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <button
          onClick={onReset}
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors hover:underline"
        >
          Take the quiz again
        </button>
      </motion.div>
    </motion.div>
  );
}