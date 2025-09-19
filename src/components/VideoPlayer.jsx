import { useEffect, useState, useRef } from "react";
import playFirst from "../assets/img/play.svg";
import playIcon from "../assets/img/play.svg";
import pauseIcon from "../assets/img/pause.svg";
import "../assets/scss/VideoPlayer.scss";

const VideoPlayer = ({ src, thumbnail }) => {
	const [isFixed, setIsFixed] = useState(false);
	const com = useRef(null),
		videoHub = useRef(null),
		video = useRef(null),
		videoPlayer = useRef(null),
		progressLine = useRef(null),
		progressFill = useRef(null),
		actionButton = useRef(null),
		actionImage = useRef(null),
		closeButton = useRef(null);

	function videoStart() {
		setIsFixed(prev => !prev)
		videoHub.current.style.display = "flex";
		com.current.style.display = "none";
		videoPlayer.current.play();
		videoPlayer.current.remove.className = "video__player";
		videoPlayer.current.add.className = "video__player-open";
		updateButtonUI();
	}

	function videoClose() {
		setIsFixed(prev => !prev)
		com.current.style.display = "flex";
		videoHub.current.style.display = "none";
		videoPlayer.current.pause();
		videoPlayer.current.currentTime = 0;
		updateButtonUI();
	}

	useEffect(() => {
		const handleTimeUpdate = () => {
			const { currentTime, duration } = videoPlayer.current;
			if (!duration) return;
			const progress = (currentTime / duration) * 100;
			progressFill.current.style.width = progress + "%";
		};

		const vid = videoPlayer.current;
		if (vid) vid.addEventListener("timeupdate", handleTimeUpdate);

		return () => {
			if (vid) vid.removeEventListener("timeupdate", handleTimeUpdate);
		};
	}, []);

	useEffect(() => {
		let observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting && !videoPlayer.current.paused) {
					videoPlayer.current.pause();
					updateButtonUI();
				}
			},
			{ threshold: 0.4 }
		);
		if (video.current) observer.observe(video.current);
		return () => observer.disconnect();
	}, []);

	function updateButtonUI() {
		if (videoPlayer.current.paused) {
			actionImage.current.src = playIcon;
			actionButton.current.className =
				"video__hud__element video__hud__action video__hud__action_play";
		} else {
			actionImage.current.src = pauseIcon;
			actionButton.current.className =
				"video__hud__element video__hud__action video__hud__action_pause";
		}
	}

	function videoAct() {
		if (videoPlayer.current.paused) {
			videoHub.current.style.display = "block";
			com.current.style.display = "none";
			videoPlayer.current.play();
		} else {
			videoPlayer.current.pause();
		}
		updateButtonUI();
	}


	useEffect(() => {
		function handleMouseUp() {
			document.removeEventListener("mouseup", handleMouseUp);
		}

		const handleMouseDown = (e) => {
			document.addEventListener("mouseup", handleMouseUp);
		};

		const bar = progressLine.current;
		if (bar) {
			bar.addEventListener("mousedown", handleMouseDown);
		}

		return () => {
			if (bar) {
				bar.removeEventListener("mousedown", handleMouseDown);
			}
		};
	}, []);

	//Com
	useEffect(() => {
		const width = videoPlayer.current.offsetWidth;
		com.current.style.bottom = `${width * 0.375}px`;
	}, []);


	return (
		<div className={`${isFixed ? "container" : ""}`}>
			<img ref={closeButton} className={`${isFixed ? "video-open" : "video-close"}`} onClick={videoClose} src="" alt="close"/>
			<div ref={video} className={`${isFixed ? "video_fixed" : "video"}`}>
				<video
					ref={videoPlayer}
					className={"video__player"}
					onClick={videoAct}
					src={src}
					poster={thumbnail}
					preload="metadata"
				></video>
				<div ref={com} className="com" onClick={videoStart}>
					<img src={playFirst} alt="play" />
				</div>
				<div ref={videoHub} className="video__hud">
					<div
						ref={actionButton}
						className="video__hud__element video__hud__action video__hud__action_play"
						onClick={videoAct}
					>
						<img
							ref={actionImage}
							className="video__hud__action_img"
							src={playIcon}
							alt="action button"
						/>
					</div>
					<div className="video__hud__element video__hud__progress">
						<div
							ref={progressLine}
							className="video__hud__element video__hud__progress_line"
						>
							<div ref={progressFill} className="progress-fill"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
