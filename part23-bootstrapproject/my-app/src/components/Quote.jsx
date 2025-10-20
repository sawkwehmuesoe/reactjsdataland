import React from "react"
import phoneicon from "../assets/img/icon/phoneicon.png";

const Quote = ()=>{
    return (
        <>
            
            	{/* Start Request Quotation */}

                <section>

                    <div class="container">

                        <div class="quotes">

                            <div class="infos">
                                <div class="me-5" >
                                    <img src={phoneicon} class="phoneicons"  alt="phoneicon" />
                                </div>
                                <div class="text-light">
                                    <h2 class="fw-bold text-uppercase">Request A Free Quote </h2>
                                    <p class="lead">Get answer and advice from people you want it from.</p>
                                </div>

                            </div>

                            <div>
                                <a href="tel:09422042225" class="btn btn-calls">Call Now<i class="fas fa-phone"></i></a>
                            </div>
                        </div>

                    </div>

                </section>

                {/* End Request Quotation */}

        </>
    )
};

export default Quote;