import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoffeeProvider from '../providers/CoffeeProvider';
import RoastProvider from '../providers/RoastProvider';
import { Coffee } from '../interfaces/Coffee';
import { Roast } from '../interfaces/Roast';
import Sentiment from '../components/Sentiment';
import Time from '../utils/Time';

interface RoastListProps {
  coffeeProvider: CoffeeProvider;
  roastProvider: RoastProvider;
}

export default function RoastList({
  coffeeProvider,
  roastProvider,
}: RoastListProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [roasts, setRoasts] = useState<Roast[]>([]);

  useEffect(() => {
    Promise.all([
      coffeeProvider.getAllCoffees(),
      roastProvider.getAllRoasts(),
    ]).then(([coffeeResults, roastResults]) => {
      setCoffees(coffeeResults);
      setRoasts(roastResults);
    });
  }, [coffeeProvider, roastProvider]);

  return (
    <>
      <h2>Roasts</h2>
      <table>
        <thead>
          <tr>
            <th>Date (Coffee)</th>
            <th>Batch size</th>
            <th>Roaster settings</th>
            <th>Preheat time</th>
            <th>First crack start time</th>
            <th>Total roast time</th>
            <th>First crack end time</th>
            <th>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {roasts.map((roast) => {
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
                <td>{roast.roasterSettings}</td>
                <td>{Time.toString(roast.preheatTime)}</td>
                <td>{Time.toString(roast.firstCrackStartTime)}</td>
                <td>{Time.toString(roast.totalRoastTime)}</td>
                <td>
                  {roast.firstCrackEndTime &&
                    Time.toString(roast.firstCrackEndTime)}
                </td>
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
