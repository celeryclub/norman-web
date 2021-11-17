import React from 'react';
import { Link } from 'react-router-dom';
import { Roast } from '../interfaces/Roast';
import Sentiment from './Sentiment';
import Time from '../utils/Time';

interface RoastTableProps {
  roasts: Roast[];
  columns: Array<keyof Roast>;
}

function getColumnTitle(column: keyof Roast): string {
  const withSpaces = column.replace(/([A-Z])/g, ' $1');

  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
}

function getColumnContent(column: keyof Roast, roast: Roast): React.ReactNode {
  switch (column) {
    case 'coffee':
      return roast.coffee && roast.coffee.name;
    case 'date':
      return <Link to={`/roasts/${roast.id}`}>{roast.date}</Link>;
    case 'batchSize':
      return `${roast.batchSize} grams`;
    case 'preheatTime':
    case 'firstCrackStartTime':
    case 'totalRoastTime':
    case 'firstCrackEndTime':
      return roast[column] && `${Time.toString(roast[column])}`;
    case 'sentiment':
      return <Sentiment value={roast.sentiment} />;
    default:
      return roast[column];
  }
}

export default function RoastTable({ roasts, columns }: RoastTableProps) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th>{getColumnTitle(column)}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {roasts.map((roast) => {
          return (
            <tr key={roast.id}>
              {columns.map((column) => {
                return <td>{getColumnContent(column, roast)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
