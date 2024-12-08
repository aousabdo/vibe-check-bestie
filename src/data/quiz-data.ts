import { Question, Result } from '@/types/quiz';
import { Camera, Coffee, Flower2, Gem, Heart, Home, Music, Palette, Plane, Sparkles, Sunset, Waves } from 'lucide-react';

export const questions: Question[] = [
  {
    id: 'weekend',
    text: "✨ What's your dream Saturday energy? ✨",
    choices: [
      {
        id: 'photoshoot',
        text: 'Main character photoshoot in the city 📸',
        icon: Camera,
        points: { glamorous: 5, minimalist: 0, artsy: 2, wanderlust: 1 }
      },
      {
        id: 'cafe',
        text: 'Aesthetic café hopping with the girlies ☕️',
        icon: Coffee,
        points: { glamorous: 2, minimalist: 3, artsy: 1, wanderlust: 2 }
      },
      {
        id: 'festival',
        text: 'Festival vibes with cute fits 🎪',
        icon: Music,
        points: { glamorous: 2, minimalist: 0, artsy: 5, wanderlust: 3 }
      },
      {
        id: 'spa',
        text: 'Self-care Sunday at home 🛁',
        icon: Home,
        points: { glamorous: 1, minimalist: 4, artsy: 2, wanderlust: 0 }
      }
    ]
  },
  {
    id: 'aesthetic',
    text: "💫 Pick your feed's main character moment 💫",
    choices: [
      {
        id: 'minimal',
        text: 'Clean girl aesthetic goals ✨',
        icon: Waves,
        points: { glamorous: 0, minimalist: 3, artsy: 1, wanderlust: 0 }
      },
      {
        id: 'colorful',
        text: 'Bold & extra (as you should) 💅',
        icon: Palette,
        points: { glamorous: 1, minimalist: 0, artsy: 3, wanderlust: 1 }
      },
      {
        id: 'luxe',
        text: 'That girl energy 👑',
        icon: Sparkles,
        points: { glamorous: 3, minimalist: 0, artsy: 0, wanderlust: 1 }
      },
      {
        id: 'nature',
        text: 'Adventure baddie vibes 🌎',
        icon: Sunset,
        points: { glamorous: 0, minimalist: 1, artsy: 1, wanderlust: 3 }
      }
    ]
  },
  {
    id: 'content',
    text: '🎀 Your TikTok is giving... 🎀',
    choices: [
      {
        id: 'beauty',
        text: 'Get ready with me + hauls 💄',
        icon: Gem,
        points: { glamorous: 3, minimalist: 1, artsy: 0, wanderlust: 0 }
      },
      {
        id: 'travel',
        text: 'Travel vlogs + hidden gems 🗺️',
        icon: Plane,
        points: { glamorous: 0, minimalist: 0, artsy: 1, wanderlust: 3 }
      },
      {
        id: 'lifestyle',
        text: 'Day in my life + routines ✌️',
        icon: Heart,
        points: { glamorous: 1, minimalist: 3, artsy: 0, wanderlust: 0 }
      },
      {
        id: 'art',
        text: 'Aesthetic inspo + DIYs 🎨',
        icon: Flower2,
        points: { glamorous: 0, minimalist: 0, artsy: 3, wanderlust: 1 }
      }
    ]
  }
];

export const results: Record<string, Result> = {
  glamorous: {
    type: 'glamorous',
    title: 'It Girl',
    description: "You're giving main character energy 24/7! Your feed is a masterclass in glam moments, iconic fits, and that golden hour glow. The spotlight was made for you, bestie! ✨👑",
    gradient: 'from-rose-400 via-pink-400 to-fuchsia-400',
    icon: Sparkles
  },
  minimalist: {
    type: 'minimalist',
    title: 'Clean Girl',
    description: "Your aesthetic is chef's kiss perfect! From your morning matcha to your capsule wardrobe, you're the queen of curated minimalism and that effortless chic vibe. 🤍",
    gradient: 'from-rose-200 via-pink-100 to-rose-200',
    icon: Waves
  },
  artsy: {
    type: 'artsy',
    title: 'Creative Queen',
    description: "The main character of the art scene! Your feed is a whole mood board of colors, creativity, and aesthetic moments that live rent-free in everyone's head! 🎨",
    gradient: 'from-fuchsia-400 via-purple-400 to-pink-400',
    icon: Palette
  },
  wanderlust: {
    type: 'wanderlust',
    title: 'Adventure Baddie',
    description: "Period! You're the moment with your wanderlust spirit and adventure-ready fits. Your feed has everyone double-tapping those dreamy travel shots and epic locations! 🌎",
    gradient: 'from-sky-400 via-indigo-400 to-purple-400',
    icon: Plane
  }
};