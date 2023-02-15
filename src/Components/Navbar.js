import { Link } from "react-router-dom"
import logo from "../images/logo.png"

function Navbar() {
    return (
        <div>
            <nav className=" navbar navbar-expand-lg navbar-expand-md bg-light">
                <div className="container-fluid m-2">
                    <Link to="/" className="navbar-brand col-lg-3 col-md-3 col-sm-6 navbar_logo" href="/">
                        <img src={logo} alt="MenFashion Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end offcanvas-size-sm offcanvas-size-md" data-bs-scroll="true" tabIndex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <p className="offcanvas-title" id="offcanvasNavbarLabel">Free shipping, 30-day return or refund
                                guarantee.</p>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="col-lg-9 col-md-9 navbar_links">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" aria-current="page" href="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/shop" className="nav-link" href="/shop">Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/blog" className="nav-link" href="/blog">Blog</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" role="button"
                                            data-bs-toggle="dropdown">Pages
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/aboutus" className="dropdown-item" href="/aboutus">About Us</Link></li>
                                            <li><Link to="/shoppingcart" className="dropdown-item" href="/shoppingcart">Shopping Cart</Link></li>
                                            <li><Link to="/checkout" className="dropdown-item" href="/checkout">Check Out</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link" href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 navbar_icons d-flex">
                                <Link href="#"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></Link>
                                <Link href="#"><i className="fa-regular fa-heart"></i></Link>
                                <Link to="/shoppingcart" href="/shoppingcart"><i className="fa-solid fa-cart-shopping"></i></Link>
                                <div className="price">$0.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;