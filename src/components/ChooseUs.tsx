import { useEffect, useState, useRef } from "react";
import touchMan from '../assets/img/touchMan.png';
import checkBox from '../assets/img/checkBox.svg';
import playFirst from "../assets/img/play.svg";
import playIcon from "../assets/img/play.svg";
import pauseIcon from "../assets/img/pause.svg";
import closeIcon from "../assets/img/iconClose.png";
import thumbnail from '../assets/img/thumbnail2.png';
import src from '../assets/video/video.mp4';
import "../assets/scss/ChooseUs.scss"

function ChooseUs() {
    return (
        <div className="ChooseUs-container">
            <div className="ChooseUs-col">
                <p className="ChooseUs-title">WHY CHOOSE US</p>
                <h1 className="ChooseUs-title-sub">Why Choose Us for Your VR Needs</h1>
                <p className="ChooseUs-text">We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.</p>
            </div>
            <div className="ChooseUs-col">
                <div className="image-wrapper">
                    <img src={touchMan} alt="" />
                    <div className={`${isFixed ? "container" : "AboutUsVideo-container"}`}>
                        <img ref={closeButton} className={`${isFixed ? "AboutUsVideo-open" : "AboutUsVideo-close"} close`} onClick={videoClose} src={closeIcon} alt="close"/>
                        <div ref={video} className={`${isFixed ? "video_fixed" : "AboutUsVideo"}`}>
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
                                className="thumbnail" 
                                src={thumbnail} 
                                alt=""
                            />
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
                </div>
            </div>
        </div>
    )
}
export default ChooseUs