
import React from 'react'
import { Link } from 'react-router-dom';
import ShopCards from '../Components/ShopCards';
import ShopSidebar from '../Components/ShopSidebar';

function Shop() {
    return (
        <div>
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
                    <ShopCards />
                </div>

            </div>

        </div>
    )
}

export default Shop;
