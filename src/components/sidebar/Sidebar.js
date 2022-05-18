import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import StoreIcon from "@mui/icons-material/Store";
import AddCardIcon from "@mui/icons-material/AddCard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import FaceIcon from "@mui/icons-material/Face";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">natours admin</span>
      </div>
      <hr className="line" />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <SupervisedUserCircleIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <AddCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <DeliveryDiningIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <LockOpenIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsInputCompositeIcon  className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <FaceIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-options"></div>
        <div className="color-options"></div>
      </div>
    </div>
  );
}

export default Sidebar