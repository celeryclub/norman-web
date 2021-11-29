import React from 'react';
import Roast from '../models/Roast';

interface RoastTableProps {
  roasts: Roast[];
  columns: Array<keyof Roast>;
}

function getColumnTitle(column: keyof Roast): string {
  const withSpaces = column.replace(/([A-Z])/g, ' $1');

  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
}

export default function RoastTable({ roasts, columns }: RoastTableProps) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column}>{getColumnTitle(column)}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {roasts.map((roast) => {
          return (
            <tr key={roast.id}>
              {columns.map((column) => {
                return <td key={column}>{roast.render(column)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
