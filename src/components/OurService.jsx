import Img1 from "../assets/img/blockImg1.png"
import Img2 from "../assets/img/blockImg2.png"
import Img3 from "../assets/img/blockImg3.png"
import Img4 from "../assets/img/blockImg4.png"
import Img5 from "../assets/img/blockImg5.png"
import Img6 from "../assets/img/blockImg6.png"
import "../assets/scss/OurService.scss"

function OurService() {
    return (
        <div className="OurService-container">
            <div className="OurService-head">
                <div className="OurService-col">
                    <p className="OurService-title">OUR SERVICE</p>
                    <h1 className="OurService-title-sub">Our Service</h1>
                </div>
                <div className="OurService-col">
                    <p className="OurService-text">We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.</p>
                </div>
            </div>
            <div className="OurService-blocks">
                <div className="OurService-content">
                    <div className="OurService__block">
                        <img src={Img1} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Development
                        </h2>
                        <p className="OurService__block-text">
                            From concept to creation, our team of VR developers will bring your vision to life.
                        </p>
                    </div>
                    <div className="OurService__block">
                        <img src={Img1} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Development
                        </h2>
                        <p className="OurService__block-text">
                            From concept to creation, our team of VR developers will bring your vision to life.
                        </p>
                    </div>
                </div>
                <div className="OurService-content">
                    <div className="OurService__block">
                        <img src={Img1} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Development
                        </h2>
                        <p className="OurService__block-text">
                            From concept to creation, our team of VR developers will bring your vision to life.
                        </p>
                    </div>
                    <div className="OurService__block">
                        <img src={Img1} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Development
                        </h2>
                        <p className="OurService__block-text">
                            From concept to creation, our team of VR developers will bring your vision to life.
                        </p>
                    </div>
                </div>
                <div className="OurService-content">
                    <div className="OurService__block">
                        <img src={Img1} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Development
                        </h2>
                        <p className="OurService__block-text">
                            From concept to creation, our team of VR developers will bring your vision to life.
                        </p>
                    </div>
                    <div className="OurService__block">
                        <img src={Img1} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Development
                        </h2>
                        <p className="OurService__block-text">
                            From concept to creation, our team of VR developers will bring your vision to life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurService