import { useEffect, useRef } from "react";
import playFirst from "../assets/img/play.svg";
import "../assets/scss/VideoPlayer.scss";

const VideoPlayer = ({ src, thumbnail }) => {
	const com = document.querySelector('.com'),
	videoHub = document.querySelector('.video__hud'),
	video = document.querySelector('.video'),
	videoPlayer = document.getElementById('video-player'),
	progressLine = document.getElementById('video-hud__progress-line'),
	actionButton = document.getElementById('video-hud__action'),
	actionImage = document.querySelector('.video__hud__action_img')


	com.addEventListener('click', videoStart);
	function videoStart() {
		videoHub.style.display = 'block';
		com.style.display = 'none';
		videoPlayer.play();
	}
	let observer = new IntersectionObserver(() => {
		if (!videoPlayer.paused) {
			videoPlayer.pause()
		} else if(videoPlayer.currentTime !== 0) {
			videoPlayer.play()
		}
	}, { threshold: 0.4 })
	observer.observe(video)
	actionButton.addEventListener('click',videoAct);
	videoPlayer.addEventListener('click',videoAct);
	function videoAct() {
		if(videoPlayer.paused) {
			videoHub.style.display = 'block';
			com.style.display = 'none';
			videoPlayer.play();
			actionImage.setAttribute('src', {src});
			actionButton.setAttribute('className','video__hud__element video__hud__action video__hud__action_play');
		} else {
			videoPlayer.pause();
			actionImage.src = {src};
			actionButton.setAttribute('className','video__hud__element video__hud__action video__hud__action_pause');
		}
	}
	progressLine.addEventListener('click',videoChangeTime);
	
	function videoChangeTime(e) {
		let mouseX = Math.floor(e.pageX - progressLine.offsetLeft);
		let progress = mouseX / (progressLine.offsetWidth / 100);
		videoPlayer.currentTime = videoPlayer.duration * (progress / 100);
	}

	
	return (
		<div className='video'>
            <video className='video__player' id='video-player' src={src} thumbnail={thumbnail} preload='metadata'></video>
            <div className="com" >
                <img src={playFirst} alt="play"/>
            </div>
            <div className='video__hud'>
                <div className='video__hud__element video__hud__action video__hud__action_play' id='video-hud__action'>
                    <img className="video__hud__action_img" src="./assets/img/Arrow.svg" alt=""/>
                </div>
                <div className='video__hud__element video__hud__progress'>
                    <div value='0' max='100' className='video__hud__element video__hud__progress_line' id='video-hud__progress-line'></div>
                </div>
            </div>
        </div>
	);
};

export default VideoPlayer;