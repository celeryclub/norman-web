import React, { useState, useEffect } from 'react';
import { ProgressCircle } from '@adobe/react-spectrum';
import CoffeeProvider from '../providers/CoffeeProvider';
import Coffee from '../models/Coffee';

interface CoffeeListProps {
  coffeeProvider: CoffeeProvider;
}

export default function CoffeeList({ coffeeProvider }: CoffeeListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    coffeeProvider.getAllCoffees().then((coffeeResults) => {
      setCoffees(coffeeResults);
      setIsLoading(false);
    });
  }, [coffeeProvider]);

  return isLoading ? (
    <ProgressCircle aria-label="Loading…" isIndeterminate />
  ) : (
    <>
      <h2>Coffees ({coffees.length})</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Regions</th>
            <th>Cultivar</th>
            <th>Process</th>
            <th>Decaf</th>
            <th>Sentiment</th>
          </tr>
        </thead>

        <tbody>
          {coffees.map((coffee) => {
            return (
              <tr key={coffee.id}>
                <td>{coffee.render('name')}</td>
                <td>{coffee.render('country')}</td>
                <td>{coffee.render('regions')}</td>
                <td>{coffee.render('cultivar')}</td>
                <td>{coffee.render('process')}</td>
                <td>{coffee.render('decaf')}</td>
                <td>{coffee.render('sentiment')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
