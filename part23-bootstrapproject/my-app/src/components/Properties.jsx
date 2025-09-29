import React,{useEffect, useState} from "react"
import $ from 'jquery' // import jquery to your component

// import all image 
import image1 from "../assets/img/gallery/image1.jpg"
import image2 from "../assets/img/gallery/image2.jpg"
import image3 from "../assets/img/gallery/image3.jpg"
import image4 from "../assets/img/gallery/image4.jpg"
import image5 from "../assets/img/gallery/image5.jpg"
import image6 from "../assets/img/gallery/image6.jpg"
import image7 from "../assets/img/gallery/image7.jpg"
import image8 from "../assets/img/gallery/image8.jpg"
import image9 from "../assets/img/gallery/image9.jpg"
import building from "../assets/img/etc/building4.png"

import 'lightbox2/dist/css/lightbox.min.css'
import 'lightbox2/dist/js/lightbox.min.js'

const Properties = ()=>{

    const properties = [
        {id:1,image:image1,category:"house",title:"Modern House"},
        {id:2,image:image2,category:"house",title:"Country House"},
        {id:3,image:image3,category:"house",title:"Modern House"},
        {id:4,image:image4,category:"decoration",title:"Living Room"},
        {id:5,image:image5,category:"decoration",title:"Bedroom"},
        {id:6,image:image6,category:"decoration",title:"Kitchen"},
        {id:7,image:image7,category:"furniture",title:"Sofa Set"},
        {id:8,image:image8,category:"furniture",title:"Dining Table"},
        {id:9,image:image9,category:"furniture",title:"Bed Frame"},
        {id:10,image:image1,category:"office",title:"Workspace"},
        {id:11,image:image2,category:"office",title:"Confedience Room"},
        {id:12,image:image3,category:"office",title:"Excecutive Office"},
        {id:13,image:image4,category:"decoration",title:"Bedroom"},
        {id:14,image:image5,category:"decoration",title:"Living Room"},
        {id:15,image:image6,category:"house",title:"Country House"},
        {id:16,image:image7,category:"furniture",title:"Bed Frame"}
    ];

    const listfilters = ["all","house","decoration","furniture","office"];

    const [activeFilter,setActiveFilter] = useState("all");

    // Filter properties based on active or filter category 
    const filterproperties = activeFilter === "all" ? properties : properties.filter(property => property.category === activeFilter);

    // useEffect(()=>{
    //     $('.titles').css('color','red')
    // })

    return (
        <>
            <section id="properties" className="py-5">
		
                <div className="container-fluid">
                    {/* start title */}

                    <div className="row text-center">
                        <div className="col">
                            <h3 className="titles">Properties</h3>
                        </div>
                    </div>

                    {/* end title */}

                    <ul className="list-inline text-center text-uppercase fw-bold ">
                        {/* <li className="list-inline-item propertylists" data-filter="all">All<span className="text-muted mx-md-5 mx-3">/</span></li>
                        <li className="list-inline-item propertylists" data-filter="house">House<span className="text-muted mx-md-5 mx-3">/</span></li>
                        <li className="list-inline-item propertylists" data-filter="decoration">Decoration<span className="text-muted mx-md-5 mx-3">/</span></li>
                        <li className="list-inline-item propertylists" data-filter="furniture">Furniture<span className="text-muted mx-md-5 mx-3">/</span></li>
                        <li className="list-inline-item propertylists" data-filter="office">Office<span className="text-muted mx-md-5 mx-3"></span></li> */}

                        {
                            listfilters.map((listfilter,idx)=>(
                                <li key={idx} className={`list-inline-item propertylists ${ activeFilter === listfilter ? "activeitems" : ""}`} onClick={()=>setActiveFilter(listfilter)}>
                                    {listfilter}
                                    {listfilter !== "office" && <span className="text-muted mx-md-5 mx-3">/</span>}
                                </li>
                            ))
                        }
                    </ul>

                    <div className="container-fluid">
                        
                        <div className="d-flex flex-wrap justify-content-center">

                            {
                                filterproperties.map(propertie=>(
                                    <div key={propertie.id} className={`filters ${propertie.category}`}>
                                        <a href={propertie.image} data-lightbox='property' data-title={propertie.title}>
                                            <img src={propertie.image} alt={propertie.title} width="200px" />
                                        </a>
                                    </div>
                                ))
                            }

                           
                        </div>
                        


                    </div>


                </div>

            </section>

            <section className="p-5 missions">

                <div className="container">

                    <div className="row align-items-center">
                        <div className="col-lg-5 text-center">
                            <img src={building} className="advimages"  alt="" />
                        </div>

                        <div className="col-lg-7 text-white text-center text-lg-end advtexts">
                            <h1>What is Plannco & How we started our business in Myanmar</h1>
                            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    
                </div>
                
            </section>

        </>
    )
};

export default Properties;