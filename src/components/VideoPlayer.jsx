import { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ src, thumbnail }) => {
    const videoRef = useRef(null);
    
    const intervalRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [useNativeContorls, setUseNativeControls] = useState(
        window.innerWidth < 767,
    );

    return (
        <>
            <video 
            className="video-player"
            ref={videoRef}
            src={src}
            poster={thumbnail}
            onClick={togglePlayPause}
            onPlay={startProgressLoop}
            onPause={stopProgressLoop}
            controls={useNativeContorls}
            />
            {!useNativeContorls && renderCustomControls()}
        </>
    );
};

export default VideoPlayer;