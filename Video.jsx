import React from 'react'
import './Video.css'
import video from '../../assets/Videoo.mp4' 
import { useRef } from 'react'
const Video = ({play,set}) => {
const playVideo=useRef(null)
const closer=(e)=>{
  if(e.target ===playVideo.current){
    set(false)
  }
}
  return (
    <div className={`video ${play?'':'hide'}`} ref={playVideo} onClick={closer}>
     <video src={video} autoPlay muted controls ></video>
    </div>
  )
}

export default Video
