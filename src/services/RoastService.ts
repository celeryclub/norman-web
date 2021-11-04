import { Roast } from '../interfaces/Roast';

export default class RoastService {
  private static roastService: RoastService;

  private roastsCache: Roast[];

  private constructor() {}

  public static getInstance(): RoastService {
    if (!this.roastService) {
      this.roastService = new RoastService();
    }

    return this.roastService;
  }

  public async getAllRoasts(): Promise<Roast[]> {
    if (this.roastsCache) {
      return this.roastsCache;
    }

    const response = await fetch(`${API_BASE_URL}/roasts`);
    const roasts: Roast[] = await response.json();

    this.roastsCache = roasts;

    return roasts;
  }
}
