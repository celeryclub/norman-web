import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProgressCircle } from '@adobe/react-spectrum';
import CoffeeProvider from '../providers/CoffeeProvider';
import Coffee from '../models/Coffee';
import RoastTable from '../components/RoastTable';

interface CoffeeDetailsProps {
  coffeeProvider: CoffeeProvider;
}

export default function CoffeeDetails({ coffeeProvider }: CoffeeDetailsProps) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coffee, setCoffee] = useState<Coffee>();

  useEffect(() => {
    const idNumber = parseInt(id, 10);

    coffeeProvider.getCoffeeById(idNumber).then((coffeeResult) => {
      setCoffee(coffeeResult);
      setIsLoading(false);
    });
  }, [id, coffeeProvider]);

  return isLoading ? (
    <ProgressCircle aria-label="Loading…" isIndeterminate />
  ) : (
    <>
      <h2>{coffee.name}</h2>

      <p>Country: {coffee.render('country')}</p>
      <p>Regions: {coffee.render('regions')}</p>
      <p>Cultivar: {coffee.render('cultivar')}</p>
      <p>Process: {coffee.render('process')}</p>
      <p>Decaf: {coffee.render('decaf')}</p>
      <p>Grade: {coffee.render('grade')}</p>
      <p>Arrival date: {coffee.render('arrivalDate')}</p>
      <p>Purchase URL: {coffee.render('purchaseUrl')}</p>
      <p>Sentiment: {coffee.render('sentiment')}</p>
      <p>Rating: {coffee.render('rating')}</p>
      <p>Notes: {coffee.render('notes')}</p>

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
  );
}
