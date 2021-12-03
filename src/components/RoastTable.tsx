import React from 'react';
import {
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
} from '@adobe/react-spectrum';
import Roast from '../models/Roast';
import { getColumns } from '../utils/TableUtils';

interface RoastTableProps {
  roasts: Roast[];
  columnKeys: Array<keyof Roast>;
}

export default function RoastTable({ roasts, columnKeys }: RoastTableProps) {
  const columns = getColumns<Roast>(columnKeys);

  return (
    <TableView aria-label="Roast table">
      <TableHeader columns={columns}>
        {(column) => <Column key={column.key}>{column.title}</Column>}
      </TableHeader>

      <TableBody items={roasts}>
        {(roast) => (
          <Row>
            {(columnKey) => (
              <Cell>{roast.render(columnKey as keyof Roast)}</Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
