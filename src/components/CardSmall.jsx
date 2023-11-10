import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../css/CardSmall.css";
import Grid from "@mui/material/Unstable_Grid2";

function CardSmall({ topic, amount, increase, lastmonth }) {
  const increaseColor = increase.includes("-") ? "red" : "green";
  console.log(increaseColor);
  return (
    <>
      <Grid md={2.5}>
        <Card>
          <CardContent>
            <div className="topic_percent">
              <Typography variant="h5" component="div" sx={{ fontSize: 20 }}>
                {topic}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontSize: 16, color: increaseColor, ml: 1 }}
              >
                {increase}
              </Typography>
            </div>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: 30 }}
              gutterBottom
            >
              {amount}
            </Typography>
            <div className="last_part">
              <Typography variant="h5" component="div" sx={{ fontSize: 16 }}>
                vs. last month
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontSize: 20}}
              >
                {lastmonth}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default CardSmall;
