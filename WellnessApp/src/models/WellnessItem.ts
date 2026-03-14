export type WellnessType = 'Fitness' | 'Nutrition' | 'Mental' | 'Sleep' | 'Health';

export interface WellnessItem {
  id: number;
  title: string;
  description: string;
  type: WellnessType;
}
