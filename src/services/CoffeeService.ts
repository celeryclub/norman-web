import { Coffee } from '../interfaces/Coffee';

export default class CoffeeService {
  private static coffeeService: CoffeeService;

  private coffeesCache: Coffee[];

  private constructor() {}

  public static getInstance(): CoffeeService {
    if (!this.coffeeService) {
      this.coffeeService = new CoffeeService();
    }

    return this.coffeeService;
  }

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
