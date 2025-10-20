import React from "react"

import services1 from "../assets/img/icon/services1.png";
import services2 from "../assets/img/icon/services2.png";
import services3 from "../assets/img/icon/services3.png";
import services4 from "../assets/img/icon/services4.png";
import services5 from "../assets/img/icon/services5.png";
import services6 from "../assets/img/icon/services6.png";

const Furniture = ()=>{
    return (
        <>
            {/* Start Furniture Service Section */}

            <section id="furniture" class="bg-light text-center py-3">

                <div class="container">
                    {/* start title */}
                    <div class="row">
                        <div class="col">
                            <h3 class="titles">Furniture Services</h3>
                            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    {/* end title */}

                    <div class="row furicons">
                        <div class="col-md-4">
                            <img src={services1} alt="services1"/>
                            <h4>Fast Service</h4>
                            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div class="col-md-4">
                            <img src={services2} alt="services2"/>
                            <h4>Secure payments</h4>
                            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div class="col-md-4">
                            <img src={services3} alt="services3"/>
                            <h4>Expert Team</h4>
                            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div class="col-md-4">
                            <img src={services4} alt="services4"/>
                            <h4>Affordable Service</h4>
                            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div class="col-md-4">
                            <img src={services5} alt="services5"/>
                            <h4>90 Days warranty</h4>
                            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div class="col-md-4">
                            <img src={services6} alt="services6"/>
                            <h4>Award Winning</h4>
                            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                    </div>

                </div>
                
            </section>

            {/* End Furniture Service Section */}
        </>
        
    )
};

export default Furniture;