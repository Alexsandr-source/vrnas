import "../assets/scss/Testimonial.scss"

function Testimonial() {

    return (
        <div className="Testimonial">
            <div className="Testimonial-container">

                <div className="center-circle">
                    <img src="/img/man.png" alt="" />
                </div>

                <div className="orbit orbit1">
                <img className="planet p1" src="/img/avatar1.jpg" />
                </div>

                <div className="orbit orbit2">
                <img className="planet p2" src="/img/avatar2.jpg" />
                </div>

                <div className="orbit orbit3">
                <img className="planet p3" src="/img/avatar3.jpg" />
                </div>

                <div className="orbit orbit4">
                <img className="planet p4" src="/img/avatar4.jpg" />
                </div>

                <div className="orbit orbit5">
                <img className="planet p5" src="/img/avatar5.jpg" />
                </div>

            </div>
        </div>
    )
}
export default Testimonial