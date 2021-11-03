export interface Coffee {
  id: number;
  name: string;
  country: string;
  regions: string;
  producer: string;
  cultivar: string;
  process: string;
  decaf: boolean;
  grade: string;
  arrivalDate: string;
  purchaseUrl: string;
  rating?: number;
  notes?: string;
}
