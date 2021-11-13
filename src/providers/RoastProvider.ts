import { Roast } from '../interfaces/Roast';

export default class RoastProvider {
  private allRoastsCache: Roast[];

  private recentRoastsCache: {
    cafRoasts: Roast[];
    decafRoasts: Roast[];
  };

  public async getAllRoasts(): Promise<Roast[]> {
    if (this.allRoastsCache) {
      return this.allRoastsCache;
    }

    const response = await fetch(`${API_BASE_URL}/roasts`);
    const roasts: Roast[] = await response.json();

    this.allRoastsCache = roasts;

    return roasts;
  }

  public async getRecentRoasts(): Promise<{
    cafRoasts: Roast[];
    decafRoasts: Roast[];
  }> {
    if (this.recentRoastsCache) {
      return this.recentRoastsCache;
    }

    const response = await fetch(`${API_BASE_URL}/roasts/recent`);
    const { cafRoasts, decafRoasts } = await response.json();

    this.recentRoastsCache = { cafRoasts, decafRoasts };

    return { cafRoasts, decafRoasts };
  }

  public async getRoastById(id: number): Promise<Roast> {
    const roasts: Roast[] = await this.getAllRoasts();

    return roasts.find((roast) => roast.id === id);
  }
}
