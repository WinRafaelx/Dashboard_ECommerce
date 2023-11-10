import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, amount) {
  return { id, name, amount };
}

const rows = [
  createData(
    0,
    'Elvis Presley',

    10312.44,
  ),
  createData(
    1,
    'Paul McCartney',

    9866.99,
  ),
  createData(2, 'Tom Scholz', 7100.81),
  createData(
    3,
    'Michael Jackson',
    6654.39,
  ),
  createData(
    4,
    'Bruce Springsteen',
    6212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Top 5 Best Sellers</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell>Product</TableCell>
            <TableCell align="right">Sale Amount (Baht)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id+1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}