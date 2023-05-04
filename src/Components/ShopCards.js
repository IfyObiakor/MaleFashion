import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import product1 from "../images/product/product-2.jpg"
import product2 from "../images/product/product-3.jpg"
import product3 from "../images/product/product-4.jpg"
import product4 from "../images/product/product-5.jpg"
import product5 from "../images/product/product-6.jpg"
import product6 from "../images/product/product-7.jpg"
import product7 from "../images/product/product-8.jpg"
import product8 from "../images/product/product-9.jpg"
import product9 from "../images/product/product-10.jpg"
import product10 from "../images/product/product-11.jpg"
import product11 from "../images/product/product-12.jpg"
import product12 from "../images/product/product-13.jpg"

function ShopCards() {

    const [cart , setCart] = useState("")

    const handleClick = () => {
        
        console.log("hello")
    }

    
    return (
        <div className="container">
            <div className='row shopCards'>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Piqué Biker Jacket</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Ankle Boots</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Jack & Jones Hoodie</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Contrast Pocket T-shirt</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product5} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-text">Basic Flowing Scarf</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product6} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Waterproof Leather BagPack</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product7} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Plain Classic T-shirt</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product8} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Flowered T-shirt</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product9} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Zara Perfume Set</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product10} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Multi-pocket BagPack</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5>$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product11} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Vintage Hoodie</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-6 shopCards_content">
                    <img src={product12} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className='card-text'>Classic Laptop Bag</h6>
                        <Link className="card-text" href="#" onClick={handleClick}>+ Add To Cart</Link>
                        <h5 className="card-text">$43.48</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopCards
