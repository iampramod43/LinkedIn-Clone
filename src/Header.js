import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';

import './Header.css';
import HeaderOption from './HeaderOption.js';
import App from './App';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './Firebase';
function Header() {

    const dispatch = useDispatch();
    const logOutApp = () => {
        dispatch(logout());
        auth.signOut();
    }
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
                <HeaderOption onClick={logOutApp} avatar={true} title="Me"/>
                
            </div>
            <div className="header__last">
            <HeaderOption Icon={AppsIcon} title="Work"/>
            <HeaderOption title="Try Premium Free For 1 Month"/>
            </div>
        </div>
    )
}

export default Header
