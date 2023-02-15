
import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import shopingCartPic1 from "../images/shopping-cart/cart-1.jpg"
import shopingCartPic2 from "../images/shopping-cart/cart-2.jpg"
import shopingCartPic3 from "../images/shopping-cart/cart-3.jpg"
import shopingCartPic4 from "../images/shopping-cart/cart-4.jpg"

function ShoppingCart() {


    return (
        <div>
            <Header />
            <Navbar />

            <div className="shop_breadcrumb">
                <h4>Shop</h4>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" href="/">Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to="/shop" href="/shop">Shop</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                </ol>
            </div>
            <section className="shopping-cart m-2">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping_cart_table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='trbody'>
                                            <td className="product_cart_item">
                                                <div className="product_cart_item_pic">
                                                    <img src={shopingCartPic1} alt="" />
                                                </div>
                                                <div className="product_cart_item_text">
                                                    <h6>T-shirt Contrast Pocket</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td className="quantity_item">
                                                <div className="quantity">
                                                    <div className="pro-qty-2">
                                                        <input type="number" defaultValue="0" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart_price">$30.00</td>
                                            <td className="cart_close"><i className="fa fa-close"></i></td>
                                        </tr>
                                        <tr>
                                            <td className="product_cart_item">
                                                <div className="product_cart_item_pic">
                                                    <img src={shopingCartPic2} alt="" />
                                                </div>
                                                <div className="product_cart_item_text">
                                                    <h6>Diagonal Textured Cap</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td className="quantity_item">
                                                <div className="quantity">
                                                    <div className="pro-qty-2">
                                                        <input type="number" defaultValue="0" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart_price">$32.50</td>
                                            <td className="cart_close"><i className="fa fa-close"></i></td>
                                        </tr>
                                        <tr>
                                            <td className="product_cart_item">
                                                <div className="product_cart_item_pic">
                                                    <img src={shopingCartPic3} alt="" />
                                                </div>
                                                <div className="product_cart_item_text">
                                                    <h6>Basic Flowing Scarf</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td className="quantity_item">
                                                <div className="quantity">
                                                    <div className="pro-qty-2">
                                                        <input type="number" defaultValue="0" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart_price">$47.00</td>
                                            <td className="cart_close"><i className="fa fa-close"></i></td>
                                        </tr>
                                        <tr>
                                            <td className="product_cart_item">
                                                <div className="product_cart_item_pic">
                                                    <img src={shopingCartPic4} alt="" />
                                                </div>
                                                <div className="product_cart_item_text">
                                                    <h6>Basic Flowing Scarf</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td className="quantity_item">
                                                <div className="quantity">
                                                    <div className="pro-qty-2">
                                                        <input type="number" defaultValue="0" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart_price">$30.00</td>
                                            <td className="cart_close"><i className="fa fa-close"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="continue_btn mb-3">
                                        <Link href="#">Continue Shopping</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="continue_btn update_btn">
                                        <Link href="#"><i className="fa fa-spinner"></i> Update cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart_discount">
                                <form action="#">
                                    <input type="text" placeholder="Coupon code" />
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                            <div className="cart_total">
                                <h6><strong>Cart Total</strong></h6>
                                <ul>
                                    <li>Subtotal <span>$ 169.50</span></li>
                                    <li>Total <span>$ 169.50</span></li>
                                </ul>
                                <Link href="#" className="primary-btn">Proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ShoppingCart;
