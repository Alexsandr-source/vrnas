import { useEffect, useRef } from "react";
import playFirst from "../assets/img/play.svg";
import "../assets/scss/VideoPlayer.scss";

const VideoPlayer = ({ src, thumbnail }) => {
	const com = useRef(null),
	videoHub = useRef(null),
	video = useRef(null),
	videoPlayer = useRef(null),
	progressLine = useRef(null),
	progressFill = useRef(null),
	actionButton = useRef(null),
	actionImage = useRef(null)

	function videoStart() {
		videoHub.current.style.display = 'block';
		com.current.style.display = 'none';
		videoPlayer.current.play();
	}

	useEffect(() => {
	const handleTimeUpdate = () => {
		const { currentTime, duration } = videoPlayer.current;
		if (!duration) return;
		const progress = (currentTime / duration) * 100;
		progressFill.current.style.width = progress + "%";
	};

	videoPlayer.current.addEventListener("timeupdate", handleTimeUpdate);

	return () => {
		videoPlayer.current.removeEventListener("timeupdate", handleTimeUpdate);
	};
	}, []);


	videoPlayer.current.addEventListener("timeupdate", handleTimeUpdate);

	return () => {
		videoPlayer.current.removeEventListener("timeupdate", handleTimeUpdate);
	};
	}, []);


	useEffect(() => {
		let observer = new IntersectionObserver(() => {
			if (!videoPlayer.current.paused) {
				videoPlayer.current.pause()
			} else if(videoPlayer.current.currentTime !== 0) {
				videoPlayer.current.play()
			}
		}, { threshold: 0.4 })
		observer.observe(video.current)
		return () => observer.disconnect();
	}, [])

	function videoAct() {
		if(videoPlayer.current.paused) {
			videoHub.current.style.display = 'block';
			com.current.style.display = 'none';
			videoPlayer.current.play();
			actionImage.current.src = src;
			actionButton.current.className = "video__hud__element video__hud__action video__hud__action_play";
		} else {
			videoPlayer.current.pause();
			actionImage.current.src = src;
			actionButton.current.className = "video__hud__element video__hud__action video__hud__action_pause";
		}
	}
	function videoChangeTime(e) {
		let mouseX = Math.floor(e.pageX - progressLine.current.offsetLeft);
		let progress = mouseX / (progressLine.current.offsetWidth / 100);
		videoPlayer.current.currentTime = videoPlayer.current.duration * (progress / 100);
	}

	return (
		<div ref={video} className='video'>
            <video ref={videoPlayer} className='video__player' onClick={videoAct} src={src} thumbnail={thumbnail} preload='metadata'></video>
            <div ref={com} className="com" onClick={videoStart}>
                <img src={playFirst} alt="play"/>
            </div>
            <div ref={videoHub} className='video__hud'>
                <div ref={actionButton} className='video__hud__element video__hud__action video__hud__action_play' onClick={videoAct}>
                    <img ref={actionImage} className="video__hud__action_img" src="./assets/img/Arrow.svg" alt=""/>
                </div>
                <div className='video__hud__element video__hud__progress'>
                    <div ref={progressLine} value='0' max='100' className='video__hud__element video__hud__progress_line' onClick={videoChangeTime}>
						<div ref={progressFill} className="progress-fill"></div>
					</div>
                </div>
            </div>
        </div>
	);
};

export default VideoPlayer;