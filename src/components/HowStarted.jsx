import { useEffect, useState, useRef } from "react";
import playFirst from "../assets/img/howStartedButton.png";
import playIcon from "../assets/img/play.svg";
import pauseIcon from "../assets/img/pause.svg";
import closeIcon from "../assets/img/iconClose.png";
import thumbnail from '../assets/img/HowStartedImg.png';
import src from '../assets/video/video.mp4';
import "../assets/scss/HowStarted.scss"

function HowStarted() {
    const [isFixed, setIsFixed] = useState(false);

    const com = useRef(null),
        videoHub = useRef(null),
        video = useRef(null),
        videoPlayer = useRef(null),
        progressLine = useRef(null),
        progressFill = useRef(null),
        actionButton = useRef(null),
        actionImage = useRef(null),
        videoThumbnail = useRef(null),
        closeButton = useRef(null);
    
    function videoStart() {
        setIsFixed(prev => !prev)
        com.current.style.visibility = "hidden";
        videoThumbnail.current.style.visibility = "hidden"
        videoHub.current.style.display = "flex";
        videoPlayer.current.style.display = "flex";
        videoPlayer.current.play();
        videoPlayer.current.classList.toggle("video__player-open");
        updateButtonUI();
    }
    function videoClose() {
        setIsFixed(prev => !prev)
        com.current.style.visibility = "visible";
        videoThumbnail.current.style.visibility = "visible";
        videoHub.current.style.display = "none";
        videoPlayer.current.style.display = "none";
        videoPlayer.current.pause();
        videoPlayer.current.classList.toggle("video__player-open");
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
        if (vid) {
            vid.addEventListener("timeupdate", handleTimeUpdate);
        }
        return () => {
            if (vid) {
                vid.removeEventListener("timeupdate", handleTimeUpdate);
            }
        };
    }, []);
    useEffect(() => {
        const bar = progressLine.current;
        let isDragging = false;

        const updateProgress = (e) => {
            const rect = bar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            let percent = clickX / width;

            // защита от выхода за пределы
            percent = Math.max(0, Math.min(1, percent));

            progressFill.current.style.width = percent * 100 + "%";
            videoPlayer.current.currentTime = percent * videoPlayer.current.duration;
        };

        const handleMouseDown = (e) => {
            isDragging = true;
            updateProgress(e);
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };

        const handleMouseMove = (e) => {
            if (isDragging) {
                updateProgress(e);
            }
        };

        const handleMouseUp = (e) => {
            if (isDragging) {
                updateProgress(e);
                isDragging = false;
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }
        };

        if (bar) {
            bar.addEventListener("mousedown", handleMouseDown);
        }

        return () => {
            if (bar) {
                bar.removeEventListener("mousedown", handleMouseDown);
            }
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
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
            videoHub.current.style.display = "flex";
            com.current.style.display = "none";
            videoPlayer.current.play();
        } else {
            videoPlayer.current.pause();
        }
        updateButtonUI();
    }
    useEffect(() => {
        const width = videoThumbnail.current.offsetWidth;
        com.current.style.bottom = `${width * 0.26}px`;
    }, []);

    return (
        <div className="HowStarted-container">
            <h1 className="HowStarted-title">HOW TO GET STARTED</h1>
            <h2 className="HowStarted-title-sub">Bringing Your Virtual Reality Dreams to Life</h2>
            <div className="HowStarted-content">
                <div className="HowStarted-wrapper">
                    <div className={`${isFixed ? "container" : "HowStarted-video-container"}`}>
                        <img ref={closeButton} className={`${isFixed ? "HowStarted-video-open" : "HowStarted-video-close"} close`} onClick={videoClose} src={closeIcon} alt="close"/>
                        <div ref={video} className={`${isFixed ? "video_fixed" : "HowStarted-video"}`}>
                            <video
                                ref={videoPlayer}
                                className={"video__player"}
                                onClick={videoAct}
                                src={src}
                                poster={thumbnail}
                                preload="metadata"
                            ></video>
                            <img 
                                ref={videoThumbnail} 
                                className="HowStarted-video-thumbnail" 
                                src={thumbnail} 
                                alt=""
                            />
                            <div ref={com} className="HowStarted-video-com" onClick={videoStart}>
                                <img className="HowStarted-video-com-button" src={playFirst} alt="play" />
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
                                        <div ref={progressFill} className="HowStarted-video-progress-fill"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="HowStarted-button">
                GET STARTED
            </button>
        </div>
    )
}
export default HowStarted