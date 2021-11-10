import React, { useState, useEffect } from 'react';
import CoffeeProvider from '../providers/CoffeeProvider';
import { Coffee } from '../interfaces/Coffee';

interface CoffeeListProps {
  coffeeProvider: CoffeeProvider;
}

const CoffeeList = ({ coffeeProvider }: CoffeeListProps) => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    coffeeProvider.getAllCoffees().then((coffees) => {
      setCoffees(coffees);
    });
  }, []);

  return (
    <>
      <h2>Coffees</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Country</th>
            <th>Regions</th>
            <th>Cultivar</th>
            <th>Process</th>
            <th>Decaf</th>
            <th>Grade</th>
            <th>Arrival date</th>
            <th>Purchase URL</th>
            <th>Sentiment</th>
            <th>Rating</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {coffees.map((coffee) => {
            return (
              <tr key={coffee.id}>
                <td>{coffee.id}</td>
                <td>{coffee.name}</td>
                <td>{coffee.country}</td>
                <td>{coffee.regions}</td>
                <td>{coffee.cultivar}</td>
                <td>{coffee.process}</td>
                <td>{coffee.decaf}</td>
                <td>{coffee.grade}</td>
                <td>{coffee.arrivalDate}</td>
                <td>
                  <a href={coffee.purchaseUrl}>Purchase URL</a>
                </td>
                <td>
                  {coffee.sentiment === false
                    ? '👎'
                    : coffee.sentiment === true
                    ? '👍'
                    : '➖'}
                </td>
                <td>{coffee.rating}</td>
                <td>{coffee.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CoffeeList;
