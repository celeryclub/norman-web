import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoffeeProvider from '../providers/CoffeeProvider';
import Sentiment from '../components/Sentiment';
import { Coffee } from '../interfaces/Coffee';

interface CoffeeListProps {
  coffeeProvider: CoffeeProvider;
}

export default function CoffeeList({ coffeeProvider }: CoffeeListProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    coffeeProvider.getAllCoffees().then((coffeeResults) => {
      setCoffees(coffeeResults);
    });
  }, [coffeeProvider]);

  return (
    <>
      <h2>Coffees</h2>
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
                <td>
                  <Link to={`/coffees/${coffee.id}`}>{coffee.name}</Link>
                </td>
                <td>{coffee.country}</td>
                <td>{coffee.regions}</td>
                <td>{coffee.cultivar}</td>
                <td>{coffee.process}</td>
                <td>{coffee.decaf ? 'yes' : 'no'}</td>
                <td>
                  <Sentiment value={coffee.sentiment} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
