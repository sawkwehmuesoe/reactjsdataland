import React from "react"

const Footer = ()=>{
    return (
        <>
            {/* Start Footer Section */}
            <footer class="bg-dark px-5">
                <div class="container-fluid">
                    <div class="row text-light py-4">


                        <div class="col-md-3 col-sm-6">
                            <h5 class="mb-3"><img src="./assets/img/fav/favicon.png" width="70px" alt="footericon" />About Plannco</h5>
                            <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <h5 class="mb-3">Visit Us</h5>
                            <ul class="list-unstyled">
                                <li><a href="#index.html" class="footerlinks">Home</a></li>
                                <li><a href="#about" class="footerlinks">About Us</a></li>
                                <li><a href="#properties" class="footerlinks">Properties</a></li>
                                <li><a href="#services" class="footerlinks">Services</a></li>
                                <li><a href="#customers" class="footerlinks">Customer</a></li>
                                <li><a href="#furniture" class="footerlinks">Furniture</a></li>
                                <li><a href="#contact" class="footerlinks">Contact</a></li>
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
                            <li ><a href="#" class="nav-link"><i class="fab fa-twitter"></i></a></li>
                            <li class="mx-3"><a href="#" class="nav-link"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#" class="nav-link"><i class="fab fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* End Footer Section */}
        </>
    )
};

export default Footer;