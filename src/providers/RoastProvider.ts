import Roast from '../models/Roast';

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
    const jsonData = await response.json();
    const roasts = jsonData.map((roastData) => {
      return new Roast(roastData);
    });

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
    const { cafRoasts: cafRoastsData, decafRoasts: decafRoastsData } =
      await response.json();
    const cafRoasts = cafRoastsData.map((cafRoastData) => {
      return new Roast(cafRoastData);
    });
    const decafRoasts = decafRoastsData.map((decafRoastData) => {
      return new Roast(decafRoastData);
    });

    this.recentRoastsCache = { cafRoasts, decafRoasts };

    return { cafRoasts, decafRoasts };
  }

  public async getRoastById(id: number): Promise<Roast> {
    const roasts: Roast[] = await this.getAllRoasts();

    return roasts.find((roast) => roast.id === id);
  }
}
