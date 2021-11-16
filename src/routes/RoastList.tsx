import React, { useState, useEffect } from 'react';
import RoastProvider from '../providers/RoastProvider';
import { Roast } from '../interfaces/Roast';
import RoastTable from '../components/RoastTable';

interface RoastListProps {
  roastProvider: RoastProvider;
}

export default function RoastList({ roastProvider }: RoastListProps) {
  const [roasts, setRoasts] = useState<Roast[]>([]);

  useEffect(() => {
    roastProvider.getAllRoasts().then((roastResults) => {
      setRoasts(roastResults);
    });
  }, [roastProvider]);

  return (
    <>
      <h2>Roasts ({roasts.length})</h2>
      <RoastTable roasts={roasts} />
    </>
  );
}
