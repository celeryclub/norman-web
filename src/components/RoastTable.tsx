import React from 'react';
import { Link } from 'react-router-dom';
import { Roast } from '../interfaces/Roast';
import Sentiment from './Sentiment';
import Time from '../utils/Time';

interface RoastTableProps {
  roasts: Roast[];
}

export default function RoastTable({ roasts }: RoastTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date (Coffee)</th>
          <th>Batch size</th>
          <th>Roaster settings</th>
          <th>Preheat time</th>
          <th>First crack start time</th>
          <th>Total roast time</th>
          <th>First crack end time</th>
          <th>Sentiment</th>
        </tr>
      </thead>
      <tbody>
        {roasts.map((roast) => {
          return (
            <tr key={roast.id}>
              <td>
                <Link to={`/roasts/${roast.id}`}>
                  {roast.date} ({roast.coffee.name})
                </Link>
              </td>
              <td>{roast.batchSize} grams</td>
              <td>{roast.roasterSettings}</td>
              <td>{Time.toString(roast.preheatTime)}</td>
              <td>{Time.toString(roast.firstCrackStartTime)}</td>
              <td>{Time.toString(roast.totalRoastTime)}</td>
              <td>
                {roast.firstCrackEndTime &&
                  Time.toString(roast.firstCrackEndTime)}
              </td>
              <td>
                <Sentiment value={roast.sentiment} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
