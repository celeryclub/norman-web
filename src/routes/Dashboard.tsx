import React, { useState, useEffect } from 'react';
import { ProgressCircle } from '@adobe/react-spectrum';
import RoastProvider from '../providers/RoastProvider';
import Roast from '../models/Roast';
import RoastTable from '../components/RoastTable';

interface DashboardProps {
  roastProvider: RoastProvider;
}

export default function Dashboard({ roastProvider }: DashboardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [cafRoasts, setCafRoasts] = useState<Roast[]>([]);
  const [decafRoasts, setDecafRoasts] = useState<Roast[]>([]);

  useEffect(() => {
    roastProvider.getRecentRoasts().then((roastResults) => {
      const { cafRoasts: cafRoastResults, decafRoasts: decafRoastResults } =
        roastResults;
      setCafRoasts(cafRoastResults);
      setDecafRoasts(decafRoastResults);
      setIsLoading(false);
    });
  }, [roastProvider]);

  return isLoading ? (
    <ProgressCircle aria-label="Loading…" isIndeterminate />
  ) : (
    <>
      <h2>Recent roasts</h2>
      <h3>Caf</h3>
      <RoastTable
        roasts={cafRoasts}
        columnKeys={['date', 'coffee', 'batchSize', 'sentiment']}
      />
      <h3>Decaf</h3>
      <RoastTable
        roasts={decafRoasts}
        columnKeys={['date', 'coffee', 'batchSize', 'sentiment']}
      />
    </>
  );
}
