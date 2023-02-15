import React from 'react'
import { Link } from 'react-router-dom'
import product1 from "../images/product/product-2.jpg"
import product2 from "../images/product/product-3.jpg"
import product3 from "../images/product/product-4.jpg"
import product4 from "../images/product/product-5.jpg"
import product5 from "../images/product/product-6.jpg"
import product6 from "../images/product/product-7.jpg"


function Slider() {
    return (
       <div className="best_seller">
           <h2 className='animate__animated animate__heartBeat'>Best Sellers</h2>
            <div className="slider">
            <div className="slider_card">
                <div className="slider_image">
                    <img src={product1} alt="" />
                </div>
                <h6 className='card-title'>Piqué Biker Jacket</h6>
                <Link href="#">+ Add To Cart</Link>
                <h5>$43.48</h5>
            </div>
            <div className="slider_card">
                <div className="slider_image">
                    <img src={product2} alt="" />
                </div>
                <h6 className='card-title'>Ankle Boots</h6>
                <Link href="#">+ Add To Cart</Link>
                <h5>$43.48</h5>
            </div>
            <div className="slider_card">
                <div className="slider_image">
                    <img src={product3} alt="" />
                </div>
                <h6 className='card-title'>Jack & Jones Hoodie</h6>
                <Link href="#">+ Add To Cart</Link>
                <h5>$43.48</h5>
            </div>
            <div className="slider_card">
                <div className="slider_image">
                    <img src={product4} alt="" />
                </div>
                <h6 className='card-title'>Contrast Pocket T-shirt</h6>
                <Link href="#">+ Add To Cart</Link>
                <h5>$43.48</h5>
            </div>
            <div className="slider_card">
                <div className="slider_image">
                    <img src={product5} alt="" />
                </div>
                <h6 className="card-title">Basic Flowing Scarf</h6>
                <Link href="#">+ Add To Cart</Link>
                <h5>$43.48</h5>
            </div>
            <div className="slider_card">
                <div className="slider_image">
                    <img src={product6} alt="" />
                </div>
                <h6 className='card-title'>Waterproof Leather BagPack</h6>
                <Link href="#">+ Add To Cart</Link>
                <h5>$43.48</h5>
            </div>
        </div>
       </div>
    )
}

export default Slider
