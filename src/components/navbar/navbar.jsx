import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatIcon from '@mui/icons-material/Chat';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ProfilePic from '../../Assests/Snapseed.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageIcon className="icon"/>
          English
          </div>
          <div className="item">
          <DarkModeIcon className="icon"/>
          </div>
          <div className="item">
          <CircleNotificationsIcon className="icon"/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <ChatIcon className="icon"/>
          <div className="counter">2</div>
          </div>
          <div className="item">
          <FeaturedPlayListIcon className="icon"/>
          </div>
          <div className="item">
          <img
          src={ProfilePic} alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
