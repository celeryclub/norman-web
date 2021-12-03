import React, { useState, useEffect } from 'react';
import {
  ProgressCircle,
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
} from '@adobe/react-spectrum';
import CoffeeProvider from '../providers/CoffeeProvider';
import Coffee from '../models/Coffee';
import { getColumns } from '../utils/TableUtils';

interface CoffeeListProps {
  coffeeProvider: CoffeeProvider;
}

const columns = getColumns<Coffee>([
  'name',
  'country',
  'regions',
  'cultivar',
  'process',
  'decaf',
  'sentiment',
]);

export default function CoffeeList({ coffeeProvider }: CoffeeListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    coffeeProvider.getAllCoffees().then((coffeeResults) => {
      setCoffees(coffeeResults);
      setIsLoading(false);
    });
  }, [coffeeProvider]);

  return isLoading ? (
    <ProgressCircle aria-label="Loading…" isIndeterminate />
  ) : (
    <>
      <h2>Coffees ({coffees.length})</h2>

      <TableView aria-label="Coffee list">
        <TableHeader columns={columns}>
          {(column) => <Column key={column.key}>{column.title}</Column>}
        </TableHeader>

        <TableBody items={coffees}>
          {(coffee) => (
            <Row>
              {(columnKey) => (
                <Cell>{coffee.render(columnKey as keyof Coffee)}</Cell>
              )}
            </Row>
          )}
        </TableBody>
      </TableView>
    </>
  );
}
