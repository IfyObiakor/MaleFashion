
import React from 'react'
import { Link } from 'react-router-dom'

function ShopSidebar() {
    return (
        <div>
            <div className='container mb-5'>
                <form className="d-flex" role="search">
                    <input className="form-control" type="search submit" placeholder="Search..." aria-label="Search" />
                    <button className="btn" type="submit"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                </form>


                <div className="accordion mt-4" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <strong>CATEGORIES</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <ul className='catergoriesMenu'>
                                    <li><Link href="#">Men (20)</Link></li>
                                    <li><Link href="#">Women (20)</Link></li>
                                    <li><Link href="#">Bags (20)</Link></li>
                                    <li><Link href="#">Clothing (20)</Link></li>
                                    <li><Link href="#">Shoes (20)</Link></li>
                                    <li><Link href="#">Accessories (20)</Link></li>
                                    <li><Link href="#">Kids (20)</Link></li>
                                    <li><Link href="#">Kids (20)</Link></li>
                                    <li><Link href="#">Kids (20)</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <strong> BRANDS</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <ul className='brandsMenu'>
                                    <li><Link href="#">Louis Vuitton</Link></li>
                                    <li><Link href="#">Chanel</Link></li>
                                    <li><Link href="#">Hermes</Link></li>
                                    <li><Link href="#">Gucci</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <strong>FILTER PRICE</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <ul className='filterMenu' >
                                    <li><Link href="#">$0.00 - $50.00</Link></li>
                                    <li><Link href="#">$50.00 - $100.00</Link></li>
                                    <li><Link href="#">$100.00 - $150.00</Link></li>
                                    <li><Link href="#">$150.00 - $200.00</Link></li>
                                    <li><Link href="#">$200.00 - $250.00</Link></li>
                                    <li><Link href="#">250.00+</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                <strong>SIZE</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                            <div className="accordion-body">
                                <div className="sizeMenu">
                                    <label htmlFor="xs">xs
                                        <input type="radio" id="xs" />
                                    </label>
                                    <label htmlFor="sm">s
                                        <input type="radio" id="sm" />
                                    </label>
                                    <label htmlFor="md">m
                                        <input type="radio" id="md" />
                                    </label>
                                    <label htmlFor="xl">xl
                                        <input type="radio" id="xl" />
                                    </label>
                                    <label htmlFor="2xl">2xl
                                        <input type="radio" id="2xl" />
                                    </label>
                                    <label htmlFor="xxl">xxl
                                        <input type="radio" id="xxl" />
                                    </label>
                                    <label htmlFor="3xl">3xl
                                        <input type="radio" id="3xl" />
                                    </label>
                                    <label htmlFor="4xl">4xl
                                        <input type="radio" id="4xl" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <strong> COLORS</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                            <div className="accordion-body">
                                <div className="colorsMenu">
                                    <label className="c-1" htmlFor="sp-1">
                                        <input type="radio" id="sp-1" />
                                    </label>
                                    <label className="c-2" htmlFor="sp-2">
                                        <input type="radio" id="sp-2" />
                                    </label>
                                    <label className="c-3" htmlFor="sp-3">
                                        <input type="radio" id="sp-3" />
                                    </label>
                                    <label className="c-4" htmlFor="sp-4">
                                        <input type="radio" id="sp-4" />
                                    </label>
                                    <label className="c-5" htmlFor="sp-5">
                                        <input type="radio" id="sp-5" />
                                    </label>
                                    <label className="c-6" htmlFor="sp-6">
                                        <input type="radio" id="sp-6" />
                                    </label>
                                    <label className="c-7" htmlFor="sp-7">
                                        <input type="radio" id="sp-7" />
                                    </label>
                                    <label className="c-8" htmlFor="sp-8">
                                        <input type="radio" id="sp-8" />
                                    </label>
                                    <label className="c-9" htmlFor="sp-9">
                                        <input type="radio" id="sp-9" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                <strong> TAGS</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                            <div className="accordion-body">
                                <div className="tagsMenu">
                                    <Link href="#">Product</Link>
                                    <Link href="#">Bags</Link>
                                    <Link href="#">Shoes</Link>
                                    <Link href="#">Clothing</Link>
                                    <Link href="#">Hats</Link>
                                    <Link href="#">Accessories</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ShopSidebar
