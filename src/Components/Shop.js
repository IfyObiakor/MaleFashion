
import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import ShopCards from './ShopCards';
import ShopSidebar from './ShopSidebar';

function Shop() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="shop_breadcrumb">
                <h4>Shop</h4>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                </ol>
            </div>

            <div className='row m-2'>
                <div className='col-lg-3'>
                    <ShopSidebar />
                </div>

                <div className='col-lg-9'>
                    <div className="productOption">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="productOption_left">
                                    <p>Showing 1–12 of 126 results</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="productOption_right">
                                    <p>Sort by Price: &nbsp; </p>
                                    <select>
                                        <option defaultValue="">Low To High</option>
                                        <option value="">$0 - $55</option>
                                        <option value="">$55 - $100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ShopCards />
                </div>

                <div className="col-lg-12 mt-5">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <Link className="page-link">Previous</Link>
                            </li>
                            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                            <li className="page-item">
                                <Link className="page-link" href="#">Next</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Shop;
