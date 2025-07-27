import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';

const VideoJS = ({ options, onReady }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js');
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(playerRef.current);
      });
    } else {
      playerRef.current.autoplay(options.autoplay);
      playerRef.current.src(options.sources);
    }
  }, [options]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

export default VideoJS;
