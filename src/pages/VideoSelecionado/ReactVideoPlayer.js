import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import videoInteract from './videos/teste_reac.mp4';


const ReactVideoPlayer = () => {
  return (
    <Video className="style-video"
    
    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} 
    >
      <source src={videoInteract} type='video/mp4' /> 
      
    </Video>

    
  )
}

export default ReactVideoPlayer;
