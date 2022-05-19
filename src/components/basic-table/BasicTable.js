import "./basic-table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const BasicTable = () => {
    const rows = [
      {
        id: 1565156,
        product: "Acer Nitro 5",
        img: "https://picsum.photos/300",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Approved",
      },
      {
        id: 1575156,
        product: "Acer Nitro 5",
        img: "https://picsum.photos/300",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Pending",
      },
      {
        id: 1585156,
        product: "Acer Nitro 4",
        img: "https://picsum.photos/300",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Approved",
      },
      {
        id: 1595156,
        product: "Acer Nitro 6",
        img: "https://picsum.photos/300",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Pending",
      },
    ];

  return (
    <TableContainer component={Paper} className="basic-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Tracking ID</TableCell>
            <TableCell className="table-cell">Product</TableCell>
            <TableCell className="table-cell">Customer</TableCell>
            <TableCell className="table-cell">Date</TableCell>
            <TableCell className="table-cell">Amount</TableCell>
            <TableCell className="table-cell">Payment Method</TableCell>
            <TableCell className="table-cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="table-cell">{row.id}</TableCell>
              <TableCell className="table-cell">
                <div className="cell-wrapper">
                  <img src={row.img} alt={row.product} className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="table-cell">
                {row.customer}
              </TableCell>
              <TableCell className="table-cell">
                {row.date}
              </TableCell>
              <TableCell className="table-cell">
                {row.amount}
              </TableCell>
              <TableCell className="table-cell">
                {row.method}
              </TableCell>
              <TableCell className="table-cell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;