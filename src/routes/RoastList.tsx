import React, { useState, useEffect } from 'react';
import { ProgressCircle, Heading } from '@adobe/react-spectrum';
import RoastProvider from '../providers/RoastProvider';
import Roast from '../models/Roast';
import RoastTable from '../components/RoastTable';

interface RoastListProps {
  roastProvider: RoastProvider;
}

export default function RoastList({ roastProvider }: RoastListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [roasts, setRoasts] = useState<Roast[]>([]);

  useEffect(() => {
    roastProvider.getAllRoasts().then((roastResults) => {
      setRoasts(roastResults);
      setIsLoading(false);
    });
  }, [roastProvider]);

  return isLoading ? (
    <ProgressCircle aria-label="Loading…" isIndeterminate />
  ) : (
    <>
      <Heading level={2}>Roasts ({roasts.length})</Heading>
      <RoastTable
        roasts={roasts}
        columnKeys={[
          'coffee',
          'date',
          'batchSize',
          'roasterSettings',
          'preheatTime',
          'firstCrackStartTime',
          'totalRoastTime',
          'firstCrackEndTime',
          'sentiment',
        ]}
      />
    </>
  );
}
