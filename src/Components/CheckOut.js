

import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

function CheckOut() {

    return (
        <div>
            <Header />
            <Navbar />

            <div className="shop_breadcrumb">
                <h4>Shop</h4>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" href="/">Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to="/shop" href="/shop">Shop</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Check Out</li>
                </ol>
            </div>

            <div className='row mt-5 m-2'>
                <form className="row container g-3 col-lg-6 col-md-6 checkOut_form">
                    <h5><strong>BILLING DETAILS</strong></h5>
                    <hr />
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name*</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name*</label>
                        <input required type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Shipping Address*</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Street Address" />
                        <br />
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputCity" className="form-label">City*</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputState" className="form-label">Country/State*</label>
                        <input type="text" className="form-control" id="inputState" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputZip" className="form-label">Postal/Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number*</label>
                        <input type="number" className="form-control" id="phoneNumber" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address*</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="orderNote" className="form-label">Order Note</label>
                        <input type="text" className="form-control" id="orderNote" placeholder='Notes about your order.. eg special notes for delivery' />
                    </div>
                    <div className="col-12">
                        <div className="checkout_input_checkbox">
                                <label htmlFor="policy">
                                I have read and agreed to the Privacy Policy *
                                    <input type="checkbox" id="policy" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                    </div>
                </form>

                <div className='col-lg-4 col-md-6 container'>
                    <div className="col-12">
                        <div className="checkout_order p-3">
                            <h4 className="order_title">Your order</h4>
                            <div className="checkout_products m-3">Product <span>Total</span></div>
                            <ul className="checkout_total">
                                <li>Vanilla salted caramel <span>$ 300.0</span></li>
                                <li>German chocolate <span>$ 170.0</span></li>
                                <li>Sweet autumn <span>$ 170.0</span></li>
                                <li>Cluten free mini dozen <span>$ 110.0</span></li>
                            </ul>
                            <ul className="checkout_total_all">
                                <li>Subtotal <span>$520.99</span></li>
                                <li>Total <span>$520.99</span></li>
                            </ul>
                            <div className="checkout_input_checkbox">
                                <label htmlFor="acc-or">
                                    Create an account?
                                    <input type="checkbox" id="acc-or" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                            <div className="checkout_input_checkbox">
                                <label htmlFor="payment">
                                    Check Payment
                                    <input type="checkbox" id="payment" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="checkout_input_checkbox">
                                <label htmlFor="paypal">
                                    Paypal
                                    <input type="checkbox" id="paypal" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <button type="submit" className="site-btn">PLACE ORDER</button>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default CheckOut;