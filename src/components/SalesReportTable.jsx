import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import data from "../data/salesReport.json";

const columns = [
  { field: "id", headerName: "Id", minWidth: 100 },
  { field: "date", headerName: "Date", minWidth: 200 },
  {
    field: "product",
    headerName: "Product",
    minWidth: 250,
  },
  {
    field: "amount",
    headerName: "Amount",
    minWidth: 160,
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 160,
  },
];

function SalesReportTable() {
  console.log(data);
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
        checkboxSelection
      />
    </div>
  );
}

export default SalesReportTable;
