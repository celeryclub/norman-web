import { Roast } from '../interfaces/Roast';

export default class RoastProvider {
  private roastsCache: Roast[];

  public async getAllRoasts(): Promise<Roast[]> {
    if (this.roastsCache) {
      return this.roastsCache;
    }

    const response = await fetch(`${API_BASE_URL}/roasts`);
    const roasts: Roast[] = await response.json();

    this.roastsCache = roasts;

    return roasts;
  }

  public async getRoastById(id: number): Promise<Roast> {
    const roasts: Roast[] = await this.getAllRoasts();

    return roasts.find((roast) => roast.id === id);
  }
}
