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

export default function RoastTable({
  roasts,
  columnKeys,
}: RoastTableProps): JSX.Element {
  const columns = getColumns<Roast>(columnKeys);

  return (
    <TableView aria-label="Roast table">
      <TableHeader columns={columns}>
        {(column): JSX.Element => (
          <Column key={column.key}>{column.title}</Column>
        )}
      </TableHeader>

      <TableBody items={roasts}>
        {(roast): JSX.Element => (
          <Row>
            {(columnKey): JSX.Element => (
              <Cell>{roast.render(columnKey as keyof Roast)}</Cell>
            )}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
}
