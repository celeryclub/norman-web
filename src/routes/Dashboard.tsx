import React, { useState, useEffect } from 'react';
import { ProgressCircle, Heading } from '@adobe/react-spectrum';
import RoastProvider from '../providers/RoastProvider';
import Roast from '../models/Roast';
import RoastTable from '../components/RoastTable';

interface DashboardProps {
  roastProvider: RoastProvider;
}

export default function Dashboard({
  roastProvider,
}: DashboardProps): JSX.Element {
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
      <Heading level={2}>Recent roasts</Heading>

      <Heading level={3}>Caf</Heading>
      <RoastTable
        roasts={cafRoasts}
        columnKeys={['coffee', 'date', 'batchSize', 'sentiment']}
      />

      <Heading level={3}>Decaf</Heading>
      <RoastTable
        roasts={decafRoasts}
        columnKeys={['coffee', 'date', 'batchSize', 'sentiment']}
      />
    </>
  );
}
