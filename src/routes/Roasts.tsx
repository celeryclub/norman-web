import React, { useState, useEffect } from 'react';
import CoffeeProvider from '../providers/CoffeeProvider';
import RoastProvider from '../providers/RoastProvider';
import { Coffee } from '../interfaces/Coffee';
import { Roast } from '../interfaces/Roast';

interface RoastsProps {
  coffeeProvider: CoffeeProvider;
  roastProvider: RoastProvider;
}

const Roasts = ({ coffeeProvider, roastProvider }: RoastsProps) => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [roasts, setRoasts] = useState<Roast[]>([]);

  useEffect(() => {
    Promise.all([
      coffeeProvider.getAllCoffees(),
      roastProvider.getAllRoasts(),
    ]).then((results) => {
      setCoffees(results[0]);
      setRoasts(results[1]);
    });
  }, []);

  return (
    <>
      <h2>Roasts</h2>
      <table>
        <tr>
          <th>Coffee</th>
          <th>Date</th>
          <th>Batch size</th>
          <th>Roaster settings</th>
          <th>Preheat time</th>
          <th>First crack start time</th>
          <th>Total roast time</th>
          <th>First crack end time</th>
          <th>Ambient temperature</th>
          <th>Roast level</th>
          <th>Rating</th>
          <th>Notes</th>
        </tr>
        {roasts.map((roast) => {
          const coffee = coffees.find((coffee) => coffee.id === roast.coffeeId);

          return (
            <tr key={roast.id}>
              <td>{coffee.name}</td>
              <td>{roast.date}</td>
              <td>{roast.batchSize} grams</td>
              <td>{roast.roasterSettings}</td>
              <td>{roast.preheatTime}</td>
              <td>{roast.firstCrackStartTime}</td>
              <td>{roast.totalRoastTime}</td>
              <td>{roast.firstCrackEndTime}</td>
              <td>{roast.ambientTemperature}</td>
              <td>{roast.roastLevel}</td>
              <td>{roast.rating}</td>
              <td>{roast.notes}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Roasts;
