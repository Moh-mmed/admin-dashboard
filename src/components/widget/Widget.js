import './widget.scss'
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import AddCardIcon from "@mui/icons-material/AddCard";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({type}) => {

    let data;
    // Temporary
    const amount = 200;
    const perc = 20;
    switch (type) {
        case "user":
            data = {
              title: "USERS",
              isMoney: false,
              link: "View all users",
              icon: (
                <SupervisedUserCircleOutlinedIcon
                  className="icon"
                  style={{
                    color: "#EC994B",
                    backgroundColor: "rgba(236, 153, 75, 0.25)",
                  }}
                />
              ),
            };
            break;
        case "order":
            data = {
              title: "ORDERS",
              isMoney: false,
              link: "View all orders",
              icon: (
                <AddCardIcon
                  className="icon"
                  style={{
                    color: "#15133C",
                    backgroundColor: "rgba(21, 19, 60, 0.25)",
                  }}
                />
              ),
            };
            break;
        case "earning":
            data = {
              title: "EARNINGS",
              isMoney: true,
              link: "View net earnings",
              icon: (
                <MonetizationOnOutlinedIcon
                  className="icon"
                  style={{
                    color: "#6BCB77",
                    backgroundColor: "rgba(107, 203, 119, 0.25)",
                  }}
                />
              ),
            };
            break;
        case "balance":
            data = {
              title: "BALANCE",
              isMoney: true,
              link: "View balance details",
              icon: (
                <AccountBalanceWalletOutlinedIcon
                  className="icon"
                  style={{
                    color: "#EB5353",
                    backgroundColor: "rgba(235, 83, 83, 0.25)",
                  }}
                />
              ),
            };
            break;
        default:
            break;
        }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {perc}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget