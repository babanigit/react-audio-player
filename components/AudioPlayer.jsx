import React, { Component } from "react";

import AudioFile from "./FLS.mp3";

class AudioPlayer extends Component {
  audioSong = new Audio(AudioFile);

  state = {
    isPlaying: false,
  };

  playPause = () => {
    // here data is false
    let data = this.state.isPlaying;

    if (data) {
      // Pause the song if it is playing
      this.audioSong.pause();
    } else {
      // Play the song if it is paused
      this.audioSong.play();
    }

    this.setState({ isPlaying: !data });
    return 0;
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.playPause}>click me!</button>
          <div>{this.state.isPlaying ? "playing" : "paused"}</div>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
