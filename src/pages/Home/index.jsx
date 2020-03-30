import React from 'react'

import './styles.scss'
import AudioPlayer from '../../components/AudioPlayer'
import Comments from '../../components/Comments'
import VideoPlayer from '../../components/VideoPlayer'

const Home = () => (
  <section>
    <div className="container">
      <div className="left">
        <VideoPlayer className="video" />
      </div>
      <div className="right">
        <AudioPlayer className="audio" />
        <Comments className="comments" />
      </div>
    </div>
  </section>
)

export default Home
