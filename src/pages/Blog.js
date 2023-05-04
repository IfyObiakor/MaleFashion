
import {Link} from "react-router-dom"
import blogpic1 from "../images/blog/blog-1.jpg"
import blogpic2 from "../images/blog/blog-2.jpg"
import blogpic3 from "../images/blog/blog-3.jpg"
import blogpic4 from "../images/blog/blog-5.jpg"
import blogpic5 from "../images/blog/blog-6.jpg"
import blogpic6 from "../images/blog/blog-7.jpg"
import blogpic7 from "../images/blog/blog-8.jpg"
import blogpic8 from "../images/blog/blog-9.jpg"
import blogbanner from "../images/blog/blog-banner.jpg"


function Blog() {
    return (
        <div>
            <div className="container-fluid blog_banner"
                style={{backgroundImage: `url(${blogbanner})`, width: "100%", height: "60vh" , backgroundSize: "cover"}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Our Blog</h2>
                    </div>
                </div>
            </div>

          <div className="m-2">
          <div className="container">
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

                    <div className="card col-lg-4 col-md-6 col-sm-12 blog_content">
                        <img src={blogbanner} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span><i className="fa-solid fa-calendar-days"></i>16 July 2023</span>
                            <h5 className="card-title">Aiming For Higher The Mastopexy</h5>
                            <Link href="#">Read More</Link>
                        </div>
                    </div>

                    <div className="card col-lg-4 col-md-6 col-sm-12 blog_content">
                        <img src={blogpic4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span><i className="fa-solid fa-calendar-days"></i>16 July 2023</span>
                            <h5 className="card-title">Wedding Rings A Gift For A Lifetime</h5>
                            <Link href="#">Read More</Link>
                        </div>
                    </div>

                    <div className="card col-lg-4 col-md-6 col-sm-12 blog_content">
                        <img src={blogpic5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span><i className="fa-solid fa-calendar-days"></i>16 July 2023</span>
                            <h5 className="card-title">The Different Methods Of Hair Removal</h5>
                            <Link href="#">Read More</Link>
                        </div>
                    </div>

                    <div className="card col-lg-4 col-md-6 col-sm-12 blog_content">
                        <img src={blogpic6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span><i className="fa-solid fa-calendar-days"></i>16 July 2023</span>
                            <h5 className="card-title">Hoop Earrings A Style From History</h5>
                            <Link href="#">Read More</Link>
                        </div>
                    </div>

                    <div className="card col-lg-4 col-md-6 col-sm-12 blog_content">
                        <img src={blogpic7} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span><i className="fa-solid fa-calendar-days"></i>16 July 2023</span>
                            <h5 className="card-title">Lasik Eye Surgery Are You Ready</h5>
                            <Link href="#">Read More</Link>
                        </div>
                    </div>

                    <div className="card col-lg-4 col-md-6 col-sm-12 blog_content">
                        <img src={blogpic8} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <span><i className="fa-solid fa-calendar-days"></i>16 July 2023</span>
                            <h5 className="card-title">Lasik Eye Surgery Are You Ready</h5>
                            <Link href="#">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Blog;