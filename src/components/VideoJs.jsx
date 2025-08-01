import { useEffect, useRef } from "react";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoJS = ({ options, onReady}) => {
    const playerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current) return;

        if (!videoRef.current) {
            const videoElement = document.createElement("video-js");

            videoElement.classList.add("vjs-big-play-centered", "video-js");

            videoRef.current.appendChild(videoElement);

            const player = (playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            }));
        }
    }, [])

    return (
        <div>
            <div ref={videoRef}/>
        </div>
    )
}

export default VideoJS;