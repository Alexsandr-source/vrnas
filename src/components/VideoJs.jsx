import { useEffect, useRef } from "react";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoJS = () => {
    const playerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current) return;

        if (!videoRef.current) {
            const videoElement = document.createElement("video-js");

            videoElement.classList.add("vjs-big-play-centered", "video-js");
        }
    }, [])

    return (
        <div>
            <div ref={videoRef}/>
        </div>
    )
}

export default VideoJS;