import React from "react"
import userone from "../assets/img/users/user1.jpg";
import usertwo from "../assets/img/users/user2.jpg";
import userthree from "../assets/img/users/user3.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Customers = ()=>{
    return (
        <>


            {/* Start Customer Section */}

            <section id="customer" class="py-3 customers">

                <div class="container-fluid">

                    {/* start title */}

                    <div class="row text-center">
                        <div class="col">

                            <h3 class="titles text-light">What Customer says?</h3>
                            
                        </div>
                    </div>

                    {/* end title */}

                    <div class="row">
                        <div class="col-md-6 mx-auto">

                            <div id="customercarousels" class="carousel slide" data-bs-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-bs-target="#customercarousels" class="active" data-bs-slide-to="0"></li>
                                    <li data-bs-target="#customercarousels" data-bs-slide-to="1" ></li>
                                    <li data-bs-target="#customercarousels" data-bs-slide-to="2" ></li>
                                </ol>

                                <div class="carousel-inner">

                                    {/* Start user1 */}
                                    <div class="carousel-item text-center active">
                                        <img src={userone} class="rounded-circle my-5" width="150px" alt="user1"  />

                                        <blockquote class="text-white">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                        </blockquote>

                                        <h5 class="text-light text-uppercase fw-bold mb-3">Ms.July</h5>

                                        <ul class="list-inline mb-5">
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                        </ul>
                                    </div>
                                    {/* End user1 */}

                                    {/* Start user2 */}
                                    <div class="carousel-item text-center">
                                        <img src={usertwo} class="rounded-circle my-5" width="150px" alt="user2"  />

                                        <blockquote class="text-white">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                        </blockquote>

                                        <h5 class="text-light text-uppercase fw-bold mb-3">Mr.Anton</h5>

                                        <ul class="list-inline mb-5">
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                        </ul>
                                    </div>
                                {/* End user2 */}

                                {/* Start user3 */}
                                    <div class="carousel-item text-center">
                                        <img src={userthree} class="rounded-circle my-5" width="150px" alt="user3  "  />

                                        <blockquote class="text-white">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                        </blockquote>

                                        <h5 class="text-light text-uppercase fw-bold mb-3">Ms.Yoon</h5>

                                        <ul class="list-inline mb-5">
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                            <li class="list-inline-item"><FontAwesomeIcon icon="fa-solid fa-star" className="text-warning" /></li>
                                        </ul>
                                    </div>
                                {/* End user3 */}

                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>

            </section>

            {/* End Customer Section */}

        </>
    )
};

export default Customers;