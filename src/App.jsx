import React from "react";
import Navbar from "./components/navbar";
import CardSmall from "./components/CardSmall";
import Grid from "@mui/material/Unstable_Grid2";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="bg">
      <Dashboard />
    </div>
  );
}

export default App;
