import React from 'react';

import './styles.scss';

const AudioPlayer = () => <section>
  <div className="audio-container">
    <iframe
      className="audio-frame"
      title="Audio Rádio Moriá FM"
      src="http://portalmoria.com/player/jPlayer/examples/blue.monday/demo-08.html"
      scrolling="no"
      frameborder="0"
    ></iframe>
  </div>
</section>;

export default AudioPlayer;
