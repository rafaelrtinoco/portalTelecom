import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import videoUna from "./videos/una_interact_rotazero.mp4";

const ReactVideoPlayerUna = () => {
  return (
    <Video
      className="style-video"
      controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
    >
      <source src={videoUna} type="video/mp4" />
    </Video>
  );
};

export default ReactVideoPlayerUna;
