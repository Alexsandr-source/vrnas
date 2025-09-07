import { useEffect, useRef } from "react";
import playFirst from "../assets/img/play.svg";
import playIcon from "../assets/img/play.svg";
import pauseIcon from "../assets/img/pause.svg";
import "../assets/scss/VideoPlayer.scss";

const VideoPlayer = ({ src, thumbnail }) => {
	const com = useRef(null),
		videoHub = useRef(null),
		video = useRef(null),
		videoPlayer = useRef(null),
		progressLine = useRef(null),
		progressFill = useRef(null),
		actionButton = useRef(null),
		actionImage = useRef(null);

	function videoStart() {
		videoHub.current.style.display = "block";
		com.current.style.display = "none";
		videoPlayer.current.play();
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

	function videoChangeTime(e) {
		const rect = progressLine.current.getBoundingClientRect();
		let mouseX = e.clientX - rect.left;
		let progress = (mouseX / rect.width) * 100;
		progress = Math.max(0, Math.min(progress, 100));
		videoPlayer.current.currentTime = videoPlayer.current.duration * (progress / 100);
		progressFill.current.style.width = progress + "%";
	}

	useEffect(() => {
		function handleMouseMove(e) {
			videoChangeTime(e);
		}
		function handleMouseUp() {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		}

		const handleMouseDown = (e) => {
			videoChangeTime(e);
			document.addEventListener("mousemove", handleMouseMove);
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
		if (videoPlayer.current) {
			const width = videoPlayer.current.offsetWidth;
			com.current.style.bottom = `${width * 0.375}px`;
		}
	}, []);


	return (
		<div ref={video} className="video">
			<video
				ref={videoPlayer}
				className="video__player"
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
	);
};

export default VideoPlayer;
