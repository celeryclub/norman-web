import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CoffeeProvider from '../providers/CoffeeProvider';
import RoastProvider from '../providers/RoastProvider';
import Sentiment from '../components/Sentiment';
import { Coffee } from '../interfaces/Coffee';
import { Roast } from '../interfaces/Roast';
import Time from '../utils/Time';

interface RoastDetailsProps {
  coffeeProvider: CoffeeProvider;
  roastProvider: RoastProvider;
}

export default function RoastDetails({
  coffeeProvider,
  roastProvider,
}: RoastDetailsProps) {
  const { id } = useParams();

  const [coffee, setCoffee] = useState<Coffee>();
  const [roast, setRoast] = useState<Roast>();

  useEffect(() => {
    const idNumber = parseInt(id, 10);

    Promise.all([
      coffeeProvider.getAllCoffees(),
      roastProvider.getRoastById(idNumber),
    ]).then(([coffeeResults, roastResult]) => {
      const coffeeResult = coffeeResults.find(
        (coffeeToCheck) => coffeeToCheck.id === roastResult.coffeeId
      );

      setCoffee(coffeeResult);
      setRoast(roastResult);
    });
  }, [coffeeProvider, roastProvider, id]);

  return roast && coffee ? (
    <>
      <h2>
        {roast.date} ({coffee.name})
      </h2>

      <p>Batch size: {roast.batchSize} grams</p>
      <p>Roaster settings: {roast.roasterSettings}</p>
      <p>Preheat time: {Time.toString(roast.preheatTime)}</p>
      <p>First crack start time: {Time.toString(roast.firstCrackStartTime)}</p>
      <p>Total roast time: {Time.toString(roast.totalRoastTime)}</p>
      <p>
        First crack end time:{' '}
        {roast.firstCrackEndTime && Time.toString(roast.firstCrackEndTime)}
      </p>
      <p>
        Ambient temperature:{' '}
        {roast.ambientTemperature && `${roast.ambientTemperature} ℉`}
      </p>
      <p>Roast level: {roast.roastLevel}</p>
      <p>
        Sentiment: <Sentiment value={roast.sentiment} />
      </p>
      <p>Rating: {roast.rating}</p>
      <p>Notes: {roast.notes}</p>
    </>
  ) : null;
}
