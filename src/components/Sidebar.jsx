import React, { useContext, useState } from 'react'
import './Sidebar.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MessageIcon from '@mui/icons-material/Message';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Context } from '../context/context';


export default function Sidebar(){
  const {onSent,prevprompt,setrecentprompt,newchat} = useContext(Context)
   const [extend,setextend]= useState(false)
  
   const loadpromp = async (prompt)=>{
    setrecentprompt(prompt)
   await onSent(prompt)
   }
   function controlExtend(){
    setextend(!extend)
   }

  return (
    <div className="sidebar">
      <div className="top">
        <DensityMediumIcon id="icons" onClick={controlExtend}></DensityMediumIcon>
        <div className="new-chat" onClick={()=>newchat()}>
            <AddCircleOutlineIcon id="icons"></AddCircleOutlineIcon>
          {extend?  <p> new chat</p>:null}
        </div>
        {extend?<div className="recent">
           <p className='recent-title'> Recent</p>
           {prevprompt.map((item,index)=>{
             return(
              <div className="recent-entry" onClick={()=>{loadpromp(item)}}>
              <MessageIcon id="icons" ></MessageIcon>
               <p>{item.slice(0,18)}... </p>
             </div>
             )
           })}
         

        </div>:null}
      </div>
      <div className="bottom">
        <div className="bottom-items recent-entry">
       <HelpOutlineOutlinedIcon id="icons"></HelpOutlineOutlinedIcon>
           {extend? <p>Help</p>:null}
        </div>
        <div className="bottom-items recent-entry">
      <HistoryOutlinedIcon id="icons"></HistoryOutlinedIcon>
           {extend? <p>Activity</p>:null}
        </div>
        <div className="bottom-items recent-entry">
      <SettingsOutlinedIcon id="icons"></SettingsOutlinedIcon>
           {extend? <p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}