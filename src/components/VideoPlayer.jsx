import { useRef, useState, useEffect } from 'react';
import {
	FaPlay,
	FaPause,
	FaStop,
	FaExpand,
	FaCompress,
	FaVolumeUp,
	FaVolumeMute,
} from 'react-icons/fa';
import '../assets/scss/VideoPlayer.scss'

const VideoPlayer = ({ src, thumbnail }) => {
	const videoRef = useRef(null);
	const intervalRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [progress, setProgress] = useState(0);
	const [volume, setVolume] = useState(1);
	const [isMuted, setIsMuted] = useState(false);
	const [useNativeControls, setUseNativeControls] = useState(
		window.innerWidth < 767,
	);

	useEffect(() => {
		const handleResize = () => {
			setUseNativeControls(window.innerWidth < 767);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const updateProgress = () => {
		if (videoRef.current) {
			const value =
				(videoRef.current.currentTime / videoRef.current.duration) * 100;
			setProgress(value);
		}
	};

	useEffect(() => {
		const video = videoRef.current;

		const handleVideoEnd = () => {
			setIsPlaying(false);
			setProgress(0);
			stopProgressLoop();
		};

		if (video) {
			video.addEventListener('ended', handleVideoEnd);
		}

		return () => {
			if (video) {
				video.removeEventListener('ended', handleVideoEnd);
			}
			stopProgressLoop();
		};
	}, []);

	const startProgressLoop = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}

		intervalRef.current = setInterval(() => {
			updateProgress();
		}, 1000);
	};

	const stopProgressLoop = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};

	const togglePlayPause = () => {
		if (videoRef.current) {
			if (videoRef.current.paused) {
				videoRef.current.play();
				setIsPlaying(true);
				startProgressLoop();
			} else {
				videoRef.current.pause();
				setIsPlaying(false);
				stopProgressLoop();
			}
		}
	};

	const stopVideo = () => {
		if (videoRef.current) {
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
			setIsPlaying(false);
		}
	};

	const handleSeek = (event) => {
		const seekTo = (event.target.value / 100) * videoRef.current.duration;
		videoRef.current.currentTime = seekTo;
		setProgress(event.target.value);
	};

	const renderCustomControls = () => {
		return (
			<>
				<button className='video-play' onClick={togglePlayPause}>
					{isPlaying ? <FaPause /> : <FaPlay />}
				</button>

				<input
					className='progress-bar'
					type='range'
					min='0'
					max='100'
					value={progress}
					onChange={handleSeek}
				/>
			</>
		);
	};

	return (
		<div className='video-wrapper'>
			<video
				className='video-player'
				ref={videoRef}
				src={src}
				poster={thumbnail}
				onClick={togglePlayPause}
				onPlay={startProgressLoop}
				onPause={stopProgressLoop}
				controls={useNativeControls} // Use native controls based on viewport width
			/>
		</div>
	);
};

export default VideoPlayer;