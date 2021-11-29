import React from 'react';
import { Link } from 'react-router-dom';
import Roast from './Roast';
import Sentiment from '../components/Sentiment';

export default class Coffee {
  public id: number;

  public name: string;

  public country: string;

  public regions: string;

  public producer: string;

  public cultivar: string;

  public process: string;

  public decaf: boolean;

  public grade: string;

  public arrivalDate: string;

  public purchaseUrl: string;

  public sentiment?: boolean;

  public rating?: number;

  public notes?: string;

  public roasts: Roast[];

  public constructor(data: Coffee) {
    Object.keys(data).forEach((key) => {
      if (key === 'roasts') {
        const roasts = data[key].map((roastData) => {
          return new Roast(roastData);
        });

        this[key] = roasts;
      } else {
        this[key] = data[key];
      }
    });
  }

  public render(key: keyof Coffee): React.ReactNode {
    switch (key) {
      case 'name':
        return <Link to={`/coffees/${this.id}`}>{this.name}</Link>;
      case 'decaf':
        return this.decaf ? 'yes' : 'no';
      case 'purchaseUrl':
        return <a href={this.purchaseUrl}>Purchase URL</a>;
      case 'sentiment':
        return <Sentiment value={this.sentiment} />;
      default:
        return this[key];
    }
  }
}
