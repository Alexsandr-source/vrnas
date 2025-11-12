import touchMan from '../assets/img/touchMan.png'
import checkBox from '../assets/img/checkBox.svg'
import "../assets/scss/AboutUs.scss"

function AboutUs() {
    return (
        <div className="AboutUs-container">
            <div className="AboutUs-col">
                <img className="AboutUs-img" src={touchMan}/>
            </div>
            <div className="AboutUs-col">
                <p className="AboutUs-title">ABOUT US</p>
                <h1 className="AboutUs-title-sub">Bring your events to life like never before with our VR services.</h1>
                <p className="AboutUs-text">VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>
                <div className="AboutUs__checkBox">
                    <p className="AboutUs__checkBox-text"><img src={checkBox} />Cutting-Edge Technology</p>
                    <p className="AboutUs__checkBox-text"><img src={checkBox} />Versatile Applications</p>
                    <p className="AboutUs__checkBox-text"><img src={checkBox} />Affordable and Accessible</p>
                </div>
                <button className="AboutUs-button">read more</button>
            </div>
        </div>
    )
}

export default AboutUs;