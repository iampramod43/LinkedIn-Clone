import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import './Header.css';
import HeaderOption from './HeaderOption.js';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './Firebase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
function Header() {

    const dispatch = useDispatch();
    const logOutApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={WorkIcon} title="Jobs"/>
                <HeaderOption Icon={SmsRoundedIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} avatar={true} title="Me"/>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={logOutApp}>Logout</MenuItem>
                </Menu>
                
            </div>
            <div className="header__last">
            <HeaderOption Icon={AppsIcon} title="Work"/>
            <HeaderOption Icon={CardMembershipIcon} title="Try Premium Free For 1 Month"/>
            </div>
        </div>
    )
}

export default Header
