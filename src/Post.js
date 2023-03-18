import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import "./Post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
        <Avatar />
        <div className='post__info'>
            <h2> {name}</h2>
            <p>{description}</p>
        </div>
    </div>
    <div className='post__body'>
        <p>{message}</p>
    </div>
    <div className='post__buttons'>
        <InputOption Icon={ThumbUpAltIcon}  title="Like" color="gray"/>
        <InputOption Icon={ChatIcon}  title="Comment" color="gray"/>
        <InputOption Icon={ShareIcon}  title="share" color="gray"/>
        <InputOption Icon={SendIcon}  title="send" color="gray"/>

    </div>
    </div>
  )
}

export default Post