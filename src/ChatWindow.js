import React, {useEffect,useState} from 'react'
import "./ChatWindow.css";
import {Avatar, IconButton} from "@material-ui/core";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';


function ChatWindow() {
const [avatarImage,setAvatarImage] = useState('');

useEffect(() => {
      setAvatarImage(Math.random(0,9999))
},[])


  return (
    <div className="chat-window">
        <div className="chat-header">
            <Avatar src={`https://avatars.dicebear.com/api/adventurer/${avatarImage}.svg`}/>
            <div className="chat-header-info">
                <h3>Name</h3>
                <p>Last seen at...</p>
            </div>
            <IconButton><AttachFileIcon/></IconButton>
            <IconButton><SearchIcon/></IconButton>
            <IconButton><MoreVertIcon/></IconButton>
        </div>
        <div className="chat-messages">
            <div className="messager-info">
                <span className="message-name">Gal Bahar</span>
                <span> | </span>
                <span className="message-time">21:28</span>
            </div>
            <div className="message-text">Hello Man</div>
        </div>
        <div className="chat-footer">
            <IconButton><InsertEmoticonIcon/></IconButton>
            <IconButton><AttachFileIcon/></IconButton>
            <form className="typeText">
                <input>Type Somthing...</input>
            </form>
            <IconButton><MicIcon/></IconButton>
            <IconButton><SendIcon/></IconButton>
        </div>
    </div>
  )
}

export default ChatWindow