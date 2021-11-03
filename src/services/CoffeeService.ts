import { Coffee } from '../interfaces/Coffee';

export default class CoffeeService {
  public async getAllCoffees(): Promise<Coffee[]> {
    const response = await fetch(`${API_BASE_URL}/coffees`);
    const coffees: Coffee[] = await response.json();

    return coffees;
  }
}
