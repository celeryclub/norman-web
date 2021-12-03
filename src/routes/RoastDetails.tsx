import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProgressCircle, Heading } from '@adobe/react-spectrum';
import RoastProvider from '../providers/RoastProvider';
import Roast from '../models/Roast';

interface RoastDetailsProps {
  roastProvider: RoastProvider;
}

export default function RoastDetails({ roastProvider }: RoastDetailsProps) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [roast, setRoast] = useState<Roast>();

  useEffect(() => {
    const idNumber = parseInt(id, 10);

    roastProvider.getRoastById(idNumber).then((roastResult) => {
      setRoast(roastResult);
      setIsLoading(false);
    });
  }, [roastProvider, id]);

  return isLoading ? (
    <ProgressCircle aria-label="Loading…" isIndeterminate />
  ) : (
    <>
      <Heading level={2}>
        {roast.date} (
        <Link to={`/coffees/${roast.coffee.id}`}>{roast.coffee.name}</Link>)
      </Heading>
      <p>Batch size: {roast.render('batchSize')} grams</p>
      <p>Roaster settings: {roast.render('roasterSettings')}</p>
      <p>Preheat time: {roast.render('preheatTime')}</p>
      <p>First crack start time: {roast.render('firstCrackStartTime')}</p>
      <p>Total roast time: {roast.render('totalRoastTime')}</p>
      <p>First crack end time: {roast.render('firstCrackEndTime')}</p>
      <p>Ambient temperature: {roast.render('ambientTemperature')}</p>
      <p>Roast level: {roast.render('roastLevel')}</p>
      <p>Sentiment: {roast.render('sentiment')}</p>
      <p>Rating: {roast.render('rating')}</p>
      <p>Notes: {roast.render('notes')}</p>
    </>
  );
}
