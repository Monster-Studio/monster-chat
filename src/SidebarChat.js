import React, {useEffect,useState} from 'react'
import "./SidebarChat.css"
import {Avatar} from "@material-ui/core";


function SidebarChat() {
  const [avatarImage,setAvatarImage] = useState('');

  useEffect(() => {
    setAvatarImage(Math.random(0,9999))
  },[])

  return (
    <div className="sidebar-chat">
      <Avatar src={`https://avatars.dicebear.com/api/adventurer/${avatarImage}.svg`}/>
      <div className="sidebar-chat-info">
        <h2>Name</h2>
        <p>last message</p>
      </div>
    </div>
  )
}

export default SidebarChat
