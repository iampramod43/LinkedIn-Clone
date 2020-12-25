import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Post.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                </div>
                <div className="post__headerRight">

                <MoreHorizIcon className="post__headerIcon"/>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>  
    )
})

export default Post
