import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

type LayoutProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  className?: string;
};

export function Layout({ children, showHeader = true, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        {showHeader && (
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Which Influencer Aesthetic Are You?
              </h1>
              <Sparkles className="w-6 h-6 text-pink-500" />
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Discover your ultimate online persona in under a minute!
            </p>
          </div>
        )}
        <div className={cn("w-full max-w-2xl", className)}>
          {children}
        </div>
      </div>
      <footer className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Influencer Quiz. Tag your besties to find their vibe! ✨
      </footer>
    </div>
  );
}