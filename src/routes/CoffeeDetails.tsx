import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CoffeeProvider from '../providers/CoffeeProvider';
import { Coffee } from '../interfaces/Coffee';
import RoastTable from '../components/RoastTable';
import Sentiment from '../components/Sentiment';

interface CoffeeDetailsProps {
  coffeeProvider: CoffeeProvider;
}

export default function CoffeeDetails({ coffeeProvider }: CoffeeDetailsProps) {
  const { id } = useParams();

  const [coffee, setCoffee] = useState<Coffee>();

  useEffect(() => {
    const idNumber = parseInt(id, 10);

    coffeeProvider.getCoffeeById(idNumber).then((coffeeResult) => {
      setCoffee(coffeeResult);
    });
  }, [id, coffeeProvider]);

  return coffee ? (
    <>
      <h2>{coffee.name}</h2>

      <p>Country: {coffee.country}</p>
      <p>Regions: {coffee.regions}</p>
      <p>Cultivar: {coffee.cultivar}</p>
      <p>Process: {coffee.process}</p>
      <p>Decaf: {coffee.decaf ? 'yes' : 'no'}</p>
      <p>Grade: {coffee.grade}</p>
      <p>Arrival date: {coffee.arrivalDate}</p>
      <p>
        Purchase URL:
        <a href={coffee.purchaseUrl}>Purchase URL</a>
      </p>
      <p>
        Sentiment: <Sentiment value={coffee.sentiment} />
      </p>
      <p>Rating: {coffee.rating}</p>
      <p>Notes: {coffee.notes}</p>

      <h3>Roasts ({coffee.roasts.length})</h3>
      <RoastTable
        roasts={coffee.roasts}
        columns={[
          'date',
          'coffee',
          'batchSize',
          'roasterSettings',
          'preheatTime',
          'firstCrackStartTime',
          'totalRoastTime',
          'firstCrackEndTime',
          'sentiment',
          'notes',
        ]}
      />
    </>
  ) : null;
}
