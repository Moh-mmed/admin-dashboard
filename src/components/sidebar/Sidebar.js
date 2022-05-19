import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import AddCardIcon from "@mui/icons-material/AddCard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import SettingsInputCompositeOutlinedIcon from "@mui/icons-material/SettingsInputCompositeOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FaceIcon from "@mui/icons-material/Face";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink} from "react-router-dom"
import {
  DarkModeContext,
} from "./../../context/DarkModeContext";
import { useContext } from "react";

const Sidebar = () => {
const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/">
          <span className="logo">natours admin</span>
        </NavLink>
      </div>
      <hr className="line" />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <NavLink to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>
          <p className="title">LIST</p>
          <NavLink to="/users">
            <li>
              <SupervisedUserCircleOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </NavLink>
          <NavLink to="/products">
            <li>
              <StoreOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </NavLink>
          <NavLink to="/orders">
            <li>
              <AddCardIcon className="icon" />
              <span>Orders</span>
            </li>
          </NavLink>
          <p className="title">USEFUL</p>
          <NavLink to="/stats">
            <li>
              <QueryStatsIcon className="icon" />
              <span>Stats</span>
            </li>
          </NavLink>
          <NavLink to="/delivery">
            <li>
              <DeliveryDiningOutlinedIcon className="icon" />
              <span>Delivery</span>
            </li>
          </NavLink>
          <NavLink to="/notifications">
            <li>
              <NotificationsActiveOutlinedIcon className="icon" />
              <span>Notifications</span>
            </li>
          </NavLink>
          <p className="title">SERVICE</p>
          <NavLink to="/system-health">
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>
          </NavLink>
          <NavLink to="/logs">
            <li>
              <LockOpenIcon className="icon" />
              <span>Logs</span>
            </li>
          </NavLink>
          <NavLink to="/settings">
            <li>
              <SettingsInputCompositeOutlinedIcon className="icon" />
              <span>Settings</span>
            </li>
          </NavLink>
          <p className="title">USER</p>
          <NavLink to="/profile">
            <li>
              <FaceIcon className="icon" />
              <span>Profile</span>
            </li>
          </NavLink>
          <NavLink to="/logout">
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="color-options"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
        <div
          className="color-options"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar