import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoffeeProvider from '../providers/CoffeeProvider';
import RoastProvider from '../providers/RoastProvider';
import { Coffee } from '../interfaces/Coffee';
import { Roast } from '../interfaces/Roast';
import Sentiment from '../components/Sentiment';

interface DashboardProps {
  coffeeProvider: CoffeeProvider;
  roastProvider: RoastProvider;
}

export default function Dashboard({
  coffeeProvider,
  roastProvider,
}: DashboardProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [cafRoasts, setCafRoasts] = useState<Roast[]>([]);
  const [decafRoasts, setDecafRoasts] = useState<Roast[]>([]);

  useEffect(() => {
    Promise.all([
      coffeeProvider.getAllCoffees(),
      roastProvider.getRecentRoasts(),
    ]).then(([coffeeResults, roastResults]) => {
      setCoffees(coffeeResults);

      const { cafRoasts: cafRoastResults, decafRoasts: decafRoastResults } =
        roastResults;
      setCafRoasts(cafRoastResults);
      setDecafRoasts(decafRoastResults);
    });
  }, [coffeeProvider, roastProvider]);

  return (
    <>
      <h2>Recent roasts</h2>
      <h3>Caf</h3>
      <table>
        <thead>
          <tr>
            <th>Date (Coffee)</th>
            <th>Batch size</th>
            <th>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {cafRoasts.map((roast) => {
            const coffee = coffees.find(
              (coffeeToCheck) => coffeeToCheck.id === roast.coffeeId
            );

            return (
              <tr key={roast.id}>
                <td>
                  <Link to={`/roasts/${roast.id}`}>
                    {roast.date} ({coffee.name})
                  </Link>
                </td>
                <td>{roast.batchSize} grams</td>
                <td>
                  <Sentiment value={roast.sentiment} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Decaf</h3>
      <table>
        <thead>
          <tr>
            <th>Date (Coffee)</th>
            <th>Batch size</th>
            <th>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {decafRoasts.map((roast) => {
            const coffee = coffees.find(
              (coffeeToCheck) => coffeeToCheck.id === roast.coffeeId
            );

            return (
              <tr key={roast.id}>
                <td>
                  <Link to={`/roasts/${roast.id}`}>
                    {roast.date} ({coffee.name})
                  </Link>
                </td>
                <td>{roast.batchSize} grams</td>
                <td>
                  <Sentiment value={roast.sentiment} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
