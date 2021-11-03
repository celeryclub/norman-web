import { Roast } from '../interfaces/Roast';

export default class RoastService {
  public async getAllRoasts(): Promise<Roast[]> {
    const response = await fetch(`${API_BASE_URL}/roasts`);
    const roasts: Roast[] = await response.json();

    return roasts;
  }
}
