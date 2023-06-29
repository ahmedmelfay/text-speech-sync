import * as React from "react";
import { Props } from "./types";

class AudioPlayer extends React.PureComponent<Props> {
  render() {
    const { handlePlayClick, handlePauseClick, handleEnded } = this.props;

    return (
      <audio
        controls
        src="https://drive.google.com/uc?export=download&id=1O4h2TPXy9SnbtwMPQPzYlPLaGkSkUgo7"
        onPlaying={handlePlayClick}
        onPause={handlePauseClick}
        onEnded={handleEnded}
      />
    );
  }
}

export default AudioPlayer;
