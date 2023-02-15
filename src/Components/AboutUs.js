
import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import aboutbannerimage from "../images/about/about-us.jpg"
import abouttestimony from "../images/about/testimonial-author.jpg"
import team1 from "../images/about/team-1.jpg"
import team2 from "../images/about/team-2.jpg"
import team3 from "../images/about/team-3.jpg"
import team4 from "../images/about/team-4.jpg"
import client1 from "../images/clients/client-1.png"
import client2 from "../images/clients/client-2.png"
import client3 from "../images/clients/client-3.png"
import client4 from "../images/clients/client-4.png"
import client5 from "../images/clients/client-5.png"
import client6 from "../images/clients/client-6.png"
import client7 from "../images/clients/client-7.png"
import client8 from "../images/clients/client-8.png"


function AboutUs() {
    return (
        <div>
            <Header />
            <Navbar />

            <div className="shop_breadcrumb">
                <h4>About Us</h4>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
            </div>

            <div className='m-2'>
                <div className="container mt-5 mb-5 about">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about_pic mb-5">
                                <img src={aboutbannerimage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about_item">
                                <h4>Who We Are ?</h4>
                                <p>Contextual advertising programs sometimes have strict policies that need to be adhered too.
                                    Let’s take Google as an example.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about_item">
                                <h4>Who We Do ?</h4>
                                <p>In this digital generation where information can be easily obtained within seconds, business
                                    cards still have retained their importance.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about_item">
                                <h4>Why Choose Us?</h4>
                                <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home
                                    sits, but for older or infirm people.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 p-0">
                                <div className="testimonial_text">
                                    <span><i className="fa-solid fa-quote-right"></i></span>
                                    <p>"Going out after work? Take your butane curling iron with you to the office, heat it up,
                                        style your hair before you leave the office and you won’t have to make a trip back home.”
                                    </p>
                                    <div className="testimonial_author">
                                        <div className="testimonial_author_pic">
                                            <img src={abouttestimony} alt="" />
                                        </div>
                                        <div className="testimonial_author_text">
                                            <h5>Augusta Schultz</h5>
                                            <p>Fashion Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-5">
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team_title">
                                <span>Our Team</span>
                                <h2>Meet Our Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row team">
                        <div className="col-lg-3 col-md-6 col-sm-6 team_item">
                            <img src={team1} alt="" />
                            <h4>John Smith</h4>
                            <span>Fashion Design</span>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 team_item">
                            <img src={team2} alt="" />
                            <h4>Christine Wise</h4>
                            <span>C.E.O</span>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 team_item">
                            <img src={team3} alt="" />
                            <h4>Sean Robbins</h4>
                            <span>Manager</span>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 team_item">
                            <img src={team4} alt="" />
                            <h4>Lucy Myers</h4>
                            <span>Delivery</span>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="client_title">
                                <span>Partner</span>
                                <h2>Happy Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <Link href="#" className="client_item"><img src={client1} alt="" /></Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <Link href="#" className="client_item"><img src={client2} alt="" /></Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <Link href="#" className="client_item"><img src={client3} alt="" /></Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <Link href="#" className="client_item"><img src={client4} alt="" /></Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <Link href="#" className="client_item"><img src={client5} alt="" /></Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <Link href="#" className="client_item"><img src={client6} alt="" /></Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <Link href="#" className="client_item"><img src={client7} alt="" /></Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <Link href="#" className="client_item"><img src={client8} alt="" /></Link>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default AboutUs;