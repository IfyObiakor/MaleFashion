
import React from "react";

function ContactUs() {

    
    return (
        <div>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe className="gmap_iframe"
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ikeja, nigeria&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="myFrame"></iframe>
                    <a href="https://formatjson.org/">format json</a>
                </div>

            </div>

            <div className="m-2">
                <div className="container">
                    <div className="row contact_area">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact_text">
                                <div className="section_title">
                                    <span>INFORMATION</span>
                                    <h2>Contact Us</h2>
                                    <p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
                                </div>
                                <div>
                                    <h4>Nigeria</h4>
                                    <p>Ikeja, Lagos. <br />+234 123 4567 789</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact_form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Message"></textarea>
                                            <button type="submit" className="btn btn-dark p-3 mb-5">SEND MESSAGE</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;