// app/fetch-component/page.jsx
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "First name", width: 130 },
  { field: "username", headerName: "Username", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
];

export default async function FetchComponent() {
  let rows = [];

  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    rows = response.data.map(({ id, name, username, email }) => ({
      id,
      name,
      username,
      email,
    }));
  } catch (error) {
    console.error("Server fetch error:", error);
  }

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  );
}
