import React from 'react'
import "./Sidebar.css"
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat.js';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            < Avatar/>
            <div className='sidebar-header-right'>
                <IconButton><DonutLargeIcon/></IconButton>
                <IconButton><ChatIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
            </div>

        </div>
        <div className='sidebar-search'>
            <SearchIcon/>
            <input placeholder="Search or start new chat" type="text"/>
        </div>
        
        <div className='sidebar-chats'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar