import React from 'react'

import './styles.scss'

const VideoPlayer = () => <section>
  <div className="video-player">
    <iframe
      title="Moriá FM Stream"
      className="jmvplayer"
      src="https://player.jmvstream.com/lvw/UGjEwAqmKNkGw83oo7ZPAIdBVnby2g"
      allowFullScreen
      allow="autoplay; fullscreen"
      frameBorder="0"
      ></iframe>
    </div>
</section>

export default VideoPlayer
