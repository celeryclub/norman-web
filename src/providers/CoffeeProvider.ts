import { Coffee } from '../interfaces/Coffee';

export default class CoffeeProvider {
  private coffeesCache: Coffee[];

  public async getAllCoffees(): Promise<Coffee[]> {
    if (this.coffeesCache) {
      return this.coffeesCache;
    }

    const response = await fetch(`${API_BASE_URL}/coffees`);
    const coffees: Coffee[] = await response.json();

    this.coffeesCache = coffees;

    return coffees;
  }
}
