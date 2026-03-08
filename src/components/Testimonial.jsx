import man from "../assets/img/GoJo.png";
import "../assets/scss/Testimonial.scss";

function Testimonial() {

    return (
        <div className="Testimonial">
            <div className="Testimonial-container">

                <h1>TESTIMONIAL</h1>

                <div className="center-circle">
                    <img src={man} alt="" />
                </div>

                <div className="orbit orbit1">
                    <div className="orbit1-cirlces"></div>
                </div>

                <div className="orbit orbit2">
                    <div className="orbit2-cirlces"></div>
                </div>

                <div className="orbit orbit3">
                    <div className="orbit3-cirlces"></div>
                </div>

                <div className="orbit orbit4">
                    <div className="orbit4-cirlces"></div>
                </div>

                <div className="orbit orbit5">
                    <div className="orbit5-cirlces"></div>
                </div>

                <div className="orbit orbit6">
                    <div className="orbit6-cirlces"></div>
                </div>

            </div>
        </div>
    )
}
export default Testimonial