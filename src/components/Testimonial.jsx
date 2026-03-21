import manTop from "../assets/img/Go.png";
import manBottom from "../assets/img/Jo.png";
import img1 from "../assets/img/testimonalImg1.png";
import "../assets/scss/Testimonial.scss";

function Testimonial() {

    return (
        <div className="Testimonial">
            <div className="Testimonial-container">
                <div className="Testimonial__header">
                    <h1 className="Testimonial-title">TESTIMONIAL</h1>
                    <h1 className="Testimonial-text">What Our Clients Are Saying</h1>
                </div>

                <div className="circle">
                    <img className="circle-img" src={manTop} alt="" />
                    <div className="circle-center">
                        <img className="circle-center-img" src={manBottom} alt="" />
                    </div>
                </div>

                <div className="orbit orbit2">
                    <div className="orbit2-cirlces">
                        <img src={img1}/>
                    </div>
                </div>

                <div className="orbit orbit3">
                    <div className="orbit3-cirlces">
                        <img src={img1}/>
                    </div>
                </div>

                <div className="orbit orbit4">
                    <div className="orbit4-cirlces">
                        <img src={img1}/>
                    </div>
                </div>

                <div className="orbit orbit5">
                    <div className="orbit5-cirlces">
                        <img src={img1}/>
                    </div>
                </div>

                <div className="orbit orbit6">
                    <div className="orbit6-cirlces">
                        <img src={img1}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Testimonial