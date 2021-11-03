import React, { useState, useEffect } from 'react';
import CoffeeService from '../services/CoffeeService';
import { Coffee } from '../interfaces/Coffee';

const Coffees = () => {
  const coffeeService = new CoffeeService();

  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    coffeeService.getAllCoffees().then((coffees) => {
      setCoffees(coffees);
    });
  }, []);

  return (
    <>
      <h2>Coffees</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Regions</th>
          <th>Cultivar</th>
          <th>Process</th>
          <th>Decaf</th>
          <th>Grade</th>
          <th>Arrival date</th>
          <th>Purchase URL</th>
          <th>Rating</th>
          <th>Notes</th>
        </tr>
        {coffees.map((coffee) => {
          return (
            <tr key={coffee.id}>
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
              <td>{coffee.rating}</td>
              <td>{coffee.notes}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Coffees;
