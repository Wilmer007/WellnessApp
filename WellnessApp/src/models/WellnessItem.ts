export type WellnessType = 'Fitness' | 'Nutrition' | 'Mental Health';

export interface WellnessItem {
  id: number;
  title: string;
  description: string;
  type: WellnessType;
}
