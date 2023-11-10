import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Today Sales</Title>
      <Typography component="p" variant="h4">
        30,024.00 Baht
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {Date().toLocaleString().slice(0, 15)}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}