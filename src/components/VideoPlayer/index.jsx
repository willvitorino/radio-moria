import React from 'react'

import './styles.scss'

const VideoPlayer = () => <section>
  <div className="video-player">
    <iframe
      title="Moriá FM Stream"
      class="jmvplayer"
      src="https://player.jmvstream.com/lvw/UGjEwAqmKNkGw83oo7ZPAIdBVnby2g"
      allowfullscreen
      allow="autoplay; fullscreen"
      frameborder="0"
      ></iframe>
    </div>
</section>

export default VideoPlayer
