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
        points: { glamorous: 5, minimalist: 0, artsy: 1, wanderlust: 0 }
      },
      {
        id: 'cafe',
        text: 'Aesthetic café hopping with the girlies ☕️',
        icon: Coffee,
        points: { glamorous: 1, minimalist: 5, artsy: 1, wanderlust: 0 }
      },
      {
        id: 'festival',
        text: 'Festival vibes with cute fits 🎪',
        icon: Music,
        points: { glamorous: 1, minimalist: 0, artsy: 5, wanderlust: 1 }
      },
      {
        id: 'adventure',
        text: 'Spontaneous road trip with besties 🚗',
        icon: Plane,
        points: { glamorous: 0, minimalist: 0, artsy: 1, wanderlust: 5 }
      }
    ]
  },
  {
    id: 'aesthetic',
    text: "💫 Your feed's main character moment? 💫",
    choices: [
      {
        id: 'minimal',
        text: 'Neutral fits + morning routine 🤍',
        icon: Waves,
        points: { glamorous: 0, minimalist: 5, artsy: 0, wanderlust: 0 }
      },
      {
        id: 'colorful',
        text: 'Creative photoshoots + art vibes 🎨',
        icon: Palette,
        points: { glamorous: 0, minimalist: 0, artsy: 5, wanderlust: 1 }
      },
      {
        id: 'luxe',
        text: 'Luxury lifestyle + glam moments 👑',
        icon: Sparkles,
        points: { glamorous: 5, minimalist: 1, artsy: 0, wanderlust: 0 }
      },
      {
        id: 'travel',
        text: 'Travel content + hidden gems 🌎',
        icon: Plane,
        points: { glamorous: 0, minimalist: 0, artsy: 1, wanderlust: 5 }
      }
    ]
  },
  {
    id: 'content',
    text: '🎀 Your TikTok is all about... 🎀',
    choices: [
      {
        id: 'beauty',
        text: 'Makeup transformations + GRWM 💄',
        icon: Gem,
        points: { glamorous: 5, minimalist: 0, artsy: 1, wanderlust: 0 }
      },
      {
        id: 'minimal',
        text: 'Minimalist routines + organization ✨',
        icon: Heart,
        points: { glamorous: 0, minimalist: 5, artsy: 0, wanderlust: 1 }
      },
      {
        id: 'creative',
        text: 'DIY projects + aesthetic edits 🎨',
        icon: Palette,
        points: { glamorous: 0, minimalist: 0, artsy: 5, wanderlust: 0 }
      },
      {
        id: 'explore',
        text: 'Travel vlogs + adventure guides 🗺️',
        icon: Plane,
        points: { glamorous: 0, minimalist: 0, artsy: 0, wanderlust: 5 }
      }
    ]
  },
  {
    id: 'morning',
    text: "☀️ Your perfect morning routine?",
    choices: [
      {
        id: 'glam',
        text: 'Full glam + iced latte + selfies 💋',
        icon: Sparkles,
        points: { glamorous: 5, minimalist: 0, artsy: 0, wanderlust: 0 }
      },
      {
        id: 'minimal',
        text: 'Matcha + yoga + skincare ✨',
        icon: Heart,
        points: { glamorous: 0, minimalist: 5, artsy: 0, wanderlust: 1 }
      },
      {
        id: 'creative',
        text: 'Art journaling + vinyl + coffee 🎨',
        icon: Palette,
        points: { glamorous: 0, minimalist: 1, artsy: 5, wanderlust: 0 }
      },
      {
        id: 'adventure',
        text: 'Sunrise hikes + nature photos 🌅',
        icon: Sunset,
        points: { glamorous: 0, minimalist: 0, artsy: 1, wanderlust: 5 }
      }
    ]
  },
  {
    id: 'style',
    text: "👗 Your signature style?",
    choices: [
      {
        id: 'luxe',
        text: 'Designer pieces + trending fits 💅',
        icon: Sparkles,
        points: { glamorous: 5, minimalist: 0, artsy: 0, wanderlust: 0 }
      },
      {
        id: 'capsule',
        text: 'Capsule wardrobe + timeless basics 🤍',
        icon: Waves,
        points: { glamorous: 0, minimalist: 5, artsy: 0, wanderlust: 0 }
      },
      {
        id: 'vintage',
        text: 'Thrifted finds + unique pieces 🎭',
        icon: Palette,
        points: { glamorous: 0, minimalist: 0, artsy: 5, wanderlust: 1 }
      },
      {
        id: 'comfy',
        text: 'Adventure-ready + earth tones 🏔️',
        icon: Plane,
        points: { glamorous: 0, minimalist: 1, artsy: 0, wanderlust: 5 }
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