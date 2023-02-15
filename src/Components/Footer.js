import {Link} from "react-router-dom"
import footerlogo from "../images/footer-logo.png"
import paymentlogo from "../images/payment.png"

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
      <div>
          <footer className="footer">
            <div className="container m-2">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer_about">
                            <Link href="#"><img src={footerlogo} alt=""/></Link>
                            <p>The customer is at the heart of our unique business model, which includes design.</p>
                            <Link href="#"><img src={paymentlogo} alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6">
                        <div className="footer_links">
                            <h6>SHOPPING</h6>
                            <ul>
                                <li><Link href="#">Clothing Store</Link></li>
                                <li><Link href="#">Trending Shoes</Link></li>
                                <li><Link href="#">Accessories</Link></li>
                                <li><Link href="#">Sale</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="footer_links">
                            <h6>SHOPPING</h6>
                            <ul>
                                <li><Link href="#">Contact Us</Link></li>
                                <li><Link href="#">Payment Methods</Link></li>
                                <li><Link href="#">Delivery</Link></li>
                                <li><Link href="#">Return & Exchanges</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="footer_links">
                            <h6>NEWSLETTER</h6>
                            <div className="footer_newsletter">
                                <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                                <form action="#">
                                    <input type="text" placeholder="Your email" />
                                    <button type="submit"><i className="fa-regular fa-envelope"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="footer_copyright_text">
                            <p>Copyright © {currentYear} All rights reserved | Built by Ifeoma Obiakor</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;