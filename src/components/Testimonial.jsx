import man from "../assets/img/GoJo.png";
import "../assets/scss/Testimonial.scss";

function Testimonial() {

    return (
        <div className="Testimonial">
            <div className="Testimonial-container">
                <div className="inner-orbit">
                    <img src={man} alt="man" />
                    <div className="middle-orbit">
                        <div className="middle-orbit-cirlces"></div>

                        <div className="outer-orbit">
                            <div className="outer-orbit-cirlces"></div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
export default Testimonial