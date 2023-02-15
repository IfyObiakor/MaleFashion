
import { Link } from "react-router-dom";
import carouselimg1 from "../images/carousel-1.jpeg"
import carouselimg2 from "../images/carousel-2.jpeg"

function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundImage: `url(${carouselimg1})` , backgroundSize: "cover", minHeight: "100vh", minWidth: "100%"}}>
                        <div className="carousel-caption carousel-text">
                            <h6>SUMMER COLLECTION</h6>
                            <h2>Fall - Winter Collections 2030</h2>
                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to
                                exceptional quality.</p>

                            <Link href="#">
                                <button type="button" className="btn btn-dark btn-lg p-3 mb-5">SHOP NOW &nbsp;
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </button></Link>
                            <div className="carousel_social">
                                <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                                <Link href="#"><i className="fa-brands fa-pinterest"></i></Link>
                                <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item" style={{ backgroundImage: `url(${carouselimg2})` , backgroundSize: "cover", minHeight: "100vh", minWidth: "100%"}}>
                        <div className="carousel-caption carousel-text">
                            <h6>SUMMER COLLECTION</h6>
                            <h2>Fall - Winter Collections 2030</h2>
                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to
                                exceptional quality.</p>

                            <Link href="#">
                                <button type="button" className="btn btn-dark btn-lg p-3 mb-5">SHOP NOW &nbsp;
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </button></Link>
                            <div className="carousel_social">
                                <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                                <Link href="#"><i className="fa-brands fa-pinterest"></i></Link>
                                <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon btn btn-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon btn btn-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;

