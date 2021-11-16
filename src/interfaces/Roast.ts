import { Coffee } from './Coffee';

export interface Roast {
  id: number;
  coffee: Coffee;
  date: string;
  // In grams
  batchSize: number;
  roasterSettings: string;
  // All times in seconds
  preheatTime: number;
  firstCrackStartTime: number;
  totalRoastTime: number;
  firstCrackEndTime?: number;
  // In Fahrenheit
  ambientTemperature?: number;
  // City, Full City, etc.
  roastLevel?: string;
  sentiment?: boolean;
  rating?: number;
  notes?: string;
}
