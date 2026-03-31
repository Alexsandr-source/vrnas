import manTop from "../assets/img/Go.png";
import manBottom from "../assets/img/Jo.png";
import img1 from "../assets/img/testimonalImg1.png";
import img2 from "../assets/img/testimonalImg2.png";
import img3 from "../assets/img/testimonalImg3.png";
import img4 from "../assets/img/testimonalImg4.png";
import img5 from "../assets/img/testimonalImg5.png";
import img6 from "../assets/img/testimonalImg6.png";
import "../assets/scss/Testimonial.scss";

function Testimonial() {

    return (
        <div className="Testimonial">
            <div className="Testimonial-container">
                <div className="Testimonial__header">
                    <h1 className="Testimonial-title">TESTIMONIAL</h1>
                    <h2 className="Testimonial-text">What Our Clients Are Saying</h2>
                </div>

                <div className="center">
                    <img className="center-img" src={manTop} alt="" />
                    <div className="center-circle">
                        <img className="center-circle-img" src={manBottom} alt="" />
                    </div>
                </div>

                <div className="orbit orbit2">
                    <div className="cirlces orbit2-cirlces">
                        <img src={img1}/>
                    </div>
                </div>

                <div className="orbit orbit3">
                    <div className="cirlces orbit3-cirlces">
                        <img src={img2}/>
                    </div>
                </div>

                <div className="orbit orbit4">
                    <div className="cirlces orbit4-cirlces">
                        <img src={img3}/>
                    </div>
                </div>

                <div className="orbit orbit5">
                    <div className="cirlces orbit5-cirlces">
                        <img src={img4}/>
                    </div>
                </div>

                <div className="orbit orbit6">
                    <div className="cirlces orbit6-cirlces">
                        <img src={img5}/>
                    </div>
                </div>
                <div className="orbit orbit6">
                    <div className="cirlces orbit7-cirlces">
                        <img src={img6}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Testimonial