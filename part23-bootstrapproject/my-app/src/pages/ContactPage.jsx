import React,{useState,useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import banner4 from "../assets/img/banner/banner4.jpg"

const ContactPage = ()=>{
   
        return (
            <main className="bg-dark text-light">
    
            {/* Banner */}
                <section className="text-center d-flex justify-content-center align-items-center" style={{
                    minHeight:"70vh",
                    backgroundImage:`url(${banner4})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    backgroundRepeat:"no-repeat"
                }}>
                    <div className="container bg-dark bg-opacity-50 rounded">
                        <h1 className="display-6">Let's Connect</h1>
                        <p className="lead">Have questions? Our team is here to help!</p>
                    </div>
                </section>
    
                <section className="bg-black text-light py-5">
                    <div className="container text-center">
                        <div className="text-center mb-5">
                            <h3 className="mb-4">What Our Clients Say?</h3>
                            <p className="lead">Trusted by thousand of customer worldwide</p>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="card h-100 bg-dark border-light border-1 rounded-3">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-4">
                                            <img src="https://randomuser.me/api/portraits/men/10.jpg" className="rounded-circle me-3" width="60" height="60"  alt="men" />
                                            <div>
                                                <h5 className="text-light mb-0">Mr. Aung Aung</h5>
                                                <p className="text-light mb-0">Manager</p>
                                            </div>
                                        </div>
                                        <p className="card-text text-light">"The support team was incredibly responsive..."</p>
                                        <div className="text-warning">
                                            <FontAwesomeIcon icon="fa-solid fa-star"/>
                                            <FontAwesomeIcon icon="fa-solid fa-star"/>
                                            <FontAwesomeIcon icon="fa-solid fa-star"/>
                                            <FontAwesomeIcon icon="fa-solid fa-star"/>
                                            <FontAwesomeIcon icon="fa-solid fa-star"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </section>
                
                <section className="bg-light text-dark py-5">
                    <div className="container">
    
                        <h3 className="text-center mb-5">Send Us a Message</h3>
    
                        <div className="row justify-content-center">

                            <div className="col-md-8">
                                <form onSubmit="" action="">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="name" className="form-label">Your Name</label>
                                            <input type="text" name="name" id="name" className="form-control form-control-sm" value="" onChange="" placeholder="Enter your name" autoFocus required />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label">Your Email</label>
                                            <input type="email" name="email" id="email" className="form-control form-control-sm" value="" onChange="" placeholder="Enter your email" autoFocus required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label"></label>
                                            <textarea name="message" id="message" className="form-control form-control-sm" rows="5" onChange="" placeholder="Write your message here" autoFocus required></textarea>
                                        </div>
                                        <div className="text-end">
                                            <button type="submit" className="btn btn-primary px-4">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
    
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-fluid p-0">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1261.152796220018!2d96.12767732456469!3d16.850136174384048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194eb896b3ba3%3A0xc88bbb7bc2b04b7a!2sV42H%2B452%20MICT%20Park%2C%20Building%2C%2019%202nd%20Floor%2C%20Yangon%2011052%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2sth!4v1760933428626!5m2!1sen!2sth" 
                            width="100%" 
                            height="300" 
                            style={{border:0}} 
                            allowFullscreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
    
            </main>
        )
};

export default ContactPage;