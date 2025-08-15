import { useRef, useState, useEffect } from 'react';
import play from '../assets/img/Play.svg'
import '../assets/scss/VideoPlayer.scss'

const VideoPlayer = ({ src, thumbnail }) => {

	function togglePlayPause() {
		"play.video"
		"start.progress"
	}

	return (
		<div className='video-wrapper'>
			<video
				className='video-player'
				src={src}
				poster={thumbnail}
				onClick={togglePlayPause}
			/>
			<div className='controls'>
				<div className="progress-area">
					<div className="progress-bar">
						<span></span>
					</div>
				</div>
				<div className="controls-left">
					<span className="icon">
						<img src={play} className="material-icons" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;