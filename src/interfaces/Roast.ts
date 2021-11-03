export interface Roast {
  id: number;
  coffeeId: number;
  // date: Date;
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
  rating?: number;
  notes?: string;
}
