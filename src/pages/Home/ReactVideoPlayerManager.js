import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import videoManager from "./videos/una_interact_manager.mp4";

const ReactVideoPlayerManager = () => {
  return (
    <Video
      className="style-video"
      controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
    >
      <source src={videoManager} type="video/mp4" />
    </Video>
  );
};

export default ReactVideoPlayerManager;
