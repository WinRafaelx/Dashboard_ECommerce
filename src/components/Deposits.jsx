import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Title from "./Title";
import Grid from '@mui/material/Unstable_Grid2';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ mb: 1 }}
      >
        <Title>Today Sales</Title>
        <Typography color="text.secondary">
          on {Date().toLocaleString().slice(4, 15)}
        </Typography>
      </Stack>
      <Typography component="p" variant="h4" sx={{ mb: 1 }}>
        30,024.00฿
      </Typography>

      <Grid container spacing={1} sx={{mb:1}}>
        <Grid md={6} xs={6}>
          <div style={{color: "#1976D2"}}>Products Sold</div>
          <Typography component="p" variant="h5">
            2776
          </Typography>
        </Grid>
        <Grid md={6} xs={6}>
          <div style={{color: "#1976D2"}}>New Customers</div>
          <Typography component="p" variant="h5">
            12131
          </Typography>
        </Grid>
        <Grid md={12} xs={12}>
          <div style={{color: "#1976D2"}}>Growth Rate (From last month)</div>
          <Typography component="p" variant="h5">
            +67% <ArrowOutwardIcon color="success" sx={{backgroundColor: "#B3D2C2", borderRadius: "50%",p:0.5, opacity: 0.7}}/> 
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
