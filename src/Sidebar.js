import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'
function Sidebar() {

    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hashtag">#</span>
            <p className="sidebar__topic">{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://i.pinimg.com/originals/a1/09/5b/a1095b9d16a0f05582dfba76c88f16dc.jpg" alt=""/>
                <Avatar src={user.photoURL} className="sidebar__avatar">{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed Your Profile</p>
                    <p className="sidebar__statNumber">2,456</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views On Post</p>
                    <p className="sidebar__statNumber">2,438</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactJs")}
                {recentItem("reactJs")}
                {recentItem("Web Developer")}
                {recentItem("Full stack Jobs")}
                {recentItem("Angular")}
            </div>
        </div>
    )
}

export default Sidebar;
