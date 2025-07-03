"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export default function FetchPagination() {
  const [mydata, setmydata] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const users = response.data.map(({ id, name, username, email }) => ({
        id,
        name,
        username,
        email,
      }));
      setmydata(users);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
  ];

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Paper>
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>User Table</h3>
        <DataGrid
          rows={mydata}
          columns={columns}
          pageSizeOptions={[3]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 3, page: 0 },
            },
          }}
        />
      </Paper>
    </div>
  );
}
