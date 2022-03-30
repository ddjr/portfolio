import React from 'react'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import './IconAside.scss'

const style = { color: '#6A737D', fontSize: 40 };
export default function IconAside() {
return (
  <aside className='iconAside'>
    <div className='iconAside__top'>
       <a href="#home">
        <FileCopyIcon />
      </a>
      <a href="#project">
        <GitHubIcon sx={style}/>
      </a>
      <a href="#skills">
        <CodeIcon sx={style}/>
      </a>
      <a href="#contact">
        <EmailIcon sx={style}/>
      </a>
    </div> 
    <div className='iconAside__bottom'>
    <a href="#about">
      <AccountCircleRoundedIcon sx={style}/>
      </a>
      <SettingsIcon sx={style}/>
    </div> 
  </aside>
)}