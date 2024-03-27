import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitbitIcon from '@mui/icons-material/Fitbit';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import {Link} from "react-router-dom";
import { PersonOutline } from "@mui/icons-material";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to='/' style={{textDecoration:"none"}}>
        <span className="logo">ZenClone</span>
        </Link>
        </div>
      <hr/>
      <div className="center">
        <ul>
        <p className="title">Main</p>
        <li>
        <DashboardIcon className="icon"/>
            <span>
                Dashboard
                </span>
                </li>
                <p className="title">Lists</p>
                <Link to='/users' style={{textDecoration:"none"}}>
                    <li>
                        <PersonOutline className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <li>
                <CategoryIcon className="icon"/>
            <span>
                Products
                </span>
                </li>
                <li>
                <GroupAddOutlinedIcon className="icon"/>
            <span>
                Users
                </span>
                </li>
                <li>
                <RocketLaunchIcon className="icon"/>
            <span>
                Orders
                </span>
                </li>
                <li>
                <DeliveryDiningIcon className="icon"/>
            <span>
                Delivery
                </span>
                </li>
                <p className="title">Usefull</p>
                <li>
                <QueryStatsIcon className="icon"/>
            <span>
                Stats
                </span>
                </li>
                <p className="title">Service</p>
                <li>
                <FavoriteIcon className="icon"/> 
            <span>
                System Health
                </span>
                </li>
                <li>
                <FitbitIcon className="icon"/>
            <span>
                Logs
                </span>
                </li>
                <li>
                <SettingsIcon className="icon"/>
            <span>
                Settings
                </span>
                </li>
                <p className="title">User</p>
                <li>
                <AccountCircleIcon className="icon"/>
            <span>
                Profile
                </span>
                </li>
                <li>
                <LogoutIcon className="icon"/>  
            <span>
                Logout
                </span>
                </li>
                </ul>
                </div>
      <div className="bottom">
      <div className="colorOptions"></div>
      <div className="colorOptions"></div>
      </div>
    </div>
  )
}

export default Sidebar
