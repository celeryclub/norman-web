import React, { useState, useEffect } from 'react';
import RoastProvider from '../providers/RoastProvider';
import { Roast } from '../interfaces/Roast';
import RoastTable from '../components/RoastTable';

interface DashboardProps {
  roastProvider: RoastProvider;
}

export default function Dashboard({ roastProvider }: DashboardProps) {
  const [cafRoasts, setCafRoasts] = useState<Roast[]>([]);
  const [decafRoasts, setDecafRoasts] = useState<Roast[]>([]);

  useEffect(() => {
    roastProvider.getRecentRoasts().then((roastResults) => {
      const { cafRoasts: cafRoastResults, decafRoasts: decafRoastResults } =
        roastResults;
      setCafRoasts(cafRoastResults);
      setDecafRoasts(decafRoastResults);
    });
  }, [roastProvider]);

  return (
    <>
      <h2>Recent roasts</h2>
      <h3>Caf</h3>
      <RoastTable
        roasts={cafRoasts}
        columns={['date', 'coffee', 'batchSize', 'sentiment']}
      />
      <h3>Decaf</h3>
      <RoastTable
        roasts={decafRoasts}
        columns={['date', 'coffee', 'batchSize', 'sentiment']}
      />
    </>
  );
}
