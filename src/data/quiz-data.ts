import { Question, Result } from '@/types/quiz';
import { Camera, Coffee, Flower2, Gem, Heart, Home, Music, Palette, Plane, Sparkles, Sunset, Waves } from 'lucide-react';

export const questions: Question[] = [
  {
    id: 'weekend',
    text: 'Pick your perfect weekend vibe:',
    choices: [
      {
        id: 'photoshoot',
        text: 'A glam photoshoot',
        icon: Camera,
        points: { glamorous: 3, minimalist: 0, artsy: 1, wanderlust: 1 }
      },
      {
        id: 'cafe',
        text: 'A café date with friends',
        icon: Coffee,
        points: { glamorous: 1, minimalist: 2, artsy: 1, wanderlust: 0 }
      },
      {
        id: 'festival',
        text: 'A music festival',
        icon: Music,
        points: { glamorous: 1, minimalist: 0, artsy: 2, wanderlust: 2 }
      },
      {
        id: 'spa',
        text: 'Spa day at home',
        icon: Home,
        points: { glamorous: 1, minimalist: 3, artsy: 0, wanderlust: 0 }
      }
    ]
  },
  {
    id: 'aesthetic',
    text: 'Choose your feed aesthetic:',
    choices: [
      {
        id: 'minimal',
        text: 'Clean & minimal',
        icon: Waves,
        points: { glamorous: 0, minimalist: 3, artsy: 1, wanderlust: 0 }
      },
      {
        id: 'colorful',
        text: 'Bold & colorful',
        icon: Palette,
        points: { glamorous: 1, minimalist: 0, artsy: 3, wanderlust: 1 }
      },
      {
        id: 'luxe',
        text: 'Luxe & glamorous',
        icon: Sparkles,
        points: { glamorous: 3, minimalist: 0, artsy: 0, wanderlust: 1 }
      },
      {
        id: 'nature',
        text: 'Nature & adventure',
        icon: Sunset,
        points: { glamorous: 0, minimalist: 1, artsy: 1, wanderlust: 3 }
      }
    ]
  },
  {
    id: 'content',
    text: 'What content do you love creating?',
    choices: [
      {
        id: 'beauty',
        text: 'Beauty & fashion',
        icon: Gem,
        points: { glamorous: 3, minimalist: 1, artsy: 0, wanderlust: 0 }
      },
      {
        id: 'travel',
        text: 'Travel & adventure',
        icon: Plane,
        points: { glamorous: 0, minimalist: 0, artsy: 1, wanderlust: 3 }
      },
      {
        id: 'lifestyle',
        text: 'Lifestyle & wellness',
        icon: Heart,
        points: { glamorous: 1, minimalist: 3, artsy: 0, wanderlust: 0 }
      },
      {
        id: 'art',
        text: 'Art & creativity',
        icon: Flower2,
        points: { glamorous: 0, minimalist: 0, artsy: 3, wanderlust: 1 }
      }
    ]
  }
];

export const results: Record<string, Result> = {
  glamorous: {
    type: 'glamorous',
    title: 'Glam Goddess',
    description: "Your feed is all about beauty tips, bold fashion choices, and that iconic camera-ready smile. The spotlight suits you!",
    gradient: 'from-pink-400 via-pink-300 to-rose-300',
    icon: Sparkles
  },
  minimalist: {
    type: 'minimalist',
    title: 'Mindful Minimalist',
    description: "Clean aesthetics, thoughtful content, and a zen approach to life. Your feed inspires others to find beauty in simplicity.",
    gradient: 'from-neutral-200 via-stone-200 to-neutral-300',
    icon: Waves
  },
  artsy: {
    type: 'artsy',
    title: 'Creative Soul',
    description: "Your artistic vision shines through every post. You're not afraid to experiment and your feed is a canvas for self-expression.",
    gradient: 'from-purple-400 via-violet-300 to-indigo-300',
    icon: Palette
  },
  wanderlust: {
    type: 'wanderlust',
    title: 'Free Spirit',
    description: "Adventure calls and you answer! Your feed is filled with breathtaking destinations and inspiring journeys.",
    gradient: 'from-blue-400 via-cyan-300 to-teal-300',
    icon: Plane
  }
};