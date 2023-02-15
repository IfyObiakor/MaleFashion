import {Link} from "react-router-dom"


function Header() {
    return (
            <div className="header_wrapper">
                <div className="header_text">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>

                <div className="header_links">
                    <Link href="#">SIGN IN</Link>
                    <Link href="#">FAQs</Link>
                    <div>
                    <select style= {{backgroundColor: "black",  color: "whitesmoke", border:"0" }}>
                            <option defaultValue="">USD</option>
                            <option value="1">CAD</option>
                            <option value="2">EUR</option>
                            <option value="3">GBP</option>
                        </select>
                    </div>
                </div>
            </div>
    );
}

export default Header;