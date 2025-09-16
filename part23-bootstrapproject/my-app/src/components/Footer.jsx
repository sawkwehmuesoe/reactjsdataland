import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import favicon from "../assets/img/fav/favicon.png"
import { Link } from "react-router";

const Footer = ()=>{
    return (
        <>
            {/* Start Footer Section */}
            <footer class="bg-dark px-5">
                <div class="container-fluid">
                    <div class="row text-light py-4">


                        <div class="col-md-3 col-sm-6">
                            <h5 class="mb-3"><img src={favicon} width="70px" alt="footericon" />About Plannco</h5>
                            <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <h5 class="mb-3">Visit Us</h5>
                            <ul class="list-unstyled">
                                <li><Link to="/" class="footerlinks">Home</Link></li>
                                <li><Link to="/abouts" class="footerlinks">About Us</Link></li>
                                <li><Link to="/properties" class="footerlinks">Properties</Link></li>
                                <li><Link to="/services" class="footerlinks">Services</Link></li>
                                <li><Link to="/customers" class="footerlinks">Customer</Link></li>
                                <li><Link to="/furnitures" class="footerlinks">Furniture</Link></li>
                                <li><Link to="/contacts" class="footerlinks">Contact</Link></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <h5 class="mb-3">Need Help?</h5>

                            <ul class="list-unstyled">
                                <li><a href="#" class="footerlinks text-uppercase">Customer Service</a></li>
                                <li><a href="#" class="footerlinks text-uppercase">Online Chat</a></li>
                                <li><a href="#" class="footerlinks text-uppercase">Support</a></li>
                                <li><a href="#" class="footerlinks text-uppercase">info@plancco.com</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <h5 class="mb-3">Contact Us</h5>
                            <ul class="list-unstyled">
                                <li>l-9/19(A,60 Street, Between Theik Pan Street And Aung San St, Mandalay</li>
                                <li>Phone: +95 9 4220 42225 / +95 9 4220 42225</li>
                            </ul>
                        </div>

                    </div>

                    <div class="text-light border-top pt-4 d-flex justify-content-between">
                        <p>&copy; <span id="getyear"></span> Copyright, Inc,All rights reserved</p>
                        <ul class="list-unstyled d-flex">
                            <li ><a href="#" class="nav-link"><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></a></li>
                            <li class="mx-3"><a href="#" class="nav-link"><FontAwesomeIcon icon="fa-brands fa-square-instagram" /></a></li>
                            <li><a href="#" class="nav-link"><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* End Footer Section */}
        </>
    )
};

export default Footer;