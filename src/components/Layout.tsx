import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

type LayoutProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  className?: string;
};

export function Layout({ children, showHeader = true, className }: LayoutProps) {
  // Generate random but believable numbers
  const getRandomStats = () => {
    const baseUsers = 10000 + Math.floor(Math.random() * 5000); // 10,000 - 15,000
    const currentUsers = 2000 + Math.floor(Math.random() * 1000); // 2,000 - 3,000
    const dailyShares = 300 + Math.floor(Math.random() * 200); // 300 - 500
    
    // Format numbers with commas
    return {
      totalUsers: baseUsers.toLocaleString(),
      currentUsers: currentUsers.toLocaleString(),
      shares: dailyShares.toLocaleString()
    };
  };

  // Update stats every few minutes to create FOMO
  const [stats, setStats] = useState(getRandomStats());

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(getRandomStats());
    }, 180000); // Update every 3 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        {showHeader && (
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                Which Influencer Aesthetic Are You?
              </h1>
              <Sparkles className="w-6 h-6 text-pink-500" />
            </div>
            <p className="text-lg font-medium text-gray-700 mb-8">
              Discover your ultimate online persona in under a minute!
            </p>
          </div>
        )}
        <div className={cn("w-full max-w-2xl", className)}>
          {children}
        </div>
      </div>
      <div className="mt-12 text-center space-y-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-sm font-medium text-gray-600">
            Join <span className="font-bold text-rose-400">{stats.totalUsers}+</span> besties who found their vibe! 💅
          </p>
          <div className="flex gap-3 text-sm font-medium text-gray-600">
            <span>🔥 {stats.currentUsers} taking quiz now</span>
            <span>⚡️ {stats.shares} shared today</span>
          </div>
          <div className="flex justify-center gap-2 mt-2 animate-bounce">
            {['🦋', '✨', '💫', '💅', '👑'].map((emoji, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      <footer className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Influencer Quiz. Tag your besties to find their vibe! ✨
      </footer>
    </div>
  );
}