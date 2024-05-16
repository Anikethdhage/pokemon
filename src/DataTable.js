import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';

const columns = [
  { field: 'name', headerName: 'Pokemon Name', width: 130 },
  { field: 'abilities', headerName: 'Abilities', width: 200 , sortable: false},
  {
    field: 'type',
    headerName: 'Type',
    width: 200,
    sortable: false,
  },
  {
    field: 'hitPoints',
    headerName: 'Hit Points',
    type: 'number',
    sortable: false,
    width: 90,
  },
  {
    field: 'evolution',
    headerName: 'Evolution',
    sortable: false,
    width: 400,
  },
  {
    field: 'imageUrl',
    headerName: 'Image Url',
    sortable: false,
    width: 90,
  },
];

let rows;
axios.get("http://localhost:9090/api/getAll").then(response => {
  rows = response.data;
  console.log(rows);
})
.catch(error => console.error("Error occured while fetching data", error));

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 15]}
      />
    </div>
  );
}