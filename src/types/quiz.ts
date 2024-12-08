import { LucideIcon } from 'lucide-react';

export type ResultType = 'minimalist' | 'glamorous' | 'artsy' | 'wanderlust';

export type Choice = {
  id: string;
  text: string;
  icon: LucideIcon;
  points: Record<ResultType, number>;
};

export type Question = {
  id: string;
  text: string;
  choices: Choice[];
};

export type Result = {
  type: ResultType;
  title: string;
  description: string;
  gradient: string;
  icon: LucideIcon;
};