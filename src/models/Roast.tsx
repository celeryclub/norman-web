import React from 'react';
import { Link } from 'react-router-dom';
import Coffee from './Coffee';
import Sentiment from '../components/Sentiment';
import Time from '../utils/Time';

export default class Roast {
  public id: number;

  public coffee: Coffee;

  public date: string;

  // In grams
  public batchSize: number;

  public roasterSettings: string;

  // All times in seconds
  public preheatTime: number;

  public firstCrackStartTime: number;

  public totalRoastTime: number;

  public firstCrackEndTime?: number;

  // In Fahrenheit
  public ambientTemperature?: number;

  // City, Full City, etc.
  public roastLevel?: string;

  public sentiment?: boolean;

  public rating?: number;

  public notes?: string;

  public constructor(data: Roast) {
    Object.assign(this, data);
  }

  public render(key: keyof Roast): React.ReactNode {
    switch (key) {
      case 'coffee':
        return this.coffee && this.coffee.name;
      case 'date':
        return <Link to={`/roasts/${this.id}`}>{this.date}</Link>;
      case 'batchSize':
        return `${this.batchSize} grams`;
      case 'preheatTime':
      case 'firstCrackStartTime':
      case 'totalRoastTime':
      case 'firstCrackEndTime':
        return this[key] && Time.toString(this[key]);
      case 'ambientTemperature':
        return this.ambientTemperature && `${this.ambientTemperature} ℉`;
      case 'sentiment':
        return <Sentiment value={this.sentiment} />;
      default:
        return this[key];
    }
  }
}
