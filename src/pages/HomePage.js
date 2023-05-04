import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";
import blogpic1 from "../images/blog/blog-1.jpg"
import blogpic2 from "../images/blog/blog-2.jpg"
import blogpic3 from "../images/blog/blog-3.jpg"
import sale from "../images/product-sale.png"
import instapic1 from "../images/instagram/instagram-1.jpg"
import instapic2 from "../images/instagram/instagram-2.jpg"
import instapic3 from "../images/instagram/instagram-3.jpg"
import instapic4 from "../images/instagram/instagram-4.jpg"
import instapic5 from "../images/instagram/instagram-5.jpg"
import instapic6 from "../images/instagram/instagram-6.jpg"
import Countdown from "../Components/Countdown";
import Slider from "../Components/Slider"


function HomePage() {


    return (
        <div>
            <Carousel />
            <div className="m-2">
                <div className="categories mt-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="categories_hot_deal col-lg-5">
                                <img src={sale} alt="" />
                                <div className="hot_deal_sticker">
                                    <span>Sale Of</span>
                                    <h5>$29.99</h5>
                                </div>
                            </div>

                            <div className="categories_countdown col-lg-7">
                                <span>Deal Of The Week</span>
                                <h2>Multi-pocket Chest Bag Black</h2>
                                <Countdown />
                                <Link> <button type="button" className="btn btn-dark mt-4 p-3">SHOP NOW
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <Slider />
                </div>

                <div className="instagram mb-5">
                    <div className="container">
                        <div className="row insta_row">
                            <div className="col-lg-4">
                                <div className="instagram_text">
                                    <h2>Instagram</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.</p>
                                    <h3>#Male_Fashion</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="instagram_pic">
                                    <img className="insta_pic_item" src={instapic1} alt="" ></img>
                                    <img className="insta_pic_item" src={instapic2} alt=""></img>
                                    <img className="insta_pic_item" src={instapic3} alt=""></img>
                                    <img className="insta_pic_item" src={instapic4} alt=""></img>
                                    <img className="insta_pic_item" src={instapic5} alt=""></img>
                                    <img className="insta_pic_item" src={instapic6} alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="latest_news_title">
                                <span>Latest News</span>
                                <h2>Fashion New Trends</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row blog_cards">
                        <div className="card col-lg-4 col-md-6 col-sm-12 blog_content">
                            <img src={blogpic1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span><i className="fa-solid fa-calendar-days"></i>16 July 2023</span>
                                <h5 className="card-title">What Curling Irons Are The Best</h5>
                                <Link href="#">Read More</Link>
                            </div>
                        </div>

                        <div className="card col-lg-4 col-md-6 col-sm-12 blog_content">
                            <img src={blogpic2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span><i className="fa-solid fa-calendar-days"></i>16 July 2023</span>
                                <h5 className="card-title">Eternity Bands Do Last Forever</h5>
                                <Link href="#">Read More</Link>
                            </div>
                        </div>

                        <div className="card col-lg-4 col-md-6 col-sm-12 blog_content">
                            <img src={blogpic3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span><i className="fa-solid fa-calendar-days"></i>16 July 2023</span>
                                <h5 className="card-title">The Health Benefits Of Sunglasses</h5>
                                <Link href="#">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;