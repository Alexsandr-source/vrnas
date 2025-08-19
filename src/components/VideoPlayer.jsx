import playFirst from
import '../assets/scss/VideoPlayer.scss'


const VideoPlayer = ({ src, thumbnail }) => {
	// const video_player = document.querySelector('#video_player'),
	// mainVideo = video_player.querySelector('#main-video'),
	// progressAreaTime = video_player.querySelector('.progressAreaTime'),
	// contors = video_player.querySelector('.controls'),
	// progressArea = video_player.querySelector('.progress-area'),
	// progressBar = video_player.querySelector('.progress-bar'),
	// play_pause = video_player.querySelector('.progressAreaTime'),
	// fullscreen = video_player.querySelector('.fullscreen')
	
	// function playVideo() {
	// 	play_pause.innerHTML = 'pause';
	// 	play_pause.title = 'pause';
	// 	video_player.classList.add('paused')
	// 	mainVideo.play();
	// }

	// function pauseVideo() {
	// 	play_pause.innerHTML = 'play_arrow';
	// 	play_pause.title = 'play';
	// 	video_player.classList.remove('paused')
	// 	mainVideo.pause();
	// }

	// play_pause.addEventListener('click', () => {
	// 	const isVideoPaused = video_player.classList.contains('paused');

	// 	isVideoPaused ? pauseVideo() : playVideo();
	// })

	// fullscreen.addEventListener('click', () => {
	// 	if (!video_player.classList.contains('opanFullScreen')) {
	// 		video_player.classList.add('openFullScreen');
	// 		fullscreen.innerHTML = 'fullscreen_exit';
	// 		video_player.requestFullscreen();
	// 	} else {
	// 		video_player.classList.remove('openFullScreen');
	// 		fullscreen.innerHTML = 'fullscreen';
	// 		document.exitFullscreen();
	// 	}
	// })

	// return (
	// 	<div className='video-wrapper' id='video_player'>
	// 		<video
	// 			className='video-player'
	// 			id='main-video'
	// 			src={src}
	// 			poster={thumbnail}
	// 			onClick={playVideo}
	// 		/>
	// 		<div className="progressAreaTime"></div>
	// 		<div className='controls'>
	// 			<div className="progress-area">
	// 				<div className="progress-bar">
	// 					<span></span>
	// 				</div>
	// 			</div>
	// 			<div className="controls-left">
	// 				<span className="icon">
	// 					<img src={play} className="material-icons" alt='play'/>
	// 				</span>
	// 			</div>
	// 			<i className="material-symbols-outlined">
	// 				close_fullscreen
	// 			</i>
	// 		</div>
	// 	</div>
	// );

	const com = document.querySelector('.com'),
	videoHub = document.querySelector('.video__hud'),
	video = document.querySelector('.video'),
	videoPlayer = document.getElementById('video-player'),
	progressLine = document.getElementById('video-hud__progress-line'),
	actionButton = document.getElementById('video-hud__action'),
	actionImage = document.querySelector('.video__hud__action_img')

	/* Video */
		com.addEventListener('click', videoStart);
		function videoStart() {
			videoHub.style.display = 'block';
			com.style.display = 'none';
			videoPlayer.play();
		}
		let observer = new IntersectionObserver(() => {
			if (!videoPlayer.paused) {

				videoPlayer.pause()
			} else if(videoPlayer.currentTime != 0) {
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
				actionButton.setAttribute('class','video__hud__element video__hud__action video__hud__action_play');
			} else {
				videoPlayer.pause();
				actionImage.src = {src};
				actionButton.setAttribute('class','video__hud__element video__hud__action video__hud__action_pause');
			}
		}
		progressLine.addEventListener('click',videoChangeTime);
		
		function videoChangeTime(e) {
			let mouseX = Math.floor(e.pageX - progressLine.offsetLeft);
			let progress = mouseX / (progressLine.offsetWidth / 100);
			videoPlayer.currentTime = videoPlayer.duration * (progress / 100);
		}

	
	return (
		<div class='video'>
            <video class='video__player' id='video-player' src={src} thumbnail={thumbnail} preload='metadata'></video>
            <div class="com">
                <img src={playFirst} alt=""/>
            </div>
            <div class='video__hud'>
                <div class='video__hud__element video__hud__action video__hud__action_play' id='video-hud__action'>
                    <img class="video__hud__action_img" src="./assets/img/Arrow.svg" alt=""/>
                </div>
                <div class='video__hud__element video__hud__progress'>
                    <div value='0' max='100' class='video__hud__element video__hud__progress_line' id='video-hud__progress-line'></div>
                </div>
            </div>
        </div>
	);
};

export default VideoPlayer;