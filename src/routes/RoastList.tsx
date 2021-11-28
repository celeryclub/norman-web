import React, { useState, useEffect } from 'react';
import { ProgressCircle } from '@adobe/react-spectrum';
import RoastProvider from '../providers/RoastProvider';
import { Roast } from '../interfaces/Roast';
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
      <h2>Roasts ({roasts.length})</h2>
      <RoastTable
        roasts={roasts}
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
        ]}
      />
    </>
  );
}
