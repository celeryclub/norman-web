import React, { useState, useEffect } from 'react';
import CoffeeService from '../services/CoffeeService';
import RoastService from '../services/RoastService';
import { Coffee } from '../interfaces/Coffee';
import { Roast } from '../interfaces/Roast';

const Roasts = () => {
  const coffeeService = new CoffeeService();
  const roastService = new RoastService();

  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [roasts, setRoasts] = useState<Roast[]>([]);

  useEffect(() => {
    Promise.all([
      coffeeService.getAllCoffees(),
      roastService.getAllRoasts(),
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
