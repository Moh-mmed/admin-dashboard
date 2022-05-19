import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {userColumns, userRows} from './../../db'
import { Link } from "react-router-dom";
import { useState } from "react";

const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
    const actionColumn = [
      {
        field: "action",
        header: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to="898">
                <div className="viewButton">View</div>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </div>
            </div>
          );
        },
      },
    ];

  return (
    <div className="datatable">
      <div className="datatable-title">
        <Link to="new" className="new-user-link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable