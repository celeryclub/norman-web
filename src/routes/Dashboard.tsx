import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RoastProvider from '../providers/RoastProvider';
import { Roast } from '../interfaces/Roast';
import Sentiment from '../components/Sentiment';

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
      <table>
        <thead>
          <tr>
            <th>Date (Coffee)</th>
            <th>Batch size</th>
            <th>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {cafRoasts.map((roast) => {
            return (
              <tr key={roast.id}>
                <td>
                  <Link to={`/roasts/${roast.id}`}>
                    {roast.date} ({roast.coffee.name})
                  </Link>
                </td>
                <td>{roast.batchSize} grams</td>
                <td>
                  <Sentiment value={roast.sentiment} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Decaf</h3>
      <table>
        <thead>
          <tr>
            <th>Date (Coffee)</th>
            <th>Batch size</th>
            <th>Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {decafRoasts.map((roast) => {
            return (
              <tr key={roast.id}>
                <td>
                  <Link to={`/roasts/${roast.id}`}>
                    {roast.date} ({roast.coffee.name})
                  </Link>
                </td>
                <td>{roast.batchSize} grams</td>
                <td>
                  <Sentiment value={roast.sentiment} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
