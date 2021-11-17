import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import RoastProvider from '../providers/RoastProvider';
import Sentiment from '../components/Sentiment';
import { Roast } from '../interfaces/Roast';
import Time from '../utils/Time';

interface RoastDetailsProps {
  roastProvider: RoastProvider;
}

export default function RoastDetails({ roastProvider }: RoastDetailsProps) {
  const { id } = useParams();
  const [roast, setRoast] = useState<Roast>();

  useEffect(() => {
    const idNumber = parseInt(id, 10);

    roastProvider.getRoastById(idNumber).then((roastResult) => {
      setRoast(roastResult);
    });
  }, [roastProvider, id]);

  return roast ? (
    <>
      <h2>
        {roast.date} (
        <Link to={`/coffees/${roast.coffee.id}`}>{roast.coffee.name}</Link>)
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
