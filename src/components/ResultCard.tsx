import { cn } from '@/lib/utils';
import { Result } from '@/types/quiz';
import { Download, Share2 } from 'lucide-react';
import { useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { generateShareText } from '@/lib/quiz-utils';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

type ResultCardProps = {
  result: Result;
  onReset: () => void;
  className?: string;
};

// Alternative confetti function if the import still fails
const triggerConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 1000,
  };

  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
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

  useEffect(() => {
    try {
      triggerConfetti();
    } catch (error) {
      console.error('Confetti error:', error);
    }
  }, []);

  const shareResult = () => {
    const text = generateShareText(result.title);
    const shareData = {
      title: 'My Aesthetic Vibe ✨',
      text,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(`${text}\n${window.location.href}`);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn('w-full max-w-3xl mx-auto', className)}
    >
      <div
        ref={cardRef}
        className={cn(
          'relative overflow-hidden rounded-3xl shadow-2xl p-10 text-white bg-gradient-to-br',
          result.gradient
        )}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative space-y-8">
          <div className="w-20 h-20 mx-auto bg-white/20 rounded-full p-4 backdrop-blur-sm ring-4 ring-white/30">
            <Icon className="w-full h-full" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 font-serif">
              You're a{' '}
              <span className="bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                {result.title}
              </span>
              !
            </h2>
            <p className="text-xl md:text-2xl text-center leading-relaxed font-light">
              {result.description}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-6 items-center"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResult}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all shadow-lg hover:shadow-xl group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Save Your Aesthetic</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={shareResult}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all shadow-lg hover:shadow-xl group"
              >
                <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Share with Besties</span>
              </motion.button>
            </div>
            <p className="text-lg opacity-90 text-center font-light italic px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm">
              {generateShareText(result.title)}
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-center space-y-4"
      >
        <button
          onClick={onReset}
          className="text-base text-gray-600 hover:text-pink-500 transition-colors hover:underline decoration-wavy decoration-pink-300 underline-offset-4"
        >
          ✨ Take the quiz again ✨
        </button>
        <p className="text-sm text-gray-400">
          Share this quiz with your bestie to see if you're aesthetic twins! 👯‍♀️
        </p>
      </motion.div>
    </motion.div>
  );
}