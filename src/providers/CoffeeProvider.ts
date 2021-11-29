import Coffee from '../models/Coffee';

export default class CoffeeProvider {
  private allCoffeesCache: Coffee[];

  private coffeeByIdCache: { [id: number]: Coffee } = {};

  public async getAllCoffees(): Promise<Coffee[]> {
    if (this.allCoffeesCache) {
      return this.allCoffeesCache;
    }

    const response = await fetch(`${API_BASE_URL}/coffees`);
    const jsonData = await response.json();
    const coffees = jsonData.map((coffeeData) => {
      return new Coffee(coffeeData);
    });

    this.allCoffeesCache = coffees;

    return coffees;
  }

  public async getCoffeeById(id: number): Promise<Coffee> {
    if (this.coffeeByIdCache[id]) {
      return this.coffeeByIdCache[id];
    }

    const response = await fetch(`${API_BASE_URL}/coffees/${id}`);
    const jsonData = await response.json();
    const coffee = new Coffee(jsonData);

    this.coffeeByIdCache[id] = coffee;

    return coffee;
  }
}
