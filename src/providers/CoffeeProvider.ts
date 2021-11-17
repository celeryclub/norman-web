import { Coffee } from '../interfaces/Coffee';

export default class CoffeeProvider {
  private allCoffeesCache: Coffee[];

  private coffeeByIdCache: { [id: number]: Coffee } = {};

  public async getAllCoffees(): Promise<Coffee[]> {
    if (this.allCoffeesCache) {
      return this.allCoffeesCache;
    }

    const response = await fetch(`${API_BASE_URL}/coffees`);
    const coffees: Coffee[] = await response.json();

    this.allCoffeesCache = coffees;

    return coffees;
  }

  public async getCoffeeById(id: number): Promise<Coffee> {
    if (this.coffeeByIdCache[id]) {
      return this.coffeeByIdCache[id];
    }

    const response = await fetch(`${API_BASE_URL}/coffees/${id}`);
    const coffee: Coffee = await response.json();

    this.coffeeByIdCache[id] = coffee;

    return coffee;
  }
}
